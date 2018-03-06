var retract_status = 1;
function run() {    
  setTimeout(removeLoader, 2000);    
}
function removeLoader() {
  document.getElementById("loader").style.display = "none";
}
function retract() {
  if (retract_status === 1) {
    document.getElementById("menu").style.transition = "opacity .25s ease-in-out";
    document.getElementById("menu").style.display = "none";
    document.getElementById("reretractbutton").style.display = "block";
    document.getElementById("reretractbutton").style.transition = "opacity .25s ease-out-in";
    retract_status = 0;
  } else if (retract_status === 0) {
    document.getElementById("reretractbutton").style.transition = "opacity .25s ease-in-out";
    document.getElementById("reretractbutton").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu").style.transition = "opacity .25s ease-out-in";
    retract_status = 1;
  }
}
run();

