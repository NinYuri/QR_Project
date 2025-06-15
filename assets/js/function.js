const video = document.querySelector('.video');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let found = false;

const content = document.querySelector('.contentCard');

// ACCESO A LA CÁMARA
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
                                    <div class="cardTitle third">Revisión Tesina</div>
                                    <img src="./assets/images/3rd.png" alt="Third Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle">Consulta de revista / periódico</div>
                                    <img src="./assets/images/4th.png" alt="Fourth Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle">Sala de Computación</div>
                                    <img src="./assets/images/5th.png" alt="Fifth Opt">
                                </div>                                
                            </div>
                        </div>                        
                    `;
                    
                    // Seleccionar todas las tarjetas de opción
                    const options = document.querySelectorAll('.cardOpt');

                    options.forEach(option => {
                        option.addEventListener('click', () => {
                            const tipo = option.querySelector('.cardTitle').textContent.trim();
                            const fecha = new Date();
                            const payload = {
                                fecha: fecha.toLocaleDateString('es-MX'),
                                nombre: data.contenido.nombre,
                                noControl: data.contenido.matricula,
                                carrera: data.contenido.carrera,
                                tipo: tipo                                
                            };

                            console.log("Registrando", payload);

                            fetch('http://localhost:3000/api/guardar-registro', {
                                method: 'POST',
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(payload)
                            })
                            .then(res => res.json())
                            .then(res => {
                                console.log("Registro guardado correctamente");
                            })
                            .catch(err => {
                                console.log("Error al guardar el registro: ", err);
                            });
                        });
                    });
                })
                .catch(err => {
                    console.error("Error al obtener datos: ", err);
                });
        }
    }

    if(!found) requestAnimationFrame(scanQR);
}