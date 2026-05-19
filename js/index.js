// ═══════════════════════════════════════════════════════════════════
// JAVASCRIPT OPTIMIZADO - RED SOCIAL EXTRACURRICULAR
// ═══════════════════════════════════════════════════════════════════

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Botón Inscribirse
  document.getElementById("btnInscribirse")?.addEventListener("click", () => {
    alert("¡Vamos a inscribirte! Completa el formulario con tus datos.");
    window.location.href = "formulario.html";
  });

  // Botón Ver Más
  document.getElementById("btnVerMas")?.addEventListener("click", () => {
    document.getElementById("actividades").scrollIntoView({ behavior: "smooth" });
  });

  // Animar elementos al cargar
  animarAlCargar();
  
  // Efecto galería
  efectoGaleria();
});

// ═══════════════════════════════════════════════════════════════════
// FUNCIÓN 1: ANIMAR ELEMENTOS AL CARGAR
// ═══════════════════════════════════════════════════════════════════

function animarAlCargar() {
  const elementos = document.querySelectorAll(
    '.welcome-section, .activities-section, .gallery-section, .testimonials-section, .faq-section, .cta-section'
  );
  
  elementos.forEach((el, index) => {
    el.style.cssText = 'opacity: 0; transform: translateY(30px);';
    
    setTimeout(() => {
      el.style.cssText = `
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
      `;
    }, index * 100);
  });
}

// ═══════════════════════════════════════════════════════════════════
// FUNCIÓN 2: EFECTO GALERÍA
// ═══════════════════════════════════════════════════════════════════

function efectoGaleria() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
}
