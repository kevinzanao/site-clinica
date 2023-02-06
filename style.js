const $fade = document.getElementById('fade');
const $buttonAddQuery = document.querySelector('.floating-button > button');
const $buttonVideoQuery = document.querySelector('.video-query');
const $buttonLocalQuery = document.querySelector('.local-query');

$buttonAddQuery.addEventListener('click', () => {
   $fade.classList.toggle("hide");
   $buttonVideoQuery.classList.toggle("hidden");
   $buttonLocalQuery.classList.toggle("hidden");
   $buttonVideoQuery.classList.toggle("appear");
   $buttonLocalQuery.classList.toggle("appear");
})