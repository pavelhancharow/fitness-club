window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //Drop-down menu
  const dropDownMenu = () => {
    const clubList = document.querySelector('.clubs-list > ul');

    document.addEventListener('click', (e) => {
      clubList.style.display = (e.target.closest('.club-select')) ? 'block' : 'none';
    });
  };
  dropDownMenu();


});