function openNavr() {
    document.getElementById("mySidenavr").style.width = "350px";
    document.getElementById("mySidenavr").style.zIndex = "1";
}
function openNavl() {
    document.getElementById("mySidenavl").style.width = "350px";
    document.getElementById("mySidenavl").style.zIndex = "1";
}
function openNavb() {
    document.getElementById("mySidenavb").style.height = "350px";
    document.getElementById("mySidenavb").style.zIndex = "1";
}
function closeNav() {
    document.getElementById("mySidenavr").style.width = "0";
    document.getElementById("mySidenavr").style.zIndex = "-1";
    document.getElementById("mySidenavl").style.width = "0";
    document.getElementById("mySidenavl").style.zIndex = "-1";
    document.getElementById("mySidenavb").style.height = "0px";
    document.getElementById("mySidenavb").style.zIndex = "-1";
} 
var vid = document.getElementById("audio");
vid.volume = 0.5;
