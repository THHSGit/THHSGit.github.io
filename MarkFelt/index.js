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

