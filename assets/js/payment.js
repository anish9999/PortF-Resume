$('a#Pay').on('click', function() {
  // Show the loading spinner
  $('#Load').fade();
  // Navigate to the next page
  window.location.href = './payment.html';
});

$(window).on('load', function() {
  // Hide the loading spinner
  $('#Load').fade();
});