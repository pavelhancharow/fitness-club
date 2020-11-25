const dropDownMenu = () => {
  const clubList = document.querySelector('.clubs-list ul');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.club-select p')) {
      clubList.classList.toggle('active');
    } else if (!e.target.closest('.club-select p') && !e.target.closest('.clubs-list ul')) {
      clubList.classList.remove('active');
    }
  });
};

export default dropDownMenu;