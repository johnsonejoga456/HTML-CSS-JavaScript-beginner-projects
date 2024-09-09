const slides = document.querySelectorAll('.image-slider');
// to track the current slide
let currentSlide = 0;

//Select buttons
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showSlide(index) {
    slides.forEach ((slides, i) => {
        slides.style.display = 'none';
});

slides[index].style.display = 'block';
}

//Display the first slide when page loads
showSlide(currentSlide);

//add click event to "Next" button
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide +1) % slides.length; //Redirect to the next slide
    showSlide(currentSlide);
});

//add click event to "previous" button
prevButton.addEventListener('click', () => {
    currentSlide =(currentSlide -1 + slides.length) % slides.length; //Redirect to the prevoius slide
    showSlide(currentSlide);
})