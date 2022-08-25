
//form on hover
var form = document.getElementById("form");
function show(x) {
    x.style.display="none";
   form.style.display="block";
  }
  
  function hide(x) {
    x.style.display="block";
   form.style.display = "none";
    
  }



  //counter success

  
// Countdown Success
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue + '+';
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
