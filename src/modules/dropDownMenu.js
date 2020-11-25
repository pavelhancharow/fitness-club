const dropDownMenu = () => {
  const clubList = document.querySelector('.clubs-list > ul');

  document.addEventListener('click', (e) => {
    clubList.style.display = (e.target.closest('.club-select')) ? 'block' : 'none';
  });
};

export default dropDownMenu;