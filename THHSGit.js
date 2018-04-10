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
    plusDivsMovies(1);
    plusDivsMovies(-1);
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

var slideIndexMovies = 1;

showDivsMovies(slideIndexMovies);

function plusDivsMovies(n) {
    showDivsMovies(slideIndexMovies += n);
}

function showDivsMovies(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesMovies");
    if (n > x.length) {
        slideIndexMovies = 1
    }
    if (n < 1) {
        slideIndexMovies = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexMovies - 1].style.display = "block";
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("mobile-container").style.display = "block";
    document.getElementById("container").style.display = "none";
}
