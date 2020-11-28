const mainSlider = () => {
  const slider = document.querySelector('.main-slider'),
    slide = slider.querySelectorAll('.slide');

  let currentSlide = 0,
    interval;

  const autoPlay = () => {
    slide[currentSlide].style.display = 'none';
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    slide[currentSlide].style.display = 'flex';
  };

  const startSlide = () => interval = setInterval(autoPlay, 1500);

  const stopSlide = () => clearInterval(interval);

  slider.addEventListener('mouseover', (e) => {
    if (e.target.closest('.slide-text div')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (e) => {
    if (e.target.closest('.slide-text div')) {
      startSlide();
    }
  });

  startSlide();
};

export default mainSlider;