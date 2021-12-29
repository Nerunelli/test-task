const SLIDESHOW_INTERVAL = 2000;

let slideIndex = 0;

const slides = document.getElementsByClassName("picture");

let interval;

const showSlide = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

const slideshow = () => {
  incrementSlide();
  showSlide();
}

const makeSlideshow = () => {
  showSlide();
  clearInterval(interval);
  interval = setInterval(slideshow, SLIDESHOW_INTERVAL);
}

const incrementSlide = () => {
  if (slideIndex + 1 >= slides.length) {
    slideIndex = 0
  } else {
    slideIndex++;
  }
}

const decrementSlide = () => {
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1
  } else {
    slideIndex--;
  }
}

const nextSlide = () => {
  incrementSlide();
  makeSlideshow();
}

const prevSlide = () => {
  decrementSlide();
  makeSlideshow();
}

const run = () => {
  const prevButton = document.getElementById('arr-prev');
  prevButton.addEventListener("click", prevSlide);

  const nextButton = document.getElementById('arr-next');
  nextButton.addEventListener("click", nextSlide);

  makeSlideshow();
}

run();