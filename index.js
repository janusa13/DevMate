const menu = document.getElementById("menu");
const indicador = document.getElementById("indicador");
const secciones = document.querySelectorAll(".seccion");

let tamanioIndicador = menu.querySelector("a").offsetWidth;
indicador.style.width = tamanioIndicador + "px";

let indexSeccionActiva;

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        indexSeccionActiva = [...secciones].indexOf(entrada.target);
        indicador.style.transform = `translateX(${
          tamanioIndicador * indexSeccionActiva
        }px)`;
      }
    });
  },
  {
    rootMargin: "-20px 0px 0px 0px",
    threshold: 0.2,
  }
);

secciones.forEach((seccion) => observer.observe(seccion));
