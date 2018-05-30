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
run();
