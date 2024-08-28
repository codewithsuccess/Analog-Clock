const Hour = document.querySelector('#hour');
const Minutes = document.querySelector('#min');
const Seconds = document.querySelector('#sec');

function displayTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Rotation Calculation
    let hRotation = 30*hour + min/2;
    let mRotation = 6*min;
    let sRotation = 6*sec;

    // Adding rotation in hour minutes in sec through style transform 
    Hour.style.transform = `rotate(${hRotation}deg)`;
    Minutes.style.transform = `rotate(${mRotation}deg)`;
    Seconds.style.transform = `rotate(${sRotation}deg)`; 
}

setInterval(displayTime, 1000);