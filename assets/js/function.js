const video = document.querySelector('.video');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let found = false;

const content = document.querySelector('.contentCard');

// Accede a la cámara
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }})
    .then(stream => {
        video.srcObject = stream;
        video.setAttribute("playsinline", true);    // Requerido para iOS
        requestAnimationFrame(scanQR);
    });

function scanQR() {
    if(video.readyState === video.HAVE_ENOUGH_DATA && !found) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;        
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, canvas.width, canvas.height, {
            inversionAttempts: "dontInvert",
        });

        if(code) {
            found = true;
            const url = code.data;

            // Petición HTTP al backend
            fetch(`http://localhost:3000/api/leer-qr?url=${encodeURIComponent(url)}`)
                .then(response => {
                    if(!response.ok) throw new Error("No se pudo consultar el backend");
                    return response.json();
                })
                .then(data => {
                    console.log("Datos del servidor: ", data);

                    content.innerHTML = '';
                    content.innerHTML = `
                        <div class="optionsCard">
                            <div class="title">
                                <h1>¡Hola ${data.contenido.nombre.split(" ")[0]}!</h1>
                                <h2>¿QUÉ DESEAS HACER HOY?</h2>
                            </div>

                            <div class="options">
                                <div class="cardOpt">
                                    <div class="cardTitle">Revisión de libro en sala</div>
                                    <img src="./assets/images/1st.png" alt="First Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle">Revisión de libro a domicilio</div>
                                    <img src="./assets/images/2nd.png" alt="Second Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle third">Revisión tesina</div>
                                    <img src="./assets/images/3rd.png" alt="Third Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle">Consulta de revista / periódico</div>
                                    <img src="./assets/images/4th.png" alt="Fourth Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle">Sala de computación</div>
                                    <img src="./assets/images/5th.png" alt="Fifth Opt">
                                </div>                                
                            </div>
                        </div>                        
                    `;
                    
                    /*content.innerHTML = `
                        <div class="card">
                            <h2>Datos del Estudiante</h2>
                            <p><strong>Nombre:</strong> ${data.contenido.nombre}</p>
                            <p><strong>Matrícula:</strong> ${data.contenido.matricula}</p>
                            <p><strong>Carrera:</strong> ${data.contenido.carrera}</p>
                        </div>
                    `;*/
                })
                .catch(err => {
                    console.error("Error al obtener datos: ", err);
                });
        }
    }

    if(!found) requestAnimationFrame(scanQR);
}