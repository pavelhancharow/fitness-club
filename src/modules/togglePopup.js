import clearModal from './clearModal';

const togglePopup = () => {
  const popupToggle = document.querySelectorAll('.open-popup, .callback-btn, .fixed-gift, .popup'),
    giftPopup = document.getElementById('gift'),
    forms = document.querySelectorAll('#form2, #form1'),
    thanks = document.getElementById('thanks'),
    checkbox = document.querySelectorAll('[for="check2"], [for="check"]');

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
        if (thanks.style.display !== 'block') {
          forms.forEach(form => {
            clearModal(form, checkbox);
          });
          item.style.display = 'none';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
};

export default togglePopup;