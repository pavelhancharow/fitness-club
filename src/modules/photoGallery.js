const photoGallery = () => {
  const slider = document.querySelector('.gallery-slider'),
    slide = slider.querySelectorAll('.slide'),
    dotContainer = slider.querySelector('.portfolio-dots'),
    galleryWrapper = document.querySelector('.gallery-bg .wrapper');

  galleryWrapper.style.position = 'relative';

  let currentSlide = 0,
    interval;

  const dotList = () => {
    slide.forEach(() => {
      let dot = document.createElement('li');
      dot.classList.add('dot');
      dotContainer.append(dot);
    });
    let dot = dotContainer.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');
    return dot;
  };

  const dot = dotList();

  const prevSlide = (elem, i, strClass) => {
    elem[i].classList.remove(strClass);
  };

  const nextSlide = (elem, i, strClass) => {
    elem[i].classList.add(strClass);
  };

  const autoPlay = () => {
    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'dot-active');

    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => interval = setInterval(autoPlay, time);

  const stopSlide = () => clearInterval(interval);

  slider.addEventListener('click', (e) => {

    if (!e.target.closest('.slider-arrow, .dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (e.target.closest('#arrow-right')) {
      currentSlide++;
    } else if (e.target.closest('#arrow-left')) {
      currentSlide--;
    } else if (e.target.matches('.dot')) {
      dot.forEach((item, index) => {
        if (item === e.target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  slider.addEventListener('mouseover', (e) => {
    if (e.target.closest('.slider-arrow') || e.target.closest('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (e) => {
    if (e.target.closest('.slider-arrow') || e.target.closest('.dot')) {
      startSlide();
    }
  });

  startSlide(3000);
};

export default photoGallery;