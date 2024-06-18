//script que faz o slide funcionar

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselContent = document.querySelector('.carousel-content');
    const slides = document.querySelectorAll('.carousel-imagem');
    const prevButton = document.getElementById('carousel-left');
    const nextButton = document.getElementById('carousel-right');
    
    const slideWidth = slides[0].offsetWidth;
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startDragX = 0;
    let moveDragX = 0;
    let isDragging = false;
    let autoplayInterval = null; 
    
    const moveSlides = () => {
        carouselContent.style.transition = 'transform 0.5s ease';
        carouselContent.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };
    
    const nextSlide = () => {
        if (currentIndex === totalSlides - 1) {
            currentIndex = 0; 
        } else {
            currentIndex++;
        }
        moveSlides();
    };
    
    const prevSlide = () => {
        if (currentIndex === 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex--;
        }
        moveSlides();
    };
    
    const startAutoplay = () => {
        if (!autoplayInterval) {
            autoplayInterval = setInterval(nextSlide, 2500);
        }
    };
    
    const pauseAutoplay = () => {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    };
    
    nextButton.addEventListener('click', () => {
        nextSlide();
        pauseAutoplay();
        startAutoplay(); 
    });
    
    prevButton.addEventListener('click', () => {
        prevSlide();
        pauseAutoplay();
        startAutoplay(); 
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            pauseAutoplay();
            startAutoplay(); 
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            pauseAutoplay();
            startAutoplay(); 
        }
    });
    
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startDragX = e.clientX;
        pauseAutoplay();
        e.preventDefault();
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (isDragging) {
            moveDragX = e.clientX;
            const diffX = moveDragX - startDragX;
            const threshold = slideWidth / 3; 
            
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
                startDragX = moveDragX;
            }
        }
    });
    
    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        startAutoplay(); 
    });
    
    carousel.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            startAutoplay();
        }
    });
    
    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        startDragX = e.touches[0].clientX;
        pauseAutoplay();
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if (isDragging) {
            moveDragX = e.touches[0].clientX;
            const diffX = moveDragX - startDragX;
            const threshold = slideWidth / 3; 
            
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
                startDragX = moveDragX;
            }
        }
    });
    
    carousel.addEventListener('touchend', () => {
        isDragging = false;
        startAutoplay(); 
    });
    
    startAutoplay();
    
    carousel.addEventListener('mouseenter', () => {
        pauseAutoplay();
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoplay();
    });
});
