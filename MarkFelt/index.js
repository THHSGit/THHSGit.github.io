var retract_status = 1;
function run() {    
  setTimeout(removeLoader, 2000);    
}
function removeLoader() {
  document.getElementById("loader").style.display = "none";
}
function retract() {
  if (i = 1) {
    document.getElementById("menu").style.display = "none";
    document.getElementById("reretractbutton").style.display = "block";
    i = 0;
  } else if (i = 0) {
    document.getElementById("menu").style.display = "block";
    document.getElementById("reretractbutton").style.display = "none";
    i = 1;
  }
}
run();

