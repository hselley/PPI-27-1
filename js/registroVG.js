// registroVG.js
var contenido = "<tr><th>Nombre del juego</th><th>Publisher</th><th>Consola</th><th>Estado</th><th>Fecha de adquisición</th><th>Portada</th></tr>";
var estilo = 0;

function registro() {
    // Validación de los campos del formulario
    if(document.getElementById("nombre").value == false) {
        alert("Nombre vacío.");
    } else {
        document.getElementById("vg").innerHTML = contenido;
    }
}