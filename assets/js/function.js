const content = document.querySelector('.contentCard');
const input = document.querySelector('.scanner');

const loader = `
                <div class="contentLoader">
                    <svg
                        aria-label="loader being flipped clockwise and circled by three white curves fading in and out"
                        role="img"
                        height="56px"
                        width="56px"
                        viewBox="0 0 56 56"
                        class="loader">
                                            <clipPath id="sand-mound-top">
                                                <path
                                                    d="M 14.613 13.087 C 15.814 12.059 19.3 8.039 20.3 6.539 C 21.5 4.789 21.5 2.039 21.5 2.039 L 3 2.039 C 3 2.039 3 4.789 4.2 6.539 C 5.2 8.039 8.686 12.059 9.887 13.087 C 11 14.039 12.25 14.039 12.25 14.039 C 12.25 14.039 13.5 14.039 14.613 13.087 Z"
                                                    class="loader__sand-mound-top"
                                                ></path>
                                            </clipPath>
                                            <clipPath id="sand-mound-bottom">
                                                <path
                                                    d="M 14.613 20.452 C 15.814 21.48 19.3 25.5 20.3 27 C 21.5 28.75 21.5 31.5 21.5 31.5 L 3 31.5 C 3 31.5 3 28.75 4.2 27 C 5.2 25.5 8.686 21.48 9.887 20.452 C 11 19.5 12.25 19.5 12.25 19.5 C 12.25 19.5 13.5 19.5 14.613 20.452 Z"
                                                    class="loader__sand-mound-bottom"
                                                ></path>
                                            </clipPath>
                                            <g transform="translate(2,2)">
                                                <g
                                                    transform="rotate(-90,26,26)"
                                                    stroke-linecap="round"
                                                    stroke-dashoffset="153.94"
                                                    stroke-dasharray="153.94 153.94"
                                                    stroke="hsl(0,0%,100%)"
                                                    fill="none">
                                                    <circle
                                                        transform="rotate(0,26,26)"
                                                        r="24.5"
                                                        cy="26"
                                                        cx="26"
                                                        stroke-width="2.5"
                                                        class="loader__motion-thick"
                                                    ></circle>
                                                    <circle
                                                        transform="rotate(90,26,26)"
                                                        r="24.5"
                                                        cy="26"
                                                        cx="26"
                                                        stroke-width="1.75"
                                                        class="loader__motion-medium"
                                                    ></circle>
                                                    <circle
                                                        transform="rotate(180,26,26)"
                                                        r="24.5"
                                                        cy="26"
                                                        cx="26"
                                                        stroke-width="1"
                                                        class="loader__motion-thin"
                                                    ></circle>
                                                </g>
                                                <g transform="translate(13.75,9.25)" class="loader__model">
                                                    <path
                                                        d="M 1.5 2 L 23 2 C 23 2 22.5 8.5 19 12 C 16 15.5 13.5 13.5 13.5 16.75 C 13.5 20 16 18 19 21.5 C 22.5 25 23 31.5 23 31.5 L 1.5 31.5 C 1.5 31.5 2 25 5.5 21.5 C 8.5 18 11 20 11 16.75 C 11 13.5 8.5 15.5 5.5 12 C 2 8.5 1.5 2 1.5 2 Z"
                                                        fill="hsl(0,0%,100%)"
                                                    ></path>

                                                    <g stroke-linecap="round" stroke="hsl(35,90%,90%)">
                                                        <line
                                                            y2="20.75"
                                                            x2="12"
                                                            y1="15.75"
                                                            x1="12"
                                                            stroke-dasharray="0.25 33.75"
                                                            stroke-width="1"
                                                            class="loader__sand-grain-left"
                                                        ></line>
                                                        <line
                                                            y2="21.75"
                                                            x2="12.5"
                                                            y1="16.75"
                                                            x1="12.5"
                                                            stroke-dasharray="0.25 33.75"
                                                            stroke-width="1"
                                                            class="loader__sand-grain-right"
                                                        ></line>
                                                        <line
                                                            y2="31.5"
                                                            x2="12.25"
                                                            y1="18"
                                                            x1="12.25"
                                                            stroke-dasharray="0.5 107.5"
                                                            stroke-width="1"
                                                            class="loader__sand-drop"
                                                        ></line>
                                                        <line
                                                            y2="31.5"
                                                            x2="12.25"
                                                            y1="14.75"
                                                            x1="12.25"
                                                            stroke-dasharray="54 54"
                                                            stroke-width="1.5"
                                                            class="loader__sand-fill"
                                                        ></line>
                                                        <line
                                                            y2="31.5"
                                                            x2="12"
                                                            y1="16"
                                                            x1="12"
                                                            stroke-dasharray="1 107"
                                                            stroke-width="1"
                                                            stroke="hsl(35,90%,83%)"
                                                            class="loader__sand-line-left"
                                                        ></line>
                                                        <line
                                                            y2="31.5"
                                                            x2="12.5"
                                                            y1="16"
                                                            x1="12.5"
                                                            stroke-dasharray="12 96"
                                                            stroke-width="1"
                                                            stroke="hsl(35,90%,83%)"
                                                            class="loader__sand-line-right"
                                                        ></line>

                                                        <g stroke-width="0" fill="hsl(35,90%,90%)">
                                                            <path
                                                                d="M 12.25 15 L 15.392 13.486 C 21.737 11.168 22.5 2 22.5 2 L 2 2.013 C 2 2.013 2.753 11.046 9.009 13.438 L 12.25 15 Z"
                                                                clip-path="url(#sand-mound-top)"
                                                            ></path>
                                                            <path
                                                                d="M 12.25 18.5 L 15.392 20.014 C 21.737 22.332 22.5 31.5 22.5 31.5 L 2 31.487 C 2 31.487 2.753 22.454 9.009 20.062 Z"
                                                                clip-path="url(#sand-mound-bottom)"
                                                            ></path>
                                                        </g>
                                                    </g>

                                                    <g stroke-width="2" stroke-linecap="round" opacity="0.7" fill="none">
                                                        <path
                                                            d="M 19.437 3.421 C 19.437 3.421 19.671 6.454 17.914 8.846 C 16.157 11.238 14.5 11.5 14.5 11.5"
                                                            stroke="hsl(0,0%,100%)"
                                                            class="loader__glare-top"
                                                        ></path>
                                                        <path
                                                            transform="rotate(180,12.25,16.75)"
                                                            d="M 19.437 3.421 C 19.437 3.421 19.671 6.454 17.914 8.846 C 16.157 11.238 14.5 11.5 14.5 11.5"
                                                            stroke="hsla(0,0%,100%,0)"
                                                            class="loader__glare-bottom"
                                                        ></path>
                                                    </g>

                                                    <rect height="2" width="24.5" fill="hsl(0,0%,100%)"></rect>
                                                    <rect
                                                        height="1"
                                                        width="19.5"
                                                        y="0.5"
                                                        x="2.5"
                                                        ry="0.5"
                                                        rx="0.5"
                                                        fill="hsl(0,0%,100%)"
                                                    ></rect>
                                                    <rect
                                                        height="2"
                                                        width="24.5"
                                                        y="31.5"
                                                        fill="hsl(0,0%,100%)"
                                                    ></rect>
                                                    <rect
                                                        height="1"
                                                        width="19.5"
                                                        y="32"
                                                        x="2.5"
                                                        ry="0.5"
                                                        rx="0.5"
                                                        fill="hsl(0,0%,100%)"
                                                    ></rect>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                `;

