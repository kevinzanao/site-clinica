import { consultList } from "./consult-list.js";

const $todayList = document.querySelector('.today-list');
const $tomorrowList = document.querySelector('.tomorrow-list');
const $anyDayList= document.querySelector('.anyday-list')

function createPersonInfo(image, name, queryType) {
   let div = document.createElement('div');
   let div_personInfo = document.createElement('div');
   let img_person = document.createElement('img');
   let p_personName = document.createElement('p');
   let p_queryType = document.createElement('p');
   let img_iconChat = document.createElement('img')

   img_person.src = image;
   img_person.alt = "person image";
   p_personName.innerText = name;
   p_queryType.innerTextii = "Consulta " + queryType;
   img_iconChat.src = "./assets/svg/chat-icon.svg";

   div.classList.add('person-content');
   div_personInfo.classList.add('person-info');

   div_personInfo.appendChild(img_person);
   div_personInfo.appendChild(p_personName);
   div_personInfo.appendChild(p_queryType);
   div.appendChild(div_personInfo);
   div.appendChild(img_iconChat);

   return div;
}

function timeConvert(start, duration) {
   
   let startTime = Number(start.replace(':', ''));
   let durationTime = duration === "01:00" ? Number(duration.replace(':', '')) : Number(duration);
   let timeComplement = durationTime === 100 ? "hora" : "minutos";
   let time = String(startTime + durationTime);
   let halfTime = Math.floor(time.length / 2);
   let updatedTime = time.substring(0, halfTime) + ":" + time.substring(2,time);

   return `${start} - ${updatedTime} (${durationTime} ${timeComplement})`;
}

function createQueryInfo(queryStartTime, duration) {
   let div = document.createElement('div');
   let div_contact = document.createElement('div');
   let span_queryTime = document.createElement('span');
   let button_video = document.createElement('button');
   let button_audio = document.createElement('button');

   span_queryTime.innerText = timeConvert(queryStartTime, duration);
   button_video.innerText = "ligar por video";
   button_audio.innerText = "ligar por áudio";

   div_contact.appendChild(button_video);
   div_contact.appendChild(button_audio);
   div.appendChild(span_queryTime);
   div.appendChild(div_contact);

   return div;
}

function createQuery() {
   const div_today = document.createElement('div');
   const div_tomorrow = document.createElement('div');
   const div_anyday = document.createElement('div');

   for(let i = 0; i < consultList.today.length; i++) {
      let consult = consultList.today[i].consult;

      div_today.appendChild(createPersonInfo(consult.image, consult.name, consult.type));
      div_today.appendChild(createQueryInfo(consult.timeStart, consult.duration));
      $todayList.appendChild(div_today);
   
   }

   
   for(let i = 0; i < consultList.tomorrow.length; i++) {
      let consult = consultList.tomorrow[i].consult;

      div_tomorrow.appendChild(createPersonInfo(consult.image, consult.name, consult.type));
      div_tomorrow.appendChild(createQueryInfo(consult.timeStart, consult.duration));
      $tomorrowList.appendChild(div_tomorrow);
   
   }

   
   for(let i = 0; i < consultList.anyday.length; i++) {
      let consult = consultList.anyday[i].consult;

      div_anyday.appendChild(createPersonInfo(consult.image, consult.name, consult.type));
      div_anyday.appendChild(createQueryInfo(consult.timeStart, consult.duration));
      $anyDayList.appendChild(div_anyday);
   
   }
}

createQuery()
console.log(consultList)