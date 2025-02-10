let noClicks = 1;
const maxNoClicks = 5;
const minNoScale = 0.65;
let noScale = 1;
let siScale = 1; 
const gifElement = document.getElementById("img-pregunta");
const noButton = document.getElementById("no-btn");
const siButton = document.getElementById("si-btn");
const buttonContainer = document.querySelector(".btn-container");
const siButtonStyle = window.getComputedStyle(siButton);
const maxSiWidth = parseFloat(siButtonStyle.maxWidth);

// array de imagenes
const imgs = ["assets/img/no1.jpg", "assets/img/no2.jpg", "assets/img/no3.jpg", "assets/img/no4.jpg", "assets/img/no5.jpg"];
// array de mensajes
const buttonMessages = ["Estas seguro??", "Pofiii", "En serio POFIII", "Po queee", "Listo me odia"];

// click al boton de no
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // cambio la imagen
        gifElement.src = imgs[noClicks];
    }

    // cambio el texto del boton
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    // ajusto el boton al largo del texto
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;

    // decremento el tamaño del boton de no
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // calculo el tamaño del bton si
    const baseWidth = parseFloat(siButtonStyle.width);
    const scaledWidth = baseWidth * siScale; 

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxSiWidth}`);

    // chequeo si es menor al maximm
    if (scaledWidth < maxSiWidth) {
        siScale += 0.5; // incremento escala
        siButton.style.transform = `scale(${siScale})`;

        const rootStyles = getComputedStyle(document.documentElement);
        const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;

        const currentGap = parseFloat(buttonContainer.style.gap) || 20;
        const newGap = Math.sqrt(currentGap * gapScaleFactor); // escala segun el factor
        buttonContainer.style.gap = `${newGap}px`;
    }

    // incremento el numero de clciks
    noClicks++;
});