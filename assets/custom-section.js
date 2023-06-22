document.addEventListener('DOMContentLoaded', function() {
  // Get all the countdown elements
  var countdownElements = document.querySelectorAll('.countdown');

  countdownElements.forEach(function(countdownElement) {
    // Get the date from the data attribute
    var countdownDate = parseInt(countdownElement.getAttribute('data-date'));

    // Get the text when date is reached
    var countdownText = countdownElement.getAttribute('data-text');

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
      var now = new Date().getTime();

      // Find the difference between now and the countdown date
      var difference = countdownDate - now;

      // If the countdown is over, display the text
      if (difference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = countdownText;
        return;
      }

      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Output the result in the countdown element
      countdownElement.querySelector('[data-unit="days"]').innerText = days;
      countdownElement.querySelector('[data-unit="hours"]').innerText = hours;
      countdownElement.querySelector('[data-unit="minutes"]').innerText = minutes;
      countdownElement.querySelector('[data-unit="seconds"]').innerText = seconds;
    }, 1000);
  });
});
