const bodyEl = document.body;
const timerContainer = document.querySelector('.timer');
const titleEl = document.createElement("h1");
const stopBtnEl = document.createElement("button");

stopBtnEl.textContent = "stop";
timerContainer.append(titleEl, stopBtnEl);

// Timemout
let timeout = 10;


const intervalId = setInterval(() => {
    if (timeout === 0) {
        bodyEl.style.backgroundColor = "#9c9c9c";
        titleEl.remove();
    } else {
        timeout--;
        titleEl.textContent = timeout;
    }
    
}, 1000);


stopBtnEl.addEventListener("click", () => { 
    clearInterval(intervalId);
});
