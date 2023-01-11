
function callToAction() {
  click++;
  
  if (click === 1) {
    console.log('primo click');
    document.getElementById("card").style.color = 'red';
    document.getElementById("card").style.background = 'black';
  } else if (click === 2) {
    console.log('secondo click');
    document.getElementById("card").style.display = 'none';
    
  };
} 



let click = 0;