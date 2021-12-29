let header = document.getElementsByTagName('header');
let dropdown = document.querySelector('dropdown');
let sub = document.querySelector('sub');

const changeHeight = () => {
  header[0].classList.toggle('big-header');
  header[0].classList.toggle('small-header');
}

const checkScroll = () => {
  if (window.pageYOffset > 20 & header[0].classList.contains('big-header')) { changeHeight() };
  if (window.pageYOffset < 20 & header[0].classList.contains('small-header')) { changeHeight() };
}

window.addEventListener('scroll', checkScroll);

const onClick = () => {
  sub.style.display = 'flex';
}

if (window.innerWidth <= 768) {
  dropdown.addEventListener('click', onClick);
}

if (window.innerWidth > 768) {
  dropdown.removeEventListener('click', onClick);
}