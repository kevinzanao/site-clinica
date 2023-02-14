import { consultList } from "./consult-list.js";

const $todayList = document.querySelector('#today-list');
const $tomorrowList = document.querySelector('#tomorrow-list');
const $anyDayList = document.querySelector('#anyday-list');

function createPersonInfo(image, name, queryType) {
   let div = document.createElement('div');
   let div_wrapInfo = document.createElement('div');
   let div_wrapQuerytype = document.createElement('div')
   let div_personInfo = document.createElement('div');
   let img_person = document.createElement('img');
   let p_personName = document.createElement('p');
   let img_type = document.createElement('img');
   let p_queryType = document.createElement('p');
   let img_iconChat = document.createElement('img');

   img_person.src = image;
   img_person.alt = "person image";
   p_personName.innerText = name;
   img_type.src = queryType === "remota" ? "./assets/svg/cam-icon.svg" : "./assets/svg/local-icon.svg";
   p_queryType.innerText = `Consulta ${queryType}`;
   img_iconChat.src = "./assets/svg/chat-icon.svg";

   div.classList.add('person-content');
   div_personInfo.classList.add('person-info');
   div_wrapQuerytype.classList.add('query');

   div_wrapQuerytype.appendChild(img_type);
   div_wrapQuerytype.appendChild(p_queryType);
   div_personInfo.appendChild(p_personName);
   div_personInfo.appendChild(div_wrapQuerytype);
   div_wrapInfo.appendChild(img_person);
   div_wrapInfo.appendChild(div_personInfo);
   div.appendChild(div_wrapInfo);
   div.appendChild(img_iconChat);

   return div;
}

function timeConvert(start, duration) {

   let startTime = start.replace(':', '');
   let durationTime = Number(duration);
   let timeComplement = durationTime === 60 ? "h" : "min";
   let time = startTime.length === 4 ? String(Number(startTime) + durationTime) : String(Number(startTime) + durationTime);

   if (time.length === 3) {
      time = "0" + time;
   } 

   let halfTime = Math.floor(time.length / 2);
   let updatedTime = time.substring(0, halfTime) + ":" + time.substring(2,time);
   
   return `${start} - ${updatedTime} (${duration.replace("60", "1")}${timeComplement})`;
}

function createQueryInfo(queryStartTime, duration, type) {
   let div = document.createElement('div');
   let div_contact = document.createElement('div');
   let span_queryTime = document.createElement('span');
   let button_video = document.createElement('button');
   let button_audio = document.createElement('button');
   let button_address = document.createElement('button');

   span_queryTime.innerText = timeConvert(queryStartTime, duration);

   button_video.classList.add("video-call");
   button_audio.classList.add("audio-call");
   button_address.classList.add("address-button")

   if (type === "local") {
      button_address.innerText = "Ver endereço";
      button_video.style.display = "none";
      button_audio.style.display = "none";
   } else if (type === "remota") {
      button_video.innerText = "ligar por video";
      button_audio.innerText = "ligar por áudio";
      button_address.style.display = "none";
   }

   div_contact.appendChild(button_video);
   div_contact.appendChild(button_audio);
   div_contact.appendChild(button_address);
   div.appendChild(span_queryTime);
   div.appendChild(div_contact);

   div.classList.add("query-info");

   return div;
}

function createQuery(personInfo, queryInfo) {
   const div = document.createElement('div');

   div.appendChild(personInfo);
   div.appendChild(queryInfo);

   div.classList.add("list-items");

   return div;
}

export function showQuery() {

   for(let i = 0; i < consultList.today.length; i++) {
      let consult = consultList.today[i].consult;

      let today = createQuery(
         createPersonInfo(consult.image, consult.name, consult.type),
         createQueryInfo(consult.timeStart, consult.duration, consult.type)
      );
      $todayList.appendChild(today);
   }

   for(let i = 0; i < consultList.tomorrow.length; i++) {
      let consult = consultList.tomorrow[i].consult;

      let tomorrow = createQuery(
         createPersonInfo(consult.image, consult.name, consult.type),
         createQueryInfo(consult.timeStart, consult.duration, consult.type)
      );
      $tomorrowList.appendChild(tomorrow);
   }
   
   for(let i = 0; i < consultList.anyday.length; i++) {
      let consult = consultList.anyday[i].consult;

      let anyday = createQuery(
         createPersonInfo(consult.image, consult.name, consult.type),
         createQueryInfo(consult.timeStart, consult.duration, consult.type)
      );
      $anyDayList.appendChild(anyday);
   }
}

showQuery()