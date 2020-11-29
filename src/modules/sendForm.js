import clearModal from './clearModal';

const sendForm = () => {
  const forms = document.querySelectorAll('#banner-form, #card_order, #footer_form, #form1, #form2'),
    popups = document.querySelectorAll('.popup'),
    mozaika = document.getElementById('mozaika'),
    schelkovo = document.getElementById('schelkovo');

  if (mozaika) {
    forms[0].insertAdjacentHTML('afterbegin', `<input type="hidden" name="club_name" value="mozaika">`);
  } else if (schelkovo) {
    forms[0].insertAdjacentHTML('afterbegin', `<input type="hidden" name="club_name" value="schelkovo">`);
  }

  forms.forEach(form => {
    const checkboxRequired = form.querySelector('[type = checkbox]');
    if (checkboxRequired) {
      checkboxRequired.required = false;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formTitle = form.querySelector('form h4'),
        thanks = document.getElementById('thanks'),
        checkboxRequired = form.querySelector('[type = checkbox]'),
        inputPhone = form.querySelector('[type = tel]'),
        inputName = form.querySelector('[placeholder="Ваше имя..."]'),
        inputPromoCode = form.querySelector('[placeholder="Промокод"]'),
        clubName = form.querySelectorAll('[name = club-name]'),
        priceTotal = document.getElementById('price-total'),
        checkbox = form.querySelectorAll('[for="check2"], [for="check"], [for="check1"], [for="card_check"]');

      const infoMessage = (title, text, display) => {
        thanks.querySelector('h4').textContent = title;
        thanks.querySelector('.form-content p').innerHTML = text;
        thanks.style.display = display;
      };

      const closePopUp = () => {
        if (form.id === 'form1') {
          formTitle.textContent = 'Обратный звонок';
        } else if (form.id === 'form2') {
          formTitle.textContent = 'Записаться на визит';
        }

        popups.forEach(popup => {
          setTimeout(() => {
            if (form.style.display === 'block') {
              popup.style.display = 'none';
            } else if (popup.id === 'thanks') {
              popup.style.display = 'none';
            }
          }, 3000);
        });
      };

      if (form.id === 'footer_form') {
        const club = [...clubName];
        const even = element => element.checked === true;
        if (club.length && club.some(even) === false) {
          infoMessage('Ошибка', 'Hеобходимо выбрать клуб!', 'block');
          return;
        }
      }

      if (inputPromoCode) {
        if (inputPromoCode.value.toUpperCase() === 'ТЕЛО2020') {
          inputPromoCode.setAttribute('name', 'promocode');
        } else {
          inputPromoCode.setAttribute('name', 'name');
        }
      }

      if (inputName) {
        if (inputName.value === '') {
          inputName.style.border = '1px solid red';
          return;
        }
      }

      if (!inputPhone.value.match(/^[\+]?[0-9]{7,13}$/ig)) {
        inputPhone.style.border = '1px solid red';
        return;
      }

      if (checkboxRequired) {
        if (!checkboxRequired.checked) {
          checkbox.forEach(item => item.classList.add('redborder'));
          return;
        }
      }

      if (form.id === 'form1' || form.id === 'form2') {
        formTitle.textContent = 'Идет отправка...';
      } else {
        infoMessage('Идет отправка...', 'Получение ответа от сервера...', 'block');
      }

      const formData = new FormData(form);
      let body = {};
      formData.forEach((val, key) => body[key] = val);

      postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('status network not 200.');
          }
          popups.forEach(popup => popup.style.display = 'none');
          infoMessage('Спасибо!', `Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.`, 'block');
        })
        .catch(error => {
          setTimeout(() => {
            popups.forEach(popup => popup.style.display = 'none');
            infoMessage('Ошибка', 'Свяжитесь с нами по телефону.', 'block');
            console.warn(error);
          }, 3000);
        })
        .finally(() => {
          clearModal(form, checkbox);
          if (priceTotal) {
            priceTotal.textContent = 1999;
          }
          closePopUp();
        });
    });
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };
};

export default sendForm;