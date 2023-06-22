document.addEventListener('DOMContentLoaded', function() {
  var countdownElements = document.querySelectorAll('.countdown');

  countdownElements.forEach(function(countdownElement) {
    var countdownDate = parseInt(countdownElement.getAttribute('data-date'));
    var countdownText = countdownElement.getAttribute('data-text');

    var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
      var difference = countdownDate - now;

      if (difference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = countdownText;
        return;
      }

      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

      countdownElement.querySelector('[data-unit="days"]').innerText = days;
      countdownElement.querySelector('[data-unit="hours"]').innerText = hours;
      countdownElement.querySelector('[data-unit="minutes"]').innerText = minutes;
      countdownElement.querySelector('[data-unit="seconds"]').innerText = seconds;
    }, 1000);
  });
});
