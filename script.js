document.getElementById("btnSi").addEventListener("click", function() {
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = `
        <div class="carta mostrar">
            <h2>💖 Querida Dolli 💖</h2>
            <p>A veces la vida nos sorprende de formas inesperadas, poniendo en nuestro camino a personas que, sin previo aviso, terminan convirtiéndose en piezas fundamentales de nuestro día a día. Y eso es exactamente lo que ha sucedido contigo.</p>
            <p>No hace tanto que nos conocemos, pero la verdad es que el tiempo no siempre es el mejor indicador de la profundidad de una amistad. En este corto pero significativo tiempo, me he dado cuenta de que eres una persona increíble, de esas que brillan con luz propia y que logran dejar una huella en la vida de quienes tienen la suerte de conocerte.</p>
            <p>Desde el primer momento supe que nuestra conexión iba a ser especial, pero jamás imaginé cuánto llegaría a valorar tu amistad.</p>
            <p>Eres alguien con un corazón enorme, con una calidez y una energía que hacen que cualquier conversación sea un refugio, una fuente de alegría y complicidad.</p>
            <p>Hoy, en este día de San Valentín, quiero recordarte lo valiosa que eres, no solo para mí, sino para todos los que tienen la suerte de conocerte. El mundo necesita más personas como tú: personas que inspiran, que contagian alegría, que tienen una esencia tan auténtica y tan pura.</p>
            <p>Gracias por ser tú, por tu forma de ser, por la luz que transmites y por permitirme ser parte de tu vida. Espero que este sea solo el inicio de una amistad que dure por mucho tiempo, porque sinceramente, no me imagino mis días sin tu presencia.</p>
            <p><b>¡Feliz San Valentín Querida Dolli</b> 💕</p>

            <div class="img-container">
                <img src="imagen1.jpeg" alt="Imagen romántica">
                <img class="heart-balloon" src="goblo-corazon.png" alt="Globo de corazón">
            </div>

            <div class="img-container">
                <img src="imagen2.jpeg" alt="Otra imagen romántica">
                <img class="heart-balloon" src="goblo-corazon.png" alt="Globo de corazón">
            </div>
        </div>
    `;
});

document.getElementById("btnNo").addEventListener("click", function() {
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = `
        <h2>😢</h2>
        <p>No puedes rechazar ser mi San Valentín, porque si no lloro 😭</p>
    `;

    // Cambiar el texto del botón No para insistir más
    setTimeout(() => {
        document.getElementById("btnNo").innerText = "¿Seguro? 🥺";
    }, 1000);
    
    setTimeout(() => {
        document.getElementById("btnNo").innerText = "Piensa otra vez 💔";
    }, 2000);
});


