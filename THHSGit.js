var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
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
