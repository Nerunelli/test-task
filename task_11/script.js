import anime from '/node_modules/animejs/lib/anime.es.js';

const click = (top, left) => {
  if (document.querySelector('.touch-point')) {
    document.body.removeChild(document.querySelector('.touch-point'));
  }

  let touchPoint = document.createElement('div');
  touchPoint.classList.add('touch-point')
  document.body.appendChild(touchPoint);
  touchPoint.style.top = `${top}px`;
  touchPoint.style.left = `${left}px`;

  let circle_1 = document.createElement('div');
  circle_1.classList.add('circle-1');
  touchPoint.appendChild(circle_1);
  let circle_2 = document.createElement('div');
  circle_2.classList.add('circle-2');
  touchPoint.appendChild(circle_2);

  console.log(top, left);

  anime({
    targets: circle_1,
    duration: 1000,
    easing: 'linear',
    height: [0, 70, 150],
    width: [0, 70, 150],
    borderWidth: ['0px', '30px', '0px'],
  });

  anime({
    targets: circle_2,
    duration: 1000,
    delay: 300,
    easing: 'linear',
    height: [0, 70, 150],
    width: [0, 70, 150],
    borderWidth: ['0px', '30px', '0px'],
    border: 'none'
  });
}

let [pic_1, pic_2, pic_3, shadow] = document.querySelectorAll('.pic');
let pic_1_w = pic_1.getBoundingClientRect().width - 250;
let pic_1_h = pic_1.getBoundingClientRect().height - 60;
let pic_2_w;
let pic_2_h;

setTimeout(() => click(pic_1_h, pic_1_w), 0);

anime({
  targets: pic_1,
  duration: 1000,
  delay: 1300,
  easing: 'linear',
  left: -1000,
});

setTimeout(() => {
  pic_2.style.display = 'flex';
  pic_2_w = pic_2.getBoundingClientRect().width - 800;
  pic_2_h = pic_2.getBoundingClientRect().height - 530;
}, 1300);

anime({
  targets: pic_2,
  duration: 1000,
  delay: 1300,
  easing: 'linear',
  left: 0,
});

setTimeout(() => click(pic_2_h, pic_2_w), 2300);

anime({
  targets: pic_3,
  duration: 3,
  delay: 3000,
  easing: 'linear',
  opacity: '100%',
});

let modal_1 = document.querySelector('.modal-1');
let modal_2 = document.querySelector('.modal-2');
let card = document.querySelector('.card');

setTimeout(() => {
  pic_2_w += 720;
  pic_2_h -= 190;
  click(pic_2_h, pic_2_w);
  shadow.style.display = 'flex';
  card.style.display = 'flex';
}, 4300);

setTimeout(() => {
  shadow.style.opacity = '40%';
}, 4500);

anime({
  targets: modal_1,
  duration: 1000,
  delay: 4800,
  easing: 'linear',
  top: '50px'
});

setTimeout(() => {
  pic_2_w = 310;
  pic_2_h = 160;
  click(pic_2_h, pic_2_w);
}, 5700);

anime({
  targets: modal_2,
  duration: 1000,
  delay: 6000,
  easing: 'linear',
  top: '100px'
});

setTimeout(() => {
  pic_2_w = 500;
  pic_2_h = 300;
  click(pic_2_h, pic_2_w);
}, 7000);

anime({
  targets: [modal_1, modal_2],
  duration: 500,
  delay: 7800,
  easing: 'linear',
  opacity: '0',
});

setTimeout(() => {
  shadow.style.opacity = '0%';
  card.style.opacity = '100%';
}, 8100);

let dialog = document.querySelector('.dialog');

anime({
  targets: dialog,
  duration: 500,
  delay: 8200,
  easing: 'linear',
  width: '320px',
  height: '200px',
  marginTop: '450px',
  marginLeft: '420px',
});

let text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline().add({
  targets: '.text .letter',
  opacity: [0, "100%"],
  easing: "linear",
  duration: 1250,
  delay: (el, i) => 8200 + 150 * (i + 1)
})