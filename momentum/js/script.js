// import {showTime, getTimeofDay, showDate} from "./clock.js"

// function translate() 

const langEn = document.querySelector('.header__en');
const langRu = document.querySelector('.header__ru');
const langBtnWrapper = document.querySelectorAll('.header__lang-btn-wrapper');

langBtnWrapper[0].classList.toggle('lang-chosen');

langEn.addEventListener('click', () => {
  langBtnWrapper[0].classList.toggle('lang-chosen');
  langBtnWrapper[1].classList.toggle('lang-chosen');
});
langRu.addEventListener('click', () => {
  langBtnWrapper[1].classList.toggle('lang-chosen');
  langBtnWrapper[0].classList.toggle('lang-chosen');
});


function showTime() {
  setTimeout(showTime, 1000);
  const time = document.querySelector('.time');
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;

  // showDate();
  // showGreeting()
}

showTime();


 // Date

function showDate() {

  const dateClass = document.querySelector('.date');
  const date = new Date();
  const options = { weekday: "long", day: 'numeric', month: 'long' };

  let currentDate = date.toLocaleDateString('en-US', options);
  dateClass.textContent = currentDate;


  langEn.addEventListener('click', () => {
    currentDate = date.toLocaleDateString('en-US', options);
    dateClass.textContent = currentDate;
  });
  langRu.addEventListener('click', () => {
    currentDate = date.toLocaleDateString('ru-RU', options);
    dateClass.textContent = currentDate;
  });



}


showDate();

 // Greeting


const greetingDay = new Date();
const hours = greetingDay.getHours();

function getTimeofDay() {

  

  if (hours >= 0 && hours < 6) {
    return 'night';
  }
  if (hours >= 6 && hours < 12) {
    return 'morning';
  }
  if (hours >= 12 && hours < 18) {
    return 'afternoon';
  }
  if (hours >= 18 && hours < 24) {
    return 'evening';
  }
};



function getTimeOfDayRu() {
  if (hours >= 0 && hours < 6) {
    return 'Доброй ночи';
  }
  if (hours >= 6 && hours < 12) {
    return 'Доброе утро';
  }
  if (hours >= 12 && hours < 18) {
    return 'Добрый день';
  }
  if (hours >= 18 && hours < 24) {
    return 'Добрый вечер';
  }
};


// input name

 const greeting = document.querySelector('.greeting');


greeting.textContent = `Good ${getTimeofDay()}, `;
const name = document.querySelector('.name');
name.placeholder = '[Enter name]';

langEn.addEventListener('click', () => {
  greeting.textContent = `Good ${getTimeofDay()}, `;
    name.placeholder = '[Enter name]';
});
langRu.addEventListener('click', () => {
  greeting.textContent = `${getTimeOfDayRu()}, `;
    name.placeholder = '[Введите имя]';
});



const setLocalStorage = () => {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
};
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        getWeather();
    }
};
window.addEventListener('load', getLocalStorage);






//Slider 

//   random number from 1 to 20
let randomNum = getRandomNum();

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getRandomNum() {
  return Math.floor(Math.random() * 20) + 1;

}


function setBg() {
  const timeofDay = getTimeofDay();
  const bgNum = randomNum.toString().padStart(2, "0");
  const img = new Image();
  const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeofDay}/${bgNum}.jpg`;
  img.onload = () => {
    document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeofDay}/${bgNum}.jpg')`
  };
  img.src = url;
}

setBg();


function getSlideNext() {
  if (randomNum <= 20) randomNum += 1;
  else randomNum = 1;
  setBg();

}


function getSlidePrev() {
  if (randomNum <= 20) randomNum -= 1;
  else randomNum = 20;
  setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);




//Weather


const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');

async function getWeather() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=3e136e5ea050be2374efc3d14a3cc932&units=metric`
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';

  if (data.main) {
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
  }  else {
    temperature.textContent = '';
    weatherDescription.textContent = `"${city.value}" is not found. Please check town.`;
    wind.textContent = '';
    humidity.textContent = '';
  }


langEn.addEventListener('click', () => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=3e136e5ea050be2374efc3d14a3cc932&units=metric`
  if (data.main) {
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;

} else {
  temperature.textContent = '';
  weatherDescription.textContent = `"${city.value}" is not found. Please check town.`;
  wind.textContent = '';
  humidity.textContent = '';
}
})

langRu.addEventListener('click', () => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=3e136e5ea050be2374efc3d14a3cc932&units=metric`
  if (data.main) {
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `Влажность: ${Math.round(data.main.humidity)} %`;
  wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)}м/с`;

} else {
  temperature.textContent = '';
  weatherDescription.textContent = `"${city.value}" не найден. Проверьте город.`;
  wind.textContent = '';
  humidity.textContent = '';
}
})

}


