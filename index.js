document.addEventListener("DOMContentLoaded", () => {
  const btnInscribirse = document.getElementById("btnInscribirse");
  const btnVerMas = document.getElementById("btnVerMas");

  btnInscribirse.addEventListener("click", () => {
    // Primero muestra la alerta
    alert("Debes llenar el formulario para inscribirte en la actividad");
    // Luego redirige al formulario
    window.location.href = "formulario.html"; 
    // 👆 Aquí pones el nombre de tu página de formulario
  });

  btnVerMas.addEventListener("click", () => {
    alert("Pronto se mostrarán más actividades...");
  });
});
