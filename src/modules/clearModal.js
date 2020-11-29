const clearModal = (form, checkbox) => {
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    if (input.type === 'checkbox' || input.type === 'radio') {
      input.checked = false;
      checkbox.forEach(item => item.classList.remove('redborder'));
      if (input.id === 't1' || input.id === 'm1' || input.id === 'card_leto_mozaika') {
        input.checked = true;
      }
    }
    if (input.type === 'tel' || input.name === 'name' || input.name === 'promocode') {
      input.value = '';
      if (form.id === 'card_order') {
        input.style.border = '1px solid #b7b7b7';
      } else {
        input.style.border = 'none';
      }
    }
  });
};

export default clearModal;