let timerInterval;
    let stopwatchInterval;
    let timerSeconds = 0;
    let stopwatchSeconds = 0;

    function startTimer() {
      timerInterval = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      clearInterval(timerInterval);
      timerSeconds = 0;
      updateTimer();
    }

    function startStopwatch() {
      stopwatchInterval = setInterval(updateStopwatch, 1000);
    }

    function stopStopwatch() {
      clearInterval(stopwatchInterval);
    }

    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchSeconds = 0;
      updateStopwatch();
    }

    function updateTimer() {
      timerSeconds++;
      const hours = Math.floor(timerSeconds / 3600);
      const minutes = Math.floor((timerSeconds % 3600) / 60);
      const seconds = timerSeconds % 60;
      const timerDisplay = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
      document.querySelector('.timer').textContent = timerDisplay;
    }

    function updateStopwatch() {
      stopwatchSeconds++;
      const hours = Math.floor(stopwatchSeconds / 3600);
      const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
      const seconds = stopwatchSeconds % 60;
      const stopwatchDisplay = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
      document.querySelector('.timer').textContent = stopwatchDisplay;
    }

    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }