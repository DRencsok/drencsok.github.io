lucide.createIcons();

const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
    if (window.scrollY >= hero.offsetHeight - 40) {
        navbar.classList.remove("absolute", "bottom-0");
        navbar.classList.add("fixed", "top-0");
    } 
    else {
        navbar.classList.add("absolute","bottom-0");
        navbar.classList.remove("fixed", "top-0");
    }
});