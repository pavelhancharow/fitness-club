const sendForm = () => {
  const errorMessage = 'Ошибка. Свяжитесь с нами по телефону.',
    waitingMessage = 'Идет отправка...',
    successMessage = 'Данные успешно отправлены!';

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
        inputs = form.querySelectorAll('input'),
        checkboxRequired = form.querySelector('[type = checkbox]'),
        inputPhone = form.querySelector('[type = tel]'),
        inputName = form.querySelector('[placeholder="Ваше имя..."]'),
        inputPromoCode = form.querySelector('[placeholder="Промокод"]'),
        clubName = form.querySelectorAll('[name = club-name]'),
        cardType = form.querySelectorAll('[name = card-type]');

      const formTitleInfo = (info, size) => {
        formTitle.textContent = info;
        formTitle.style.fontSize = `${size}px`;
      };

      const infoMessage = (title, text, display) => {
        thanks.querySelector('h4').textContent = title;
        thanks.querySelector('.form-content p').innerHTML = text;
        thanks.style.display = display;
      };

      const closePopUp = () => {
        popups.forEach(popup => {
          if (popup.style.display === 'block') {
            setTimeout(() => {
              popup.style.display = 'none';
              if (form.id === 'form1') {
                formTitleInfo('Обратный звонок', 21);
              } else if (form.id === 'form2') {
                formTitleInfo('Записаться на визит', 21);
              }
            }, 3000);
          }
        });
      };

      if (form.id === 'card_order' || form.id === 'footer_form') {
        const type = [...cardType],
          club = [...clubName];
        const even = element => element.checked === true;
        if (type.length && type.some(even) === false) {
          infoMessage('Ошибка', 'Hеобходимо выбрать тип карты!', 'block');
          return;
        }
        if (club.length && club.some(even) === false) {
          infoMessage('Ошибка', 'Hеобходимо выбрать клуб!', 'block');
          return;
        }
      }

      if (inputPromoCode) {
        if (inputPromoCode.value.toUpperCase() === 'ТЕЛО2020') {
          inputPromoCode.setAttribute('name', 'promocode');
        }
        if (inputPromoCode.value === '') {
          inputPromoCode.style.border = '1px solid red';
          infoMessage('Ошибка', 'Введите ваш промокод', 'block');
          return;
        }
      }

      if (inputName) {
        if (inputName.value === '') {
          inputName.style.border = '1px solid red';
          infoMessage('Ошибка', 'Введите ваше имя', 'block');
          return;
        }
      }

      if (!inputPhone.value.match(/^[\+]?[0-9]{7,13}$/ig)) {
        inputPhone.style.border = '1px solid red';
        infoMessage('Ошибка', 'Вы ввели некорректный номер телефона', 'block');
        return;
      }

      if (checkboxRequired) {
        if (!checkboxRequired.checked) {
          infoMessage('Ошибка', 'Hеобходимо подтвердить согласие!', 'block');
          return;
        }
      }

      if (form.id === 'form1' || form.id === 'form2') {
        formTitleInfo(waitingMessage);
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
          if (form.id === 'form1' || form.id === 'form2') {
            formTitleInfo(successMessage, 19);
          } else {
            infoMessage('Спасибо!', `Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.`);
          }
        })
        .catch(error => {
          if (form.id === 'form1' || form.id === 'form2') {
            formTitleInfo(errorMessage, 14);
          } else {
            infoMessage('Ошибка', 'Свяжитесь с нами по телефону.');
          }
          console.warn(error);
        })
        .finally(() => {
          inputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = false;
            }
            if (input.type === 'tel' || input.name === ('name' || 'promocode')) {
              input.value = '';
            }
          });
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