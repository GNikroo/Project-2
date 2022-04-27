/* 
Create state object. State of the game when opening the page is false, or the game has not started. Time is at zero. When toggleIsPlaying is playing is called, it will flip the state from false to not false. When incrementTime is called, time will increase by 1.
*/
const state = {
    isPlaying: false,
    time: 0,
    toggleIsPlaying: function toggleIsPlaying() {
        this.isPLaying = !this.isPlaying 
    },
    incrementTime: function incrementTime() {
        this.time++
    }
    
}

/* 
Event listener activates on click and call an event function that will begin game if the button, which is both button node and start-button, is clicked.
*/
window.addEventListener('click',
function(event) {
    if (event.target.nodeName === 'BUTTON' && event.target.id === 'start-button') {
        startGame()
    }
}
)

/* The game begins by first disabling the button, then calling on toggleIsPlaying, then setting the interval. This function sets the interval of incremenetTime to 1s (1000ms). The formatTime function is called and changes the innerHTML of the button.
*/
function startGame() {
    startButton = document.getElementById('start-button');
    startButton.disabled = true;
    state.toggleIsPlaying()
    setInterval(function() {
        state.incrementTime();
        startButton.innerHTML = formatTime();
    }, 1000);
}

/* 
formatTime function has been inspired by https://stackoverflow.com/a/6313008. The hours are determined by the time lapsed of the state object divided by ms per hour and rounded by Math.floor. Minutes is time lapsed of the state object minus the product of number of hours lapsed times number of ms per hour. This is then divided by number of minutes per hour and rounded by Math.floor. Seconds is time lapsed of the state object minus the product of number of hours lapsed times number of ms per hour. The number of seconds times minutes is the subtracted from that product. Minutes and seconds less than the number 10 are given the number 0 to display like an analog clock.
*/
function formatTime() {
    const hours = Math.floor(state.time / 3600);
    let minutes = Math.floor((state.time - (hours * 3600)) / 60);
    let seconds = state.time - (hours * 3600) - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return `${minutes}:${seconds}`;
}