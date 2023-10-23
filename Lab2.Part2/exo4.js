
var lose = false; 
window.onload = function() {
    document.getElementById("start").onmouseover = startGame;

    document.getElementById("end").onmouseover = endGame;

    div_shape = document.getElementsByClassName("boundary");

    for (var i = 0; i < div_shape.length-1; i++) {
        div_shape[i].onmouseover = mouse_over;
    }
};
function mouse_over() {
    lose = true;
    div_shape = document.getElementsByClassName("boundary");

    for (var i = 0; i < div_shape.length-1; i++) {
        div_shape[i].style.backgroundColor = "#ff8888";
    }
}
function startGame() {
    lose = false;
    div_shape = document.getElementsByClassName("boundary");

    for (var i = 0; i < div_shape.length-1; i++) {
        div_shape[i].style.backgroundColor = "#eeeeee";
    }
}
function endGame() {
    if(lose) {
        alert("you lose!");
    } else {
        alert("You win!");
    }
}