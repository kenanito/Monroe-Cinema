function parallax(event) {
    this.querySelectorAll(".layer").forEach(layer => {
        let a = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX/400*a}px)`;
    });
}
document.addEventListener('mousemove', parallax);
window.addEventListener('scroll', function() {

    let position = window.scrollY;
    console.log(position);
    if (position > 0) {
        document.getElementById("main").style.backgroundColor = "black";
    } else {
        document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
    }
    if (position >= 10) {
        position = 590;
    } else {
        position = 10;
    }
})

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

function clicked() {
    var a = document.querySelector(".buy_ticket");
    var b = document.querySelectorAll(".ttime");
    if (a.style.display === "flex") {
        a.style.display = "none";
        b.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        b.style.color = "white";

    } else {
        a.style.display = "flex";
        b.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        b.style.color = "black";

    }
}

function selected1() {
    let a = document.getElementById("bos1");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected2() {
    let a = document.getElementById("bos2");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected3() {
    let a = document.getElementById("bos3");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected4() {
    let a = document.getElementById("bos4");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected5() {
    let a = document.getElementById("bos5");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected6() {
    let a = document.getElementById("bos6");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected7() {
    let a = document.getElementById("bos7");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected8() {
    let a = document.getElementById("bos8");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}

function selected9() {
    let a = document.getElementById("bos9");
    if (a.style.backgroundColor === "rgb(0, 255, 128)") {
        a.style.backgroundColor = "white";
    } else {
        a.style.backgroundColor = "rgb(0, 255, 128)";
    }
}