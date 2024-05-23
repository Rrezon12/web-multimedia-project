document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".sliderphoto img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Initial display
    showSlide(currentIndex);
    startSlideShow();

    // Event listeners for buttons
    nextBtn.addEventListener("click", () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prevBtn.addEventListener("click", () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });
});
