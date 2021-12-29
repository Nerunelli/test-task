const popup = document.querySelector('.popup');
const overlay = document.querySelector('.grey-bg');
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll('.validation');
const openPopup = document.querySelector('.open-popup');
const submit = document.querySelector('.submit');
const closeBtn = document.querySelector('.close');
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const [email, smthLong, input] = inputs;


const handleClose = () => {
  for (let input of inputs) {
    input.value = '';
    input.classList.remove('error');
  }
  for (let err of errors) {
    err.classList.remove('active');
  }
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

const handleSubmit = () => {
  let error = false;
  if (email.value.length < 1) {
    email.classList.add('error');
    errors[0].innerHTML = 'Введите email';
    errors[0].classList.add('active');
    error = true;
  } else if (!emailRegex.test(email.value)) {
    email.classList.add('error');
    errors[0].innerHTML = 'Введите корректный email';
    errors[0].classList.add('active');
    error = true;
  } else {
    email.classList.remove('error');
    errors[0].classList.remove('active');
  }
  if (smthLong.value.length < 3) {
    smthLong.classList.add('error');
    errors[1].classList.add('active');
    error = true;
  } else {
    smthLong.classList.remove('error');
    errors[1].classList.remove('active');
  }
  if (!error) {
    handleClose();
    // let success = document.createElement('div');
    // success.style.color = '#599e03';
    // success.style.marginLeft = '10px';
    // success.innerHTML = 'успех';
    // openPopup.after(success);
    openPopup.insertAdjacentHTML('afterend', '<div style="color: #599e03; margin-left: 10px">успех</div>');
  }
}

const openForm = () => {
  popup.style.display = 'block';
  overlay.style.display = 'block';
}


submit.addEventListener('click', handleSubmit);
closeBtn.addEventListener('click', handleClose);
openPopup.addEventListener('click', openForm);
