//script que faz o carrossel funcionar

const wrapper = document.querySelector(".wrappergeracao");
const carousel = document.querySelector(".carouselgeracao");
const arrowBtns = document.querySelectorAll(".wrappergeracao i");

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView;
const setCardPerView = () => {
    cardPerView = Math.round(carousel.offsetWidth / carousel.querySelector(".cardgeracao").offsetWidth);
    cloneCards();
};

const cloneCards = () => {
    const carouselChildren = [...carousel.children];
    carousel.innerHTML = ''; 
    carouselChildren.forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML); 
    });
    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML); 
    });
    carouselChildren.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML); 
    });
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
};

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const firstCardWidth = carousel.querySelector(".cardgeracao").offsetWidth;
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth * cardPerView : firstCardWidth * cardPerView;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");

    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return; 

    const x = e.pageX || e.touches[0].pageX;
    carousel.scrollLeft = startScrollLeft - (x - startX);
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += carousel.querySelector(".cardgeracao").offsetWidth, 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

window.addEventListener('resize', setCardPerView);