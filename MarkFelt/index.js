var retract_status = 1;
function run() {    
  setTimeout(removeLoader, 2000);    
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
    document.getElementById("menu").style.display = "block";
    document.getElementById("reretractbutton").style.display = "none";
    retract_status = 1;
  }
}
run();

