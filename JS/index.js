const boton = document.getElementById("btn-modal");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

boton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});


boton.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});


cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("prueba");

  if (prueba) {
    boton.addEventListener("click", (e) => {
      e.preventDefault(); 
      alert("Comencemos a realizar tu compra. Presione aceptar y posteriormente presione el color azul de ver catalogo porfavor");
    });
  } else {
    console.error("No se encontró el botón con id 'verCatalogo'");
  }
});