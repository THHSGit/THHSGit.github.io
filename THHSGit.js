$('.ui.dropdown')
  .dropdown()
;

function run() {
    setTimeout(removeLoader, 2000);
}
function removeLoader() {
    document.getElementById("loader").style.display = "none";
    plusDivsMovies(1);
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

    if (n > x.length) {slideIndexMovies = 1}

    if (n < 1) {slideIndexMovies = x.length}

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";

    }

    x[slideIndexMovies-1].style.display = "block";

}



var slideIndexAction = 1;

showDivsAction(slideIndexAction);



function plusDivsAction(n) {

    showDivsAction(slideIndexAction += n);

}



function showDivsAction(n) {

    var i;

    var x = document.getElementsByClassName("mySlidesAction");

    if (n > x.length) {slideIndexAction = 1}

    if (n < 1) {slideIndexAction = x.length}

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";

    }

    x[slideIndexAction-1].style.display = "block";

}



var slideIndexRomance = 1;

showDivsRomance(slideIndexRomance);



function plusDivsRomance(n) {

    showDivsRomance(slideIndexRomance += n);

}



function showDivsRomance(n) {

    var i;

    var x = document.getElementsByClassName("mySlidesRomance");

    if (n > x.length) {slideIndexRomance = 1}

    if (n < 1) {slideIndexRomance = x.length}

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";

    }

    x[slideIndexRomance-1].style.display = "block";

}
