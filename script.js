const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thank-you-card');
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingResult = document.getElementById('rating-result');

let selectedRating = 0;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedRating = button.dataset.value;
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    submitButton.disabled = false;
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating > 0) {
    ratingResult.textContent = selectedRating;
    ratingCard.hidden = true;
    thankYouCard.hidden = false;
  } else {
    alert('Please select a rating before submitting.');
  }
});