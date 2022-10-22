let milli_seconds = 1;
let seconds = 1;

const appendMillisecs = document.getElementById('milli_seconds');
const appendSecs = document.getElementById('seconds');
const startButton = document.getElementById('start_button');
const stopButton = document.getElementById('stop_button');
const resetButton = document.getElementById('reset_button');
var interval;

// start button
function startMillisecs() {
    milli_seconds++;
    if (milli_seconds <= 9) {
        appendMillisecs.innerHTML = '0' + milli_seconds;
    }
    if (milli_seconds > 9) {
        appendMillisecs.innerHTML = milli_seconds
    } 
    if (milli_seconds >= 999) {
        seconds++;
        appendMillisecs.innerHTML = '0' + milli_seconds;
        milli_seconds = 0;
        appendMillisecs.innerHTML = '0' + 0;
    }
    seconds++;
    if (seconds <= 10) {
        appendSecs.innerHTML = '0' + seconds;
    }
    if (seconds > 10) {
        appendSecs.innerHTML = seconds;
    }
    if (seconds >= 59) {
        seconds--;
        appendSecs.innerHTML = '0' + seconds;
        seconds = 0;
        appendSecs.innerHTML = '0' + 0;
    }


}
startButton.onclick = function () {
    if (interval) {
        clearInterval(interval);
    }
interval = setInterval(startMillisecs, 10);
};

// stop button

stopButton.onclick = function () {
    clearInterval(interval);
    interval = null;
}
// reset button
resetButton.onclick = function () {
    clearInterval(interval);
    interval = null;
    seconds = milli_seconds = 0;
    appendSecs.innerHTML = '00';
    appendMillisecs.innerHTML = '000';
}
