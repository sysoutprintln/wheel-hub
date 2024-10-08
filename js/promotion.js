
function handleClick() {
    alert('Thank you for your interest!');
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const carImage = document.getElementById('carImage');
    const ctaHeading = document.getElementById('cta-heading');
    const ctaText = document.getElementById('cta-text');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const newImage = event.target.getAttribute('data-image');
            const newHeading = event.target.getAttribute('data-heading');
            const newText = event.target.getAttribute('data-text');
            carImage.src = newImage;
            carImage.alt = newImage;
            ctaHeading.textContent = newHeading;
            ctaText.innerHTML = newText;
        });
    });
});


let slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");
    let totalSlides = Math.ceil(slides.length / 3);

    if (n >= totalSlides) {slideIndex = 0}
    if (n < 0) {slideIndex = totalSlides - 1}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    let startIndex = slideIndex * 3;
    for (i = startIndex; i < startIndex + 3; i++) {
        if (slides[i]) {
            slides[i].style.display = "block";
        }
    }

    dots[slideIndex].className += " active";
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 5000);
}

autoSlide();
