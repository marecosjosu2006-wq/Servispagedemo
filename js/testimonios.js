const testimonials = [
  {
    name: "María López",
    msg: "Me ayudaron a elegir un celular con una cámara excelente. La atención fue muy buena.",
    imagen: "./public/avatar1.svg",
  },
  {
    name: "Carlos Pérez",
    msg: "Me explicaron las diferencias entre los modelos y encontré justo el equipo que necesitaba.",
    imagen: "./public/avatar2.svg",
  },
  {
    name: "Lucía Fernández",
    msg: "La compra fue rápida y sencilla. Estoy muy conforme con mi nuevo celular.",
    imagen: "./public/avatar3.svg",
  },
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function createCardTestimonial(testimonial) {
  return `
    <article class="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
      <div class="flex h-40 items-center justify-center bg-blue-50 p-4">
        <img
          src="${escapeHtml(testimonial.imagen)}"
          alt="Avatar ilustrativo de ${escapeHtml(testimonial.name)}"
          class="size-24 rounded-full object-cover"
          loading="lazy"
        />
      </div>

      <div class="flex h-full flex-col p-6">
        <p class="text-lg tracking-widest text-amber-400" aria-label="5 de 5 estrellas">
          ★★★★★
        </p>
        <blockquote class="mt-3 flex-1 text-sm leading-6 text-slate-600">
          “${escapeHtml(testimonial.msg)}”
        </blockquote>
        <h3 class="mt-5 text-base font-semibold text-slate-900">
          ${escapeHtml(testimonial.name)}
        </h3>
      </div>
    </article>
  `;
}

function renderTestimonials() {
  const container = document.getElementById("testimonials-container");

  if (!container) {
    throw new Error('No se encontró el contenedor "#testimonials-container".');
  }

  container.innerHTML = testimonials.map(createCardTestimonial).join("");
}

document.addEventListener("DOMContentLoaded", renderTestimonials);

export default testimonials;
