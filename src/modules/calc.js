const calc = () => {
  const form = document.getElementById('card_order'),
    priceTotal = document.getElementById('price-total'),
    promoCode = form.querySelector('[placeholder="Промокод"]'),
    club = form.querySelectorAll('[name = club-name]'),
    type = form.querySelectorAll('[name = card-type]'),
    cardsTypes = form.querySelector('.cards-types');

  let total;

  form.addEventListener('input', () => {
    if (cardsTypes) {
      return;
    } else {
      if (club[0].checked === true) {
        total = (type[0].checked === true) ? 1999 :
          (type[1].checked === true) ? 9900 :
            (type[2].checked === true) ? 13900 :
              (type[3].checked === true) ? 19900 : 0;
      }
      if (club[1].checked === true) {
        total = (type[0].checked === true) ? 2999 :
          (type[1].checked === true) ? 14900 :
            (type[2].checked === true) ? 21990 :
              (type[3].checked === true) ? 24990 : 0;
      }
      if (promoCode.value.toUpperCase() === 'ТЕЛО2020') {
        total = Math.ceil(total - (total * 0.3));
      }
      priceTotal.textContent = `${total}`;
    }
  });
};

export default calc;