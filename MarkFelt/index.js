function run() {    
  setTimeout(removeLoader, 2000);    
}
function removeLoader() {
  document.getElementById("ui active dimmer").style.display = "none";
}
run();
