import { consultList } from "./consult-list.js";
import { showQuery } from "./index.js"

const $form = document.querySelector("form");
const $allLists = document.querySelectorAll('.list')
const $inputName = document.getElementById('name');
const $inputSelectType = document.getElementById('type');
const $inputDate = document.getElementById('date');
const $inputTime = document.getElementById('time');
const $inputDuration = document.getElementById('duration');
const $inputObservation = document.getElementById('observation');
const $saveButton = document.getElementById('save-button');

$saveButton.onclick = saveForm;

let week = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

$form.addEventListener('submit', (event) => {
   event.preventDefault()
} )

function getDay(value) {
   let date = new Date(value); 
   let day = date.getDay()

   console.log(week[day])
   return week[day];
}

function getDate() {

   let date = new Date()

   let todayDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
   let tomorrowDate =  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate() + 1).padStart(2, '0')}`;
   let anydayDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate() + 2).padStart(2, '0')}`;

   return [todayDate, tomorrowDate, anydayDate];
}

function saveForm() {

   let name = $inputName.value;
   let type = $inputSelectType.value;
   let date = $inputDate.value;
   let time = $inputTime.value;
   let duration = $inputDuration.value;
   let observation = $inputObservation.value;
   let validation = name === "" || type === "" || time === "";

   let consult = {
      consult: {
         image: './assets/img/person-placeholder.jpg',
         name: name,
         type: type,
         date: date,
         timeStart: time,
         duration: duration,
      }
   }

   if (!validation) {
      getDay(date);
      addToConsultList(consult)
      return consult;
   }
}

function addToConsultList(value) {

   let date = getDate();
   let consult = value;
   let todayDateValidation = consult.consult.date === date[0];
   let tomorrowDateValidation = consult.consult.date === date[1];
   let anydayDateValidation = consult.consult.date === date[2];

   console.log(date[1])
   console.log(consult.consult.date)

   if(todayDateValidation) {
      consultList.today.push(value);
   } else if (tomorrowDateValidation) {
      consultList.tomorrow.push(value);
   } else if (anydayDateValidation) {
      consultList.anyday.push(value);
   } else {
      consultList.rest.push(value);
   }

   setTimeout(() => {

      $inputName.value = '';
      $inputSelectType.value = 'default';
      $inputDate.value = '';
      $inputTime.value = '';
      $inputDuration.value = '';
      $inputObservation.value = '';
   }, 1000)



   $allLists.forEach(list => {
      list.innerHTML = '';
   })   

   showQuery();
}





