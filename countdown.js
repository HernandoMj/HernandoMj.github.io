document.addEventListener("DOMContentLoaded", function() {
    // Fecha de inicio de la relación
    const startDate = new Date("August 27, 2024 00:00:00").getTime();

    // Función para actualizar el contador cada segundo
    function updateCountdown() {
        const now = new Date().getTime();
        const elapsedTime = now - startDate;

        // Cálculos para días, horas, minutos y segundos
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Mostrar el tiempo en el formato adecuado
        document.getElementById("countdown-timer").innerHTML = 
            days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos";

        // Actualizar cada segundo
        setTimeout(updateCountdown, 1000);
    }

    // Iniciar el contador
    updateCountdown();
});
