const bookingButtons = document.querySelectorAll('.booking__actions .button');

bookingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Переход к бронированию Navia Boat');
  });
});
