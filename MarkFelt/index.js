function run() {    
  setTimeout(removeLoader, 3500);    
}
function removeLoader() {
  document.getElementById("loader").style.display = "none";
}
run();
