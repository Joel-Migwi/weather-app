const api={
key: "6af856f6b36d2c8b08e2f4a947153d34",
base: "http://api.openweathermap.org/data/2.5/"
}
const searchbox= document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) {
if (evt.keyCode==13) {
	getResults(searchbox.value);
	console.log(searchbox.value);
}
}

function getResults(query) {
	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
	.then(weather => { 
	return weather.json();
		})
		.then(displayResults);
}
function displayResults (weather) { 
console.log(weather);
let city = document.querySelector('.location .city');
city.innerText = `${weather.name},${weather.sys.country}`;
let now = new Date();
let date = document.querySelector('.location .date');
date.innerText = dateBuilder(now);
let temp = document.querySelector('.current .temp');
//temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>;
temp.innerHTML = `${weather.main.temp}<span>&#176C</span>`;
let weather_el = document.querySelector('.current .weather');
weather_el.innerText = weather.weather[0].main;
let high_low = document.querySelector('.current .hi-low');
high_low.innerHTML = `${weather.main.temp_min}<span>&#176C</span> /${weather.main.temp_max}<span>&#176C</span>`;

}

function dateBuilder(d) {
	let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=days[d.getDay()];
let date=d.getDate();
let month=months[d.getMonth()];
let year=d.getFullYear();
return `${day} ${date} ${month} ${year}`;



}