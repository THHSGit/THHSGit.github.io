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

function dropdownPM() {
    document.getElementById("dropdownPM").classList.toggle("show");
}
function dropdownPC() {
    document.getElementById("dropdownPC").classList.toggle("show");
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

function openPerformers() {
    document.getElementById('performers').style.display = "block";
    document.getElementById('performances').style.display = "none";
}

function openPerformances() {
    document.getElementById('performances').style.display = "block";
    document.getElementById('performers').style.display = "none";
}

function closeModal() {
    document.getElementById('performers').style.display = "none";
    document.getElementById('performances').style.display = "none";
}
