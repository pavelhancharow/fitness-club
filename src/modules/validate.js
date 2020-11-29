const validate = () => {
  const inputsPhone = document.querySelectorAll('[type = tel]'),
    inputsName = document.querySelectorAll('[name = name]'),
    cardOrder = document.getElementById('card_order'),
    formInputs = [inputsName, inputsPhone];

  formInputs.forEach(item => item.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\S]/gi, '');

      if (input.placeholder === 'Промокод') {
        input.value = input.value.replace(/[^а-яё\s\d]/ig, '');
      } else if (input.placeholder === 'Ваше имя...') {
        input.value = input.value.replace(/[^а-яё\s]/ig, '');
      } else if (input.type === 'tel') {
        input.value = input.value.replace(/[^0-9+]/ig, '').substring(0, 13);
      }

      if (cardOrder) {
        input.style.border = '1px solid #b7b7b7';
      } else {
        input.style.border = 'none';
      }
    });
  }));
};

export default validate;