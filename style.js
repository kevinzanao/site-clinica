const $fade = document.getElementById('fade');
const $button = document.querySelector('.floating-button button');

$button.addEventListener('click', () => {
   $fade.classList.toggle("hide");
})