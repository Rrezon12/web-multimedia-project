document.addEventListener("DOMContentLoaded", function() {
    
    const app = new PIXI.Application({
        width: 900,
        height: 600,
        antialias: true,
        transparent: true
    });

    
    document.querySelector('.sliderphoto').appendChild(app.view);

   
    const slideContainer = new PIXI.Container();
    app.stage.addChild(slideContainer);

    // Load images
    const urls = [
        'images/image6.jpg',
        'images/image7.jpg',
        'images/image8.jpg',
        
        
    ];

    const slides = [];

    
    urls.forEach(url => {
        const texture = PIXI.Texture.from(url);
        const slide = new PIXI.Sprite(texture);
        slide.anchor.set(0.5);
        slide.visible = false; 
        slideContainer.addChild(slide);
        slides.push(slide);
    });

    let currentIndex = 0;
    slides[currentIndex].visible = true; 

    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.visible = i === index;
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

    
    setInterval(nextSlide, 3000);

   
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
});
