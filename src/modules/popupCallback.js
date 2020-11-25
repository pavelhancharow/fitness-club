const popupCallback = () => {
  const callbackForm = document.getElementById('callback_form');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.callback-btn')) {
      callbackForm.style.display = 'block';
    } else if (e.target.matches('.close_icon') || !e.target.closest('.form-content')) {
      callbackForm.style.display = 'none';
    }
  });
};

export default popupCallback;