document.querySelectorAll('.countdown').forEach(function(countdown) {
  var countdownDate = new Date(parseInt(countdown.dataset.date) * 1000);

  setInterval(function() {
    var now = new Date();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.querySelector('.days').textContent = days;
    countdown.querySelector('.hours').textContent = hours;
    countdown.querySelector('.minutes').textContent = minutes;
    countdown.querySelector('.seconds').textContent = seconds;
  }, 1000);
});
