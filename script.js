document.getElementById("btnSi").addEventListener("click", function() {
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = `
        <div class="carta mostrar">
            <h2>💖 ¡Feliz San Valentín! 💖</h2>
            <p>Hoy quiero recordarte lo especial que eres para mí. Gracias por ser parte de mi vida y por hacer cada día más bonito. 💕</p>
            <img src="imagen1.jpg" alt="Imagen romántica">
            <img src="imagen2.jpg" alt="Otra imagen romántica">
        </div>
    `;
});

document.getElementById("btnNo").addEventListener("click", function() {
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = `
        <h2>😢</h2>
        <p>No puedes rechazar ser mi San Valentín, porque si no lloro 😭</p>
    `;

    // Opcional: Cambiar el texto del botón para insistir aún más 😆
    setTimeout(() => {
        document.getElementById("btnNo").innerText = "¿Seguro? 🥺";
    }, 1000);
    
    setTimeout(() => {
        document.getElementById("btnNo").innerText = "Piensa otra vez 💔";
    }, 2000);
});
