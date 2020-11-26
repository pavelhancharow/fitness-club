const toTopArrow = () => {
  const toTop = document.getElementById('totop'),
    headerMain = document.querySelector('.header-main');

  document.addEventListener('scroll', () => toTop.style.display = (window.scrollY > headerMain.clientHeight - 100) ? 'block' : 'none');
};

export default toTopArrow;