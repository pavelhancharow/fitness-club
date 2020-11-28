const menuBtn = () => {
  const topMenu = document.querySelector('.top-menu'),
    headSlider = document.querySelector('.head-slider'),
    headWrap = document.querySelector('.head .wrapper'),
    popupMenu = document.querySelector('.popup-menu'),
    hiddenSmall = document.querySelector('.hidden-small'),
    hiddenLarge = document.querySelector('.hidden-large');

  const resizeScreen = () => {
    if (document.documentElement.clientWidth < 768) {
      hiddenSmall.style.display = 'none';
      hiddenLarge.style.display = 'block';

      topMenu.style.top = `${headWrap.clientHeight}px`;
      topMenu.style.position = 'fixed';
      headSlider.style.paddingTop = `${topMenu.clientHeight}px`;

      window.addEventListener('scroll', () => {
        topMenu.style.top = (window.scrollY < headWrap.clientHeight) ? `${headWrap.clientHeight - window.scrollY}px` : `0px`;
      });

      document.addEventListener('click', (e) => {
        if (e.target.matches('.menu-button img')) {
          popupMenu.style.display = 'flex';
        } else if (e.target.matches('.close-menu-btn img') || e.target.matches('.scroll a')) {
          popupMenu.style.display = 'none';
        }
      });
    } else {
      hiddenSmall.style.display = 'flex';
      hiddenLarge.style.display = 'none';
    }
  };
  resizeScreen();

  window.addEventListener('resize', () => resizeScreen());
};

export default menuBtn;