var retract_status = 1;
function run() {
    setTimeout(removeLoaderMobile, 1500);
    setTimeout(removeLoader, 3000);
}
function removeLoaderMobile() {
    document.getElementById("loader-mobile-series").style.display = "none";
    document.getElementById("loader").style.display = "block";
}
function removeLoader() {
    document.getElementById("loader").style.display = "none";
}
function retract() {
    if (retract_status === 1) {
        document.getElementById("mobile-menu").style.display = "none";
        document.getElementById("reretractbutton").style.display = "block";
        retract_status = 0;
    } else if (retract_status === 0) {
        document.getElementById("reretractbutton").style.display = "none";
        document.getElementById("mobile-menu").style.display = "block";
        retract_status = 1;
    }
}
run();

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("mobile-container").style.display = "block";
    document.getElementById("container").style.display = "none";
}

function dropdownSM() {
    document.getElementById("dropdownSM").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
