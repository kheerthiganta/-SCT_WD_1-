// ===========================
// Navbar Scroll Effect
// ===========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ===========================
// Progress Bar
// ===========================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


// ===========================
// Active Navigation Link
// ===========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// ===========================
// Smooth Scroll
// ===========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            document
            .querySelector(
                this.getAttribute("href")
            )
            .scrollIntoView({

                behavior: "smooth"

            });

        }
    );

});


// ===========================
// Reveal Animation
// ===========================

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add(
                "show"
            );

        }

    });

},

{
    threshold: 0.15
}

);

const hiddenElements =
document.querySelectorAll(

".about-card,\
.service-card,\
.feature,\
.testimonial,\
.stat,\
.contact-container"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===========================
// Counter Animation
// ===========================

const counters =
document.querySelectorAll(".stat h2");

const counterObserver =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter =
entry.target;

const target =
counter.innerText;

let finalValue =
parseInt(target);

let currentValue = 0;

let increment =
finalValue / 100;

const updateCounter = () => {

if(currentValue < finalValue){

currentValue += increment;

counter.innerText =
Math.floor(currentValue) + "+";

requestAnimationFrame(
updateCounter
);

}
else{

counter.innerText = target;

}

};

updateCounter();

counterObserver.unobserve(
counter
);

}

});

},

{
threshold:0.5
}

);

counters.forEach(counter => {

counterObserver.observe(counter);

});


// ===========================
// Mobile Menu
// ===========================

const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle(
        "mobile-active"
    );

});


// ===========================
// Mouse Glow Effect
// ===========================

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener(
"mousemove",
(e) => {

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}
);


// ===========================
// Button Ripple Effect
// ===========================

const buttons =
document.querySelectorAll(
"button"
);

buttons.forEach(button => {

button.addEventListener(
"click",
function(e){

const ripple =
document.createElement("span");

const rect =
button.getBoundingClientRect();

const size =
Math.max(
rect.width,
rect.height
);

ripple.style.width =
size + "px";

ripple.style.height =
size + "px";

ripple.style.left =
e.clientX -
rect.left -
size / 2 +
"px";

ripple.style.top =
e.clientY -
rect.top -
size / 2 +
"px";

ripple.classList.add(
"ripple"
);

button.appendChild(ripple);

setTimeout(() => {

ripple.remove();

}, 600);

});
});


// ===========================
// Hero Floating Effect
// ===========================

const cards =
document.querySelectorAll(
".glass-card"
);

window.addEventListener(
"mousemove",
(e) => {

const x =
(window.innerWidth / 2 -
e.pageX) / 40;

const y =
(window.innerHeight / 2 -
e.pageY) / 40;

cards.forEach(card => {

card.style.transform =
`translate(${x}px, ${y}px)`;

});

});


// ===========================
// Console Signature
// ===========================

console.log(
"%cNEXORA WEBSITE LOADED 🚀",
"color:#00E5FF;font-size:20px;font-weight:bold;"
);