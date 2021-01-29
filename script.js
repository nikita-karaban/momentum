// DOM Elements
const time = document.querySelector('.time'),
  fullDate = document.querySelector('.fullDate'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
  weekday = document.querySelector('.weekday'),
  month = document.querySelector('.month'),
  day = document.querySelector('.day'),
  nameInput = document.querySelector('.name_input'),
  focusInput = document.querySelector('.focus_input'),
  cityInput = document.querySelector('.city_input'),
  btn = document.querySelector('.btn'),
  blockquote = document.querySelector('blockquote'),
  figcaption = document.querySelector('figcaption'),
  btnQuote = document.querySelector('.btnQuote'),
  weatherIcon = document.querySelector('.weather-icon'),
  temperature = document.querySelector('.temperature'),
  humidity = document.querySelector('.humidity'),
  speed = document.querySelector('.speed'),
  weatherDescription = document.querySelector('.weather-description'),
  city = document.querySelector('.city');



let bgArr = [];
  






// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    weekday = days[today.getDay()],
    month = monthNames[today.getMonth()],
    day = today.getDate();
  

  // Output Time
  fullDate.innerHTML = `${weekday}<span>, </span>${month} ${day} `;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} `;

  setTimeout(showTime, 1000);
}



// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Greeting
function setGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 6 || hour > 23) {
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 12) {
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    greeting.textContent = 'Good Afternoon, ';
  } else {
    greeting.textContent = 'Good Night, ';
    
  }

}

makeArr = () => {
  let i = 0;
  while (i < 6) {
    let randomBg = `assets/images/night/${Math.floor(Math.random()*20 + 1)}.jpg`;
    if (!bgArr.includes(randomBg)) {
      bgArr.push(randomBg);
      i++;
    }
  }
  while (i < 12) {
    let randomBg = `assets/images/morning/${Math.floor(Math.random()*20 + 1)}.jpg`;
    if (!bgArr.includes(randomBg)) {
      bgArr.push(randomBg);
      i++;
    }
  }
  while (i < 18) {
    let randomBg = `assets/images/day/${Math.floor(Math.random()*20 + 1)}.jpg`;
    if (!bgArr.includes(randomBg)) {
      bgArr.push(randomBg);
      i++;
    }
  }
  while (i < 24) {
    let randomBg = `assets/images/evening/${Math.floor(Math.random()*20 + 1)}.jpg`;
    if (!bgArr.includes(randomBg)) {
      bgArr.push(randomBg);
      i++;
    }
  }
};

makeArr();


// Set Background
function setBg() {
  let today = new Date(),
    hour = today.getHours();
    document.body.style.backgroundImage = `url(${bgArr[hour]})`;
    
}

changeBg = () => {
  const img = document.createElement('img');
  const urlBg = document.body.style.backgroundImage;
  console.log(urlBg);
  
  let numberBg = bgArr.indexOf(urlBg.slice(5, -2));
    numberBg = (numberBg + 1) % 24;
  const src = bgArr[numberBg];
  console.log(numberBg);
  
  img.src = src;
  img.onload = () => {      
    document.body.style.backgroundImage = `url(${src})`;
  }; 
};



//Name
// Get Name
function getName() {
  if (localStorage.getItem('name') === null ) {
    name.classList.add('hidden');
    nameInput.classList.remove('hidden');
    nameInput.setAttribute('placeholder', 'Your Name');
  } else {
    nameInput.classList.add('hidden');
    name.classList.remove('hidden');
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', nameInput.value);
      name.innerText = localStorage.getItem('name');
      nameInput.classList.add('hidden');
      name.classList.remove('hidden');
      nameInput.blur();
    }
  }
   else {
    name.classList.add('hidden');
    nameInput.classList.remove('hidden');
  }
}

newName = (e) =>{
  nameInput.value = '';
  setName(e);
};
clearName =()=> {
  nameInput.setAttribute('placeholder', '');
};


blurName =()=> {
  if (nameInput.value.trim() === '') {
    name.innerText = localStorage.getItem('name');
    nameInput.classList.add('hidden');
    name.classList.remove('hidden');
    getName();
  } else {
    localStorage.setItem('name', nameInput.value);
    name.innerText = localStorage.getItem('name');
    nameInput.classList.add('hidden');
    name.classList.remove('hidden');
    getName();
    nameInput.setAttribute('placeholder', 'Write Your Name');
    nameInput.blur();
  }

};

blurFocus =()=> {
  if (focusInput.value.trim() === '') {
    focus.innerText = localStorage.getItem('focus');
    focusInput.classList.add('hidden');
    focus.classList.remove('hidden');
    getFocus();
  } else {
    localStorage.setItem('focus', focusInput.value);
    focus.innerText = localStorage.getItem('focus');
    focusInput.classList.add('hidden');
    focus.classList.remove('hidden');
    getFocus();
    focusInput.setAttribute('placeholder', 'Write Your focus');
    focusInput.blur();
  }

};

newFocus = (e) =>{
  focusInput.value = '';
  setFocus(e);
};
clearFocus =()=> {
  focusInput.setAttribute('placeholder', '');
};


// Get Focus

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.classList.add('hidden');
    focusInput.classList.remove('hidden');
    focusInput.setAttribute('placeholder', 'Enter Focus');
  } else {
    focusInput.classList.add('hidden');
    focus.classList.remove('hidden');
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', focusInput.value);
      focus.innerText = localStorage.getItem('focus');
      focusInput.classList.add('hidden');
      focus.classList.remove('hidden');
      focusInput.blur();
    }
  } else {
    focus.classList.add('hidden');
    focusInput.classList.remove('hidden');
  }
}

///Quote
async function getQuote() {  
  const url = `https://type.fit/api/quotes`;
    const res = await fetch(url);
    const data = await res.json(); 
    // blockquote.textContent = data.text;
    let numberQuote = Math.floor(Math.random() * 1643);
    console.log(numberQuote);
    blockquote.textContent = data[numberQuote].text;
    figcaption.textContent = data[numberQuote].author;
}


