function slider(){
    let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    const offset = -index * 100; // Calculate offset for the transform
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Loop around
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Automatically change slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 4000);
}
// slider()

