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

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Full word rukega
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 120);
}
typeEffect();


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

// ===== Certificate Popup =====

const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");
function openCertificate(imageSrc) {
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}
closeBtn.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//==============================
const menuBtn = document.getElementById("menu-btn");
const navLinksMenu = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinksMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinksMenu.classList.remove("show");
    });
});


//======================
