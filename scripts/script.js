// Switching SVG files on media share button

const imgShareContainer = document.querySelector('.media__share-container');
const imgShareDefault = document.querySelector('.media__button__share');
const imgShareWhite = document.querySelector('.media__button__share--white');

const socialContainer = document.querySelector('.social__container');
const socialShareContainer = document.querySelector('.social__share-container');

const mediaContainer = document.querySelector('.media__container');

imgShareContainer.addEventListener('mouseenter', () => {
  imgShareDefault.style.display = 'none';
  imgShareWhite.style.display = 'block';
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
