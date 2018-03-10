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
        document.getElementById("menu").style.display = "none";
        document.getElementById("reretractbutton").style.display = "block";
        retract_status = 0;
    } else if (retract_status === 0) {
        document.getElementById("reretractbutton").style.display = "none";
        document.getElementById("menu").style.display = "block";
        retract_status = 1;
    }
}
run();

/*

Quiz Code

*/

function q1r(answer) {
    if (answer === 1) {
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "block";
    } else if (answer === 2) {
        document.getElementById("q1").style.display = "none";
        document.getElementById("retry").style.display = "block";
    }
}
function q2r(answer) {
    if (answer === 1) {
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "block";
    } else if (answer === 2) {
        document.getElementById("q2").style.display = "none";
        document.getElementById("retry").style.display = "block";
    }
}
function q3r(answer) {
    if (answer === 1) {
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "block";
    } else if (answer === 2) {
        document.getElementById("q3").style.display = "none";
        document.getElementById("retry").style.display = "block";
    }
}
function q4r(answer) {
    if (answer === 1) {
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "block";
    } else if (answer === 2) {
        document.getElementById("q4").style.display = "none";
        document.getElementById("retry").style.display = "block";
    }
}
function q5r(answer) {
    if (answer === 1) {
        document.getElementById("q5").style.display = "none";
        document.getElementById("completed").style.display = "block";
    } else if (answer === 2) {
        document.getElementById("q5").style.display = "none";
        document.getElementById("retry").style.display = "block";
    } else if (answer === 3) {
        document.getElementById("q5").style.display = "none";
        document.getElementById("retry").style.display = "block";
    }
}
function retry() {
    document.getElementById("q1").style.display = "block";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "none";
    document.getElementById("retry").style.display = "none";
    document.getElementById("completed").style.display = "none";
}
