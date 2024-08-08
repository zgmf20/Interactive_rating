document.addEventListener('DOMContentLoaded', () => {
    const ratingCard = document.getElementById('rating-card');
    const thankYouCard = document.getElementById('thank-you-card');
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitButton = document.getElementById('submit-btn');
    const ratingResult = document.getElementById('rating-result');
  
    let selectedRating = 0;
  
    if (!ratingCard || !thankYouCard || !submitButton || !ratingResult) {
      console.error('One or more required elements are missing from the DOM');
      return;
    }
  
    ratingButtons.forEach(button => {
      button.addEventListener('click', () => {
        selectedRating = button.dataset.value;
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
      });
    });
  
    submitButton.addEventListener('click', () => {
      if (selectedRating > 0) {
        ratingResult.textContent = selectedRating;
        ratingCard.style.display = 'none';
        thankYouCard.style.display = 'block';
      } else {
        alert('請在提交前選擇評分。');
      }
    });
  });