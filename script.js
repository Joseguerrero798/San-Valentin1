document.addEventListener("DOMContentLoaded", function () {
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const respuesta = document.getElementById("respuesta");
    const carta = document.getElementById("carta");
    const heartsContainer = document.querySelector(".hearts-container");

    // Función para generar corazones
    function crearCorazones() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
    
    setInterval(crearCorazones, 1000);

    // Acción cuando presiona "Sí"
    btnSi.addEventListener("click", function () {
        carta.classList.add("mostrar");
    });

    // Acción cuando presiona "No"
    btnNo.addEventListener("click", function () {
        respuesta.innerHTML = "No puedes rechazar ser mi San Valentín 😭";
    });
});
