// app.js
document.addEventListener("DOMContentLoaded", () => {
  // Toggle menú móvil
  const nav = document.querySelector(".nav");
  document.querySelector(".nav-toggle").onclick = () => {
    nav.classList.toggle("open");
  };

  // Carousel
  const slides = document.querySelectorAll(".slide");
  let idx = 0;
  document.querySelector(".next").onclick = () => goTo(idx + 1);
  document.querySelector(".prev").onclick = () => goTo(idx - 1);
  function goTo(i) {
    slides[idx].classList.remove("active");
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add("active");
    document.querySelector(".slides").style.transform = `translateX(-${
      idx * 100
    }%)`;
  }

  // Modales
  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.onclick = () => {
      const m = document.getElementById(btn.dataset.modal);
      m.style.display = "flex";
    };
  });
  document.querySelectorAll(".modal-close").forEach((x) => {
    x.onclick = (e) => (x.closest(".modal").style.display = "none");
  });
  window.onclick = (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  // Opcional: throttle con requestAnimationFrame
  let raf;
  document.addEventListener("mousemove", (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const xPct = (e.clientX / window.innerWidth) * 100;
      const yPct = (e.clientY / window.innerHeight) * 100;
      hero.style.backgroundPosition = `${xPct}% ${yPct}%`;
    });
  });
});

const tenis = productos.filter((p) => p.categoria === "Calzado").slice(0, 4);

const seccionTenis = document.getElementById("seccion-tenis");

tenis.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("card", "col-md-3", "mt-3");
  div.style.width = "18rem";

  div.innerHTML = `
    <img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
      <h5 class="card-title">${producto.marca} - ${producto.nombre}</h5>
      <h6>$${producto.precio}</h6>
      <div class="d-grid gap-2 d-md-block">
        <a href="#" class="btn btn-primary btn-sm mt-3">Ver más</a>
        <a href="#" class="btn btn-primary btn-sm mt-3">
          <i class="bi bi-cart px-1"></i>Agregar al carrito
        </a>
      </div>
    </div>
  `;
  seccionTenis.appendChild(div);
});

const gorras = productos.filter((p) => p.categoria === "Gorras").slice(0, 4);

const seccionGorras = document.getElementById("seccion-gorras");

gorras.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("card", "col-md-3", "mt-3");
  div.style.width = "18rem";

  div.innerHTML = `
    <img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
      <h5 class="card-title">${producto.marca} - ${producto.nombre}</h5>
      <h6>$${producto.precio}</h6>
      <div class="d-grid gap-2 d-md-block">
        <a href="#" class="btn btn-primary btn-sm mt-3">Ver más</a>
        <a href="#" class="btn btn-primary btn-sm mt-3">
          <i class="bi bi-cart px-1"></i>Agregar al carrito
        </a>
      </div>
    </div>
  `;
  seccionGorras.appendChild(div);
});