let scannedCode = '';
let scanTimeout;
let isScanning = false;

// ESCANEO DE CÓDIGOS QR
input.addEventListener('input', () => {
    if(isScanning) return;

    clearTimeout(scanTimeout);
    scannedCode = input.value.trim();

    scanTimeout = setTimeout(() => {
        if(scannedCode !== '') {
            isScanning = true;
            content.innerHTML = loader;

            processScan(scannedCode);
            input.value = '';
        }
    }, 300);
});


function processScan(url) {
    fetch(`http://localhost:3000/api/leer-qr?url=${encodeURIComponent(url)}`)
        .then(response => {
            if(!response.ok) throw new Error("No se pudo consultar el backend");
            return response.json();
        })
        .then(data => {
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
                                    <img src="./assets/images/5th.png" alt="Second Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle third">Revisión Tesina</div>
                                    <img src="./assets/images/3rd.png" alt="Third Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle">Consulta de revista / periódico</div>
                                    <img src="./assets/images/2nd.png" alt="Fourth Opt">
                                </div>

                                <div class="cardOpt">
                                    <div class="cardTitle third">Sala de Computación</div>
                                    <img src="./assets/images/4th.png" alt="Fifth Opt">
                                </div>                                
                            </div>
                        </div>                        
            `;
                    
            // Seleccionar todas las tarjetas de opción
            const options = document.querySelectorAll('.cardOpt');

            options.forEach(option => {
                option.addEventListener('click', async (e) => {
                    e.preventDefault();     // Prevenir recarga
                    e.stopPropagation();
                    e.stopImmediatePropagation();

                    const tipo = option.querySelector('.cardTitle').textContent.trim();
                    const fecha = new Date();
                    const hora = `${fecha.getHours().toString().padStart(2, '0')}:${fecha.getMinutes().toString().padStart(2, '0')}`;
                    const payload = {
                        fecha: fecha.toLocaleDateString('es-MX'),
                        hora: hora,
                        nombre: data.contenido.nombre,
                        noControl: data.contenido.matricula,
                        carrera: data.contenido.carrera,
                        tipo: tipo                                
                    };

                    content.innerHTML = loader;

                    try {
                        const response = await fetch('http://localhost:3000/api/guardar-registro', {
                            method: 'POST',
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(payload)
                        });

                        if(!response.ok) throw new Error("Error al guardar el registro");

                        // Reiniciar escaneo
                        setTimeout(() => {
                            isScanning = false;
                            location.reload(); 
                            input.focus();
                            Toast('success', 'BIBLIOPASS' + '\n' + '\n' + '¡Registro exitoso! Puedes pasar.');
                        }, 3000);                                                           
                    } catch (error) {
                        console.error("Error:", error);
                        isScanning = false;
                        content.innerHTML = `
                            <div class="error">
                                <h1>Error</h1>
                                <h2>CÓDIGO QR INCORRECTO.</h2>
                                <h3>ENTRA A TU CREDENCIAL ACTUAL EN MINDBOX.</h3>
                                <button class="btn" onclick="location.reload()">REINTENTAR</button>
                            <div>
                        `;
                    }                           
                });
            });
        })
        .catch(() => {
            isScanning = false;
            content.innerHTML = `
                <div class="error">
                    <h1>Error</h1>
                    <h2>CÓDIGO QR INCORRECTO.</h2>
                    <h3>ENTRA A TU CREDENCIAL ACTUAL EN MINDBOX.</h3>
                    <button class="btn" onclick="location.reload()">REINTENTAR</button>
                <div>
            `;
        });
}

// Inicializar el foco en el input
window.addEventListener('click', () => input.focus());
window.addEventListener('keydown', () => input.focus());
window.onload = () => input.focus();


// MENSAJE ALERTA DE ERROR
function Toast(icon, titulo) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    });
  
    Toast.fire({
      icon: icon,
      title: titulo
    });
}