window.addEventListener('scroll', function() {
    let position = window.scrollY;
    console.log(position);
    if (position > 0) {
        document.getElementById("main").style.backgroundColor = "rgb(10, 19, 68)";
    } else {
        document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
    }
});

function register() {
    document.querySelector(".register").style.display = "flex";
    $(".register").animate({ opacity: '1' }, "slow");
    document.body.style.overflow = "hidden";
}



function close_register() {
    document.querySelector(".register").style.display = "none";
    document.body.style.overflow = "scroll"
}