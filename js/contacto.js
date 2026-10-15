const correoDestino = "hola@movilpoint.com";
const formulario = document.querySelector("#formulario-contacto");
const estadoFormulario = document.querySelector("#estado-formulario");

if (!formulario || !estadoFormulario) {
  throw new Error("No se encontró el formulario de contacto o su estado.");
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formulario.reportValidity()) {
    return;
  }

  const datos = new FormData(formulario);
  const asunto = `Consulta de ${datos.get("nombre")}`;
  const mensaje = [
    `Nombre: ${datos.get("nombre")}`,
    `Teléfono: ${datos.get("telefono")}`,
    `Correo: ${datos.get("email")}`,
    `Celular de interés: ${datos.get("modelo") || "Todavía no lo sé"}`,
    "",
    "Mensaje:",
    datos.get("mensaje"),
  ].join("\n");

  estadoFormulario.textContent =
    "Se abrirá tu aplicación de correo para que puedas enviar la consulta.";
  window.location.href = `mailto:${correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
});