function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);



function setcityLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setcityLocalStorage)

function getcityLocalStorage() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getcityLocalStorage)



//Quotes

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');


async function getQuotes() {
  const quotes = './assets/data.json';
  const res = await fetch(quotes);
  const data = await res.json();
  
  let randomQuotes = Math.floor(Math.random() * data.length) + 1;
  quote.textContent = data[randomQuotes].en.text;
  author.textContent = data[randomQuotes].en.author;

  langEn.addEventListener('click', () => {
    quote.textContent = data[randomQuotes].en.text;
    author.textContent = data[randomQuotes].en.author;
})

langRu.addEventListener('click', () => {
  quote.textContent = data[randomQuotes].ru.text;
  author.textContent = data[randomQuotes].ru.author;
})


}

changeQuote.addEventListener('click', getQuotes);
window.addEventListener('load', getQuotes)



// playAudio



import playList from './playlist.js';
const playBtn = document.querySelector('.play');
const playNextAudio = document.querySelector('.play-next');
const playPrevAudio = document.querySelector('.play-prev');

const audio = new Audio();
let isPlay = true;
let playNum = 0;
let sec = 0;
let min = 0;

function playAudio() {
  audio.currentTime = 0;
  audio.src = playList[playNum].src;
  
  if (isPlay) {
    audio.play();
    isPlay = false;
    playBtn.classList.remove('pause');


  } else if (!isPlay) {
    audio.pause();
    isPlay = true;
    playBtn.classList.add('pause');

  }


}

playBtn.addEventListener('click', playAudio);



function playNext() {
  playNum = playNum >= playList.length - 1 ? 0 : ++playNum;
  isPlay = true;
  playAudio();
  playBtn.classList.remove('pause');

}

playNextAudio.addEventListener('click', playNext);


function playPrev() {
  playNum--;
  playNum = playNum < 0 ? playNum = playList.length - 1 : playNum;
  isPlay = true;
  playAudio();
  playBtn.classList.remove('pause');
}

playPrevAudio.addEventListener('click', playPrev);


playBtn.addEventListener('ended', function () {
  playNext();
});


// playList



const playListContainer = document.querySelector('.play-list');




function addPlayTrack() {
  let nameSong = "";
  for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    nameSong = `${playList[i].title}`;
    li.textContent = nameSong;
    li.classList.add("play-item");
    playListContainer.append(li);
    console.log(nameSong);
  }
}
addPlayTrack();




  

//  settings 

const settingsBtn = document.querySelector('.footer__settings-btn');
const settingsOverlay = document.querySelector('.settings');
const settingsBlocksTitle = document.querySelector('.settings__blocks');
const settingsBlocksOptions = document.querySelectorAll('.settings__options');

settingsBtn.addEventListener('click', () => {
    settingsOverlay.classList.toggle('settings-active');
});

settingsBtn.textContent = 'Settings';
settingsBlocksTitle.textContent = 'Show/hide blocks:';

settingsBlocksOptions[0].textContent = 'Audio player';
settingsBlocksOptions[1].textContent = 'Time';
settingsBlocksOptions[2].textContent = 'Date';
settingsBlocksOptions[3].textContent = 'Greetings';
settingsBlocksOptions[4].textContent = 'Weather';
settingsBlocksOptions[5].textContent = 'Quotes';

console.log();

langEn.addEventListener('click', () => {
    settingsBtn.textContent = 'Settings';
    settingsBlocksTitle.textContent = 'Show/hide blocks:';

    settingsBlocksOptions[0].textContent = 'Audio player';
    settingsBlocksOptions[1].textContent = 'Time';
    settingsBlocksOptions[2].textContent = 'Date';
    settingsBlocksOptions[3].textContent = 'Greetings';
    settingsBlocksOptions[4].textContent = 'Weather';
    settingsBlocksOptions[5].textContent = 'Quotes';
});
langRu.addEventListener('click', () => {
    settingsBtn.textContent = 'Настройки';
    settingsBlocksTitle.textContent = 'Показать/убрать блоки:';

    settingsBlocksOptions[0].textContent = 'Аудиоплеер';
    settingsBlocksOptions[1].textContent = 'Время';
    settingsBlocksOptions[2].textContent = 'Дата';
    settingsBlocksOptions[3].textContent = 'Приветствие';
    settingsBlocksOptions[4].textContent = 'Погода';
    settingsBlocksOptions[5].textContent = 'Цитаты';
});