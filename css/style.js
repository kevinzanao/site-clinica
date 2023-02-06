const $fade = document.getElementById('fade');
const $buttonAddQuery = document.querySelector('.floating-button > button');
const $divVideoQuery = document.querySelector('.video-query');
const $divLocalQuery = document.querySelector('.local-query');
const $buttonVideoQuery = document.querySelector('.video-query button');
const $buttonLocalQuery = document.querySelector('.local-query button');

$buttonAddQuery.addEventListener('click', () => {
   $fade.classList.toggle("hide");
   $divVideoQuery.classList.toggle("hidden");
   $divLocalQuery.classList.toggle("hidden");
   $divVideoQuery.classList.toggle("appear");
   $divLocalQuery.classList.toggle("appear");
   $buttonVideoQuery.classList.toggle("pointer");
   $buttonLocalQuery.classList.toggle("pointer");
})