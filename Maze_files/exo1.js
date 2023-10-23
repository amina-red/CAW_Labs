//exo1
window.onload = function() {
      div_shape = document.getElementsByClassName("boundary");
  
      for (var i = 0; i < div_shape.length; i++) {
            div_shape[i].addEventListener('mouseover', function() {
                  this.style.backgroundColor = '#ff8888';
              });
          }
      }
  