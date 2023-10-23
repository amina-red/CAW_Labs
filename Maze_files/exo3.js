window.onload = function() {
    document.getElementById("end").onmouseover = endGame;
    div_shape = document.getElementsByClassName("boundary");

    for (var i = 0; i < div_shape.length-1; i++) {
        div_shape[i].onmouseover = mouse_over;
    }
};

function mouse_over() {

    div_shape = document.getElementsByClassName("boundary");

    for (var i = 0; i < div_shape.length-1; i++) {
        div_shape[i].style.backgroundColor = "#ff8888";
    }
}

function endGame() {
 
        alert("You win!");
   
}