// Slider functionality
function initSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');
    const sliderDots = document.querySelectorAll('.slider-dot');
    
    let currentSlide = 0;
    const slideCount = 5;
    let autoSlideInterval;
    
    // Create slides
    sliderContainer.innerHTML = `
        <div class="slide" style="background-image: url('images/slider/summer-collection.jpg')">
            <div class="slide-content">
                <h1 class="hero-title">Summer Collection 2025</h1>
                <p class="hero-subtitle">Discover our latest trends with up to 40% off</p>
                <a href="#" class="btn" id="shop-now-btn">Shop Now</a>
            </div>
        </div>
        <!-- Add 4 more slides similarly -->
    `;
    
    // Slider controls
    function goToSlide(index) {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        
        currentSlide = index;
        sliderContainer.style.transform = `translateX(-${currentSlide * 20}%)`;
        
        sliderDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    prevSlideBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoSlide();
    });
    
    nextSlideBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoSlide();
    });
    
    sliderDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-index'));
            goToSlide(slideIndex);
            resetAutoSlide();
        });
    });
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    startAutoSlide();
}