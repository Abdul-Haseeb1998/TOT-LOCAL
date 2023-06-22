document.addEventListener('DOMContentLoaded', function() {
  // Get all the countdown elements
  var countdownElements = document.querySelectorAll('.countdown');
  
  countdownElements.forEach(function(countdownElement) {
    // Get the date from the data attribute
    var countdownDate = parseInt(countdownElement.getAttribute('data-date'));
  
    // Update the countdown every second
    var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
  
      // Find the difference between now and the countdown date
      var difference = countdownDate - now;
  
      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      // Output the result in the countdown element
      countdownElement.querySelector('.days').innerText = days;
      countdownElement.querySelector('.hours').innerText = hours;
      countdownElement.querySelector('.minutes').innerText = minutes;
      countdownElement.querySelector('.seconds').innerText = seconds;
  
      // If the countdown is over, display some text 
      if (difference < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = countdownElement.getAttribute('data-text');
      }
    }, 1000);
  });
});
