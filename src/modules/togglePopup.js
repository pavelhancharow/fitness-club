const togglePopup = () => {
  const popupToggle = document.querySelectorAll('.open-popup, .callback-btn, .fixed-gift, .popup'),
    giftPopup = document.getElementById('gift');

  popupToggle.forEach(item => {
    item.addEventListener('click', (e) => {
      const popup = document.querySelector(item.getAttribute('data-popup'));

      if (item.hasAttribute('type')) {
        popup.style.display = 'none';
      } else if (e.target.closest('.free-visit > p') || e.target.closest('.callback-btn')) {
        popup.style.display = 'block';
      } else if (e.target.closest('.fixed-gift')) {
        giftPopup.style.display = 'block';
        e.target.style.display = 'none';
      } else if (e.target.matches('.close_icon') || !e.target.closest('.form-content') || e.target.matches('.close-btn')) {
        item.style.display = 'none';
      }
    });
  });
};

export default togglePopup;