// Switching SVG files on media share button

const imgShareContainer = document.querySelector('.media__share-container');
const imgShareDefault = document.querySelector('.media__button__share');
const imgShareWhite = document.querySelector('.media__button__share--white');

const socialContainer = document.querySelector('.social__container-mobile');
const socialShareContainer = document.querySelector('.social__share-container');
const bubbleContainer = document.querySelector('.social__bubble-container');

const mediaContainer = document.querySelector('.media__container');
const mediaShareContainer = document.querySelector('.media__share-container--desktop');
const mediaShareDefault = document.querySelector('.media__button__share-desktop');
const mediaShareWhite = document.querySelector('.media__button__share--white-desktop');

imgShareContainer.addEventListener('mouseenter', () => {
  imgShareDefault.style.display = 'none';
  imgShareWhite.style.display = 'block';
});

mediaShareContainer.addEventListener('mouseenter', () => {
  mediaShareDefault.style.display = 'none';
  mediaShareWhite.style.display = 'block';
});

imgShareContainer.addEventListener('click', () => {
  mediaContainer.style.display = 'none';
  socialContainer.style.display = 'flex';
});

socialShareContainer.addEventListener('click', () => {
  mediaContainer.style.display = 'flex';
  socialContainer.style.display = 'none';
});

imgShareContainer.addEventListener('mouseleave', () => {
  imgShareDefault.style.display = 'block';
  imgShareWhite.style.display = 'none';
});

mediaShareContainer.addEventListener('mouseleave', () => {
  mediaShareDefault.style.display = 'block';
  mediaShareWhite.style.display = 'none';
});

mediaShareContainer.addEventListener('click', () => {
  if (bubbleContainer.style.display === 'block') {
    bubbleContainer.style.display = 'none';
  } else {
    bubbleContainer.style.display = 'block';
  }
});
