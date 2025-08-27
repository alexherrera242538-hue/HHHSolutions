// ===== CARRUSEL =====
let index = 0;
function showSlide(i) {
    const slides = document.querySelectorAll(".carousel img");
    slides.forEach(slide => slide.classList.remove("active"));
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("active");
}

function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }

document.addEventListener("DOMContentLoaded", () => {
    showSlide(index);
});

// Año actual
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle sidebar en móviles
const toggleBtn = document.querySelector('.toggle');
const sidebar = document.getElementById('sidebar');
function setExpanded(open) {
    toggleBtn.setAttribute('aria-expanded', String(open));
    sidebar.classList.toggle('open', open);
}
toggleBtn.addEventListener('click', () => {
    const open = !sidebar.classList.contains('open');
    setExpanded(open);
});

// Cerrar al tocar fuera en móvil
document.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width: 980px)').matches) {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            setExpanded(false);
        }
    }
});

// Acordeón Productos
const acc = document.querySelector('.accordion');
const submenu = document.getElementById('submenu-productos');
acc.addEventListener('click', () => {
    const open = submenu.classList.toggle('open');
    acc.setAttribute('aria-expanded', String(open));
});

