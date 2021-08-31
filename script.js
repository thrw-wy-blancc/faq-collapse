const toggles = document.querySelectorAll(".faq-toggle");
const faq = document.querySelectorAll(".faq");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    });
});

