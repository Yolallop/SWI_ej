$(document).ready(function () {
    console.log("jQuery cargado y funcionando.");

    // Mostrar el formulario y ocultar el contenido principal
    $("#btnRegistrar").on("click", function () {
        $("#containerPrincipal").hide(); // Oculta el contenedor principal
        $("#formularioRegistro").fadeIn(); // Muestra el formulario con un efecto
    });

    // Botón para cancelar y volver al contenido principal
    $("#btnCancelar").on("click", function () {
        $("#formularioRegistro").fadeOut(() => {
            $("#containerPrincipal").fadeIn(); // Muestra el contenedor principal
        });
    });

    // Enviar los datos del formulario
    $("#formRegistro").on("submit", function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario

        // Obtener valores de los campos
        const nombre = $("#nombre").val().trim();
        const email = $("#email").val().trim();
        const telefono = $("#telefono").val().trim();
        const password = $("#password").val().trim();

        // Validar que todos los campos estén llenos
        if (!nombre || !email || !telefono || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Simular el envío y volver al contenido principal
        alert(`Usuario registrado:\nNombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}`);
        $("#formularioRegistro").fadeOut(() => {
            $("#containerPrincipal").fadeIn();
        });
    });
});
