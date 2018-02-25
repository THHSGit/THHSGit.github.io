function run() {    
  setTimeout(removeLoader, 2000);    
}
function removeLoader() {
  document.getElementById("ui segment").style.display = "none";
}
