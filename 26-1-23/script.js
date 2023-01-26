const bodyEl = document.body;
const timerContainer = document.querySelector('.timer');
const titleEl = document.createElement("h1");
const stopBtnEl = document.createElement("button");

stopBtnEl.textContent = "stop";
timerContainer.append(titleEl, stopBtnEl);

// Timemout



const intervalId = setInterval(() => {
  titleEl.textContent = `${new Date().getSeconds()}s`;
}, 1000);



  


let timeout = 5;
stopBtnEl.addEventListener("click", () => { 
    console.log('click');
    clearTimeout(intervalId);
});

setInterval(() => {
    
    if (timeout === 0) {
        bodyEl.style.backgroundColor = "#9c9c9c";
        titleEl.remove();
    } else {
        timeout--;
        titleEl.textContent = timeout;
    }
}, 1000);