// Animación de botones
document.addEventListener("DOMContentLoaded", () => {
  const btnInscribirse = document.getElementById("btnInscribirse");
  const btnVerMas = document.getElementById("btnVerMas");

  btnInscribirse.addEventListener("click", () => {
    alert("¡Gracias por inscribirte en la actividad!");
  });

  btnVerMas.addEventListener("click", () => {
    alert("Pronto se mostrarán más actividades...");
  });
});
