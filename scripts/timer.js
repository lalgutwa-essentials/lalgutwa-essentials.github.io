let countdown = document.querySelector('#timer');
let myClock = document.querySelector('.clock');
let myCards = document.querySelector('.myCards');

let easyBtn = document.querySelector('#easyBtn');
let mediumBtn = document.querySelector('#mediumBtn');
let hardBtn = document.querySelector('#hardBtn');

let secondCount = 0;
let stopWatch;
let resetWatch;

function displayCount() {
    // Calculate current hours, minutes, and seconds
    // let hours = Math.floor(secondCount/3600);
    let minutes = Math.floor((secondCount % 3600)/60);
    let seconds = Math.floor(secondCount % 60)

    if(minutes === 0 && seconds === 0){
        clearInterval(stopWatch);
        countdown.textContent = 'Time\'s up!';
        resetWatch = setTimeout(resetEverything, 3000);
    }
    else{
        // Display a leading zero if the values are less than ten
        // let displayHours = (hours < 10) ? '0' + hours : hours;
        let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
        let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

        // Write the current stopwatch display time into the display paragraph
        countdown.textContent =  displayMinutes + ':' + displaySeconds;

        // Increment the second counter by one
        secondCount--;
    }
}

function resetEverything(){
    clearTimeout(resetWatch);
    secondCount = 0;
    countdown.textContent = "00:00";
    myClock.style.display = 'none';
    myCards.style.display = 'block';
}

easyBtn.addEventListener('click', () => {
    myCards.style.display = 'none';
    myClock.style.display = 'block';
    secondCount = 120;
    stopWatch = setInterval(displayCount, 1000);
});

mediumBtn.addEventListener('click', () => {
    myCards.style.display = 'none';
    myClock.style.display = 'block';
    secondCount = 300;
    stopWatch = setInterval(displayCount, 1000);
});

hardBtn.addEventListener('click', () => {
    myCards.style.display = 'none';
    myClock.style.display = 'block';
    secondCount = 600;
    stopWatch = setInterval(displayCount, 1000);
});