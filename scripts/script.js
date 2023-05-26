// Switching SVG files on media share button

const imgShareContainer = document.querySelector('.media__share-container');
const imgShareDefault = document.querySelector('.media__button__share');
const imgShareWhite = document.querySelector('.media__button__share--white');

imgShareContainer.addEventListener('mouseenter', () => {
  imgShareDefault.style.display = 'none';
  imgShareWhite.style.display = 'block';
});

imgShareContainer.addEventListener('mouseleave', () => {
  imgShareDefault.style.display = 'block';
  imgShareWhite.style.display = 'none';
});
