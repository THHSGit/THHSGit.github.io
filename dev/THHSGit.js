var box1 = document.getElementById('introEO');
var box1Btn = document.getElementById("introEOBtn");
var span = document.getElementsByClassName("close")[0];
box1btn.onclick = function() {
    box1.style.display = "block";
}
span.onclick = function() {
    box1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == box1) {
        box1.style.display = "none";
    }
} 
