const $newQueryForm = document.querySelector('.new-query');
const $fade = document.getElementById('fade');
const $buttonAddQuery = document.querySelector('.floating-button > button');
const $divVideoQuery = document.querySelector('.video-query');
const $divLocalQuery = document.querySelector('.local-query');
const $buttonVideoQuery = document.querySelector('.video-query button');
const $buttonLocalQuery = document.querySelector('.local-query button');
const $requiredInputs = document.querySelectorAll('.input-required');
const $saveButton = document.getElementById('save-button');


$buttonAddQuery.addEventListener('click', () => {
   $fade.classList.toggle("hide");
   $divVideoQuery.classList.add("hidden");
   $divLocalQuery.classList.add("hidden");
   $divVideoQuery.classList.add("appear");
   $divLocalQuery.classList.add("appear");
   $newQueryForm.classList.toggle('active');
})

$saveButton.addEventListener('click', () => {
   
   let isFilled = false;

   $requiredInputs.forEach(input => {
      if(input.value.length !== 0) {
         isFilled = true;
      } else {
         isFilled = false;
         $fade.classList.remove("hide");
         $newQueryForm.classList.add('active');
      }

      console.log(isFilled)

      if (isFilled) {
         
         $fade.classList.add("hide");
         $newQueryForm.classList.remove('active');
      }
   })
})
