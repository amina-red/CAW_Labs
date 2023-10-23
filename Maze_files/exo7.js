//EXO7
var lose = false; 
var inside=false;
var done=false;
var msg="";
var x =document.getElementsByClassName("boundary example")
console.log(x);
window.onload = function() {
    document.getElementById("start").onclick = startGame;


document.getElementById("maze").onmouseenter = mouseEnter;

document.getElementById("maze").onmouseleave = mouseLeave;

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
    done=false;
    msg="";
    x[0].innerHTML=msg;
    lose = false;

    for (var i = 0; i < div_shape.length-1; i++) {
        div_shape[i].style.backgroundColor = "#eeeeee";
    }
}
function mouseEnter() {
    inside=true;
  }
  function mouseLeave() {
   inside=false;
  }

function endGame() {
   
    if(lose && !done && msg!=="cheating") {
      

            msg="lose";
             x[0].innerHTML=msg;
        
           
    } else 
    if(!lose && inside && !done && msg!=="cheating"){
       

            msg="win";
            x[0].innerHTML=msg;
            done=true;
        
    }else if(!lose && !inside && !done  ){
        msg="cheating"
        x[0].innerHTML=msg;
    }else if(msg=="cheating"&& !inside && !done){
                msg="cheating";
                x[0].innerHTML=msg;
    }
    
}