/// Weather
async function getWeather() {
  //https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=3e729ddf51c7d419b9688674150b4e99&units=metric
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=3e729ddf51c7d419b9688674150b4e99&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  try {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    speed.textContent = `${data.wind.speed} km/h`;
    weatherDescription.textContent = data.weather[0].description;
  } catch(e) {
    if (localStorage.getItem('city') !== null && localStorage.getItem('city') !== '') {
      weatherDescription.classList.add('hidden');
      temperature.classList.add('hidden');
      cityInput.classList.add('hidden');
      city.classList.remove('hidden');
      city.textContent = "I not found";
      cityInput.value = '';
      

    }
  }
}




function setCity(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (cityInput.value.trim() === '') {
        cityText.innerText = localStorage.getItem('city');
        // getCity();
      } else {
        localStorage.setItem('city', cityInput.value);
        city.innerText = localStorage.getItem('city');
        cityInput.classList.add('hidden');
        city.classList.remove('hidden');
        cityInput.blur();

      }

    }
  } else {
    city.classList.add('hidden');
    cityInput.classList.remove('hidden');
  }
}

function getCity() {
  if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
    city.classList.add('hidden');
    cityInput.classList.remove('hidden');
    
    weatherDescription.classList.add('hidden');
    temperature.classList.add('hidden');
  } else {
    cityInput.classList.add('hidden');
    city.classList.remove('hidden');
    city.textContent = localStorage.getItem('city');
    weatherDescription.classList.remove('hidden');
    temperature.classList.remove('hidden');
    getWeather();
    // weatherDescription.textContent = ' ';
    // temperature.textContent = ' ';


  }
}

newCity = (e) =>{
  cityInput.value = '';
  setCity(e);
};
clearCity =()=> {
  cityInput.setAttribute('placeholder', '');
};

blurCity =()=> {
  if (cityInput.value.trim() === '') {
    city.innerText = localStorage.getItem('city');
    cityInput.classList.add('hidden');
    city.classList.remove('hidden');
    getCity();
  } else {
    localStorage.setItem('city', cityInput.value);
    city.innerText = localStorage.getItem('city');
    cityInput.classList.add('hidden');
    city.classList.remove('hidden');
    getCity();
    cityInput.setAttribute('placeholder', 'Write Your city');
    cityInput.blur();
  }

};



nameInput.addEventListener('click', clearName);
nameInput.addEventListener('blur', blurName);
nameInput.addEventListener('keypress', setName);
name.addEventListener('click', newName);


focusInput.addEventListener('blur', blurFocus);
focusInput.addEventListener('click', clearFocus);
focusInput.addEventListener('keypress', setFocus);
focus.addEventListener('click', newFocus);

btn.addEventListener('click', changeBg);

btnQuote.addEventListener('click', getQuote);

document.addEventListener('DOMContentLoaded', getWeather);
cityInput.addEventListener('keypress', setCity);
cityInput.addEventListener('click', clearCity);
cityInput.addEventListener('blur', blurCity);
city.addEventListener('click', newCity);

// Run
showTime();
setGreet();
setBg();
getName();
getFocus();
getQuote();
getCity();

