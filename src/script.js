lucide.createIcons();

const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");
const navhome = document.getElementById("navhome");
const navabout = document.getElementById("navabout");
const navprojects= document.getElementById("navprojects");
const navcontact = document.getElementById("navcontact");
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

const contactForm = document.getElementById("contact-form");

window.addEventListener("scroll", () => {
    if (window.scrollY >= hero.offsetHeight - 70) {
        navbar.classList.remove("absolute", "bottom-0");
        navbar.classList.add("fixed", "top-0");
    } 
    else {
        navbar.classList.add("absolute","bottom-0");
        navbar.classList.remove("fixed", "top-0");
    }
});

function setActive(link, isActive) {
    link.classList.toggle("text-red-500", isActive);
    link.classList.toggle("text-gray-300", !isActive);
    link.classList.toggle("hover:text-gray-300", isActive);
    link.classList.toggle("hover:text-red-500", !isActive);
}

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 20;

    setActive(
        navhome,
        scrollPosition >= home.offsetTop && 
        scrollPosition < about.offsetTop
    );

    setActive(
        navabout,
        scrollPosition >= about.offsetTop && 
        scrollPosition < projects.offsetTop
    );

    setActive(
        navprojects,
        scrollPosition >= projects.offsetTop &&
        scrollPosition < contact.offsetTop
    );

    setActive(
        navcontact,
        scrollPosition >= contact.offsetTop
    );
});

window.dispatchEvent(new Event("scroll"));

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = `Portfolio contact from ${name}`;

    const body = `Name: ${name}
    Email: ${email}

    Message:
    ${message}`;

    window.location.href =
    `mailto:dominik.rencsok23@gmail.com` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

});