// Inicializar EmailJS con tu User ID
(function() {
    emailjs.init('user_8p0rKd1T12TA0KHXN');  // Reemplaza 'TU_USER_ID' con tu user ID de EmailJS
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevenir recarga de la página

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Parámetros para enviar a través de EmailJS
    const params = {
        name: name,
        email: email,
        message: message
    };

    // Enviar el correo con EmailJS
    emailjs.send('service_gxg3u6i', 'template_tw6vg7j', params)
        .then(function(response) {
            alert('¡Mensaje enviado! Te responderé pronto.');
        }, function(error) {
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        });

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});
