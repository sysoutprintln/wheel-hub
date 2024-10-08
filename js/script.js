let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("home-banner-mySlides");
  const dots = document.getElementsByClassName("home-banner-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" home-banner-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " home-banner-active";
  setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = 0;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

let currentIndex = 0;

function slide(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.main-container');
    const itemWidth = items[0].offsetWidth + parseFloat(window.getComputedStyle(items[0]).marginRight);
    const containerWidth = document.querySelector('.carousel-container').clientWidth;

    currentIndex += direction;

    const totalItemsWidth = items.length * itemWidth;
    const maxTranslateX = totalItemsWidth - containerWidth;
    const maxIndex = Math.ceil(maxTranslateX / itemWidth);

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const translateX = Math.min(maxTranslateX, currentIndex * itemWidth);
    carousel.style.transform = `translateX(${-translateX}px)`;
}


const prevButton = document.getElementById('review-prev');
const nextButton = document.getElementById('review-next');
const reviewsContainer = document.getElementById('reviews-container');

const cardWidth = reviewsContainer.querySelector('.review-card').offsetWidth + 20; 
let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    scrollPosition -= cardWidth;
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    reviewsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    scrollPosition += cardWidth;
    if (scrollPosition > reviewsContainer.scrollWidth - reviewsContainer.clientWidth) {
        scrollPosition = reviewsContainer.scrollWidth - reviewsContainer.clientWidth;
    }
    reviewsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});