function run() {
    setTimeout(removeLoaderMobile, 1500);
    setTimeout(removeLoader, 3000);
    setTimeout(start, 5000);
}
function removeLoaderMobile() {
    document.getElementById("loader-mobile-series").style.display = "none";
    document.getElementById("loader").style.display = "block";
}
function removeLoader() {
    document.getElementById("loader").style.display = "none";
}
function start() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal").innerHTML = "<div id='modalheader' style='float: left;'><i class='hand pointer outline icon'></i></div> " +
        "<p>Well, this sure is an interesting website? Not very attractive is it? " +
        "Welcome to Web Design 102! " +
        "(Something better than a 101).</br>" +
        "<button onclick='LoadNew()'>Next</button></p>";
}
run();
function LoadNew() {
    document.getElementById("badWebsite").style.display = "none";
    document.getElementById("goodWebsite").style.display = "block";
    document.getElementById("modal").innerHTML = "<div id='modalheader' style='float: left;'><i class='hand pointer outline icon'></i></div>  " +
        "<p>This looks better, doesn't it? " +
        "The text is a nicer font, its more colorful, the navigation menu is more formal, and the website is used to its potential.</br>" +
        "<button onclick='one()'>Lets take a look at what this means.</button></p>";
}
function one() {
    document.getElementById("modal").innerHTML = "<div id='modalheader' style='float: left;'><i class='hand pointer outline icon'></i></div>  " +
        "<p>First, the layout of the website is more smooth as everything flows throughout the length of the website. All of the content is aligned properly, spaced nicely, and sized in a proportionate manner. It is there aspects which make it compelling to look at.</br>" +
        "<button onclick='two()'>What else?</button></p>";
}
function two() {
    document.getElementById("modal").innerHTML = "<div id='modalheader' style='float: left;'><i class='hand pointer outline icon'></i></div>  " +
        "<p>Second of all, the styling of the website helps to express the message that the website is trying to convey, the Zeitgeist of the quote from <i>Things Fall Apart</i>.</br>" +
        "<button onclick='three()'>In what ways?</button></p>";
}
function three() {
    document.getElementById("modal").innerHTML = "<div id='modalheader' style='float: left;'><i class='hand pointer outline icon'></i></div>  " +
        "<p>This website is using a basic color scheme, which helps to keep the reader focused on the content of the page. There are no bright colors or areas of high contrast which distract the reader from the text.</br>" +
        "<button onclick='four()'>Anything else?</button></p>";
}
function four() {
    document.getElementById("modal").innerHTML = "<div id='modalheader' style='float: left;'><i class='hand pointer outline icon'></i></div>  " +
        "<p>To add on, all of the elements are polished up nicely with a couple of touch ups here and there. The text is using a professional font, the navigation menu has a cleaned up look, and the image is rounded.</br>" +
        "<button onclick='five()'>Any final notes?</button></p>";
}
function five() {
    document.getElementById("modal").innerHTML = "<div id='modalheader' style='float: left;'><i class='hand pointer outline icon'></i></div>  " +
        "<p>Last but not least, the media that is used also helps to convey the message of the website. The picture of Okonkwo along with a description of him gives readers a background on who he is, and the video helps to support the connection to today's zeitgeist that is being made.</br>" +
        "<button onclick='close()'>Thanks!</button></p>";
}
function close() {
    document.getElementById("modal").style.display = "none";
}

dragElement(document.getElementById(("modal")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
