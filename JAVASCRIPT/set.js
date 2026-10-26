//setTimeout(function,delay); 
//is a JavaScript function that executes a specified function after a certain delay (in milliseconds). It takes two parameters: the function to be executed and the delay time in milliseconds.
//setTimeout(()=>{(console.log("Hello, World!"))},1000);

// let count=0;
// setInterval(()=>{
//     count++;
//     console.log(count);
// },1000);

//WAP using setTimeout ,setinterval and getElementById to create a timer for 15 minutes.
let timerDisplay = document.getElementById("timer");
let timeLeft = 15 * 60;
setInterval(()=>{
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
}, 1000);
setTimeout(()=>{
    alert("Time's up!");
    clearInterval();
})