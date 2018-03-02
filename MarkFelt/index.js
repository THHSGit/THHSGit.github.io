$('.ui.dropdown')
  .dropdown()
;
function run() {    
  setTimeout(removeLoader, 2000);    
}
function removeLoader() {
  document.getElementById("loader").style.display = "none";
}
run();
