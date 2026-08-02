const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});


const words = [
    "BCA Student",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver"
];


let index = 0;
const typingText = document.getElementById("typing-text");
function changeText() {
    typingText.textContent = words[index];
    index++;
    if (index >= words.length) {
        index = 0;
    }
}


changeText();
setInterval(changeText, 2000);
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((element) => {
    observer.observe(element);
});

const bars = document.querySelectorAll(".progress-bar");
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const bar = entry.target;
            const value = bar.dataset.progress;
            bar.style.width = value + "%";
        }
    });
});
bars.forEach(bar=>{
    skillsObserver.observe(bar);
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});


// EmailJS Initialize
(function () {
    emailjs.init({
        publicKey: "kEzvU82UQOMc0d18g",
    });
})();

// Contact Form
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.send("service_9mclhwk", "template_8vmeqgr", {
    name: document.getElementById("from_name").value,
    email: document.getElementById("from_email").value,
    message: document.getElementById("message").value
})
    .then(function () {
        alert("✅ Message sent successfully!");
        contactForm.reset();
    })
    .catch(function (error) {
        alert("❌ Failed to send message.");
        console.log(error);
    });
});

