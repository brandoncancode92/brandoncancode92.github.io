// Navbar
// Show hamburger links on click
function showLinks() {
    var navbarNav = document.getElementById("navbarNav");
    if (navbarNav.classList.contains("collapse")) {
        navbarNav.classList.remove("collapse");
    } else {
        navbarNav.classList.add("collapse");
    }
}

// Main banner
// Career title animation
var typed = new Typed(".auto-type", {
    strings: ["Software Engineer", "Web/Game Developer"],
    typeSpeed: 100,
    backSpeed:150,
    loop: true
})
// End of main banner

// About me
// Change spanned text color
var python = document.getElementById("python");
var learn = document.getElementById("learn");
var secure = document.getElementById("secure");
var color = ["black", "white"];
var i = 0;
var currentElement = null;

function change() {
    if (currentElement !== null) {
        currentElement.style.color = "black";
    }

    currentElement = (currentElement === null) ? secure :
                        (currentElement === secure) ? learn :
                        (currentElement === learn) ? python : secure;

    currentElement.style.color = color[i];
    i++;

    if (i > color.length - 1) {
        i = 0;
    }
}

setInterval(change, 750);

// Slideshow
var slideIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("my_slides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1}
x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

// Hover event
function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}
// End of about me