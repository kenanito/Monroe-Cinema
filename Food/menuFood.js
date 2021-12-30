window.addEventListener('scroll', function() {
    let position = window.scrollY;
    console.log(position);
    if (position > 0) {
        document.getElementById("main").style.backgroundColor = "rgb(10, 19, 68)";
    } else {
        document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
    }
});
var modal = document.getElementById('food');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('drink');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function onhover1() {
    var a = document.querySelector("#stick1");
    $(a).animate({ left: "0%" }, 'slow');
}

function nohover1() {
    var a = document.querySelector("#stick1");
    $(a).animate({ left: "50%" }, 'fast');
    $(a).animate({ left: "-100%" }, '0.5');
}

function onhover2() {
    var a = document.querySelector("#stick2");
    $(a).animate({ left: "0%" }, 'slow');
}

function nohover2() {
    var a = document.querySelector("#stick2");
    $(a).animate({ left: "50%" }, 'fast');
    $(a).animate({ left: "-100%" }, '0.5');
}

function onhover3() {
    var a = document.querySelector("#stick3");
    $(a).animate({ left: "0%" }, 'slow');
}

function nohover3() {
    var a = document.querySelector("#stick3");
    $(a).animate({ left: "50%" }, 'fast');
    $(a).animate({ left: "-100%" }, '0.5');
}

function onhover4() {
    var a = document.querySelector("#stick4");
    $(a).animate({ left: "0%" }, 'slow');
}

function nohover4() {
    var a = document.querySelector("#stick4");
    $(a).animate({ left: "50%" }, 'fast');
    $(a).animate({ left: "-100%" }, '0.5');
}