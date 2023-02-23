console.log('hello world');
////////////////////////////
const img = document.querySelector('img');
        const btn = document.querySelector('.btn');
        const form = document.querySelector('form');
        //const btnSearch = document.querySelector('.searchGIF');
        //btn.addEventListener('click',weatherRun);
        //btnSearch.addEventListener('click',searchImg);
        //const cityName = 'London';
        const stateCode = '';
        const countryCode = '';
        const APIkey = '410ce42bbda098a695dc897309230b7d';

        form.addEventListener('submit', e => {
            e.preventDefault();
        
            weatherRun();
        });
        

        async function weatherRun(){
            const cityName = document.querySelector('#location').value;
            console.log(cityName);
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${APIkey}`,{mode: 'cors'});
            const locationData = await response.json();
            console.log(locationData);
            const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&appid=${APIkey}`,{mode: 'cors'});
            const weatherData = await secondResponse.json();
            console.log(weatherData);
        }
        //weatherRun();
/* 

        async function runFirst(){
            const firstResponse = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZHZdlYgH9XPNSFgE0ORImXO5Tw42KpXs&s=cats', {mode: 'cors'});
            const firstCatData = await firstResponse.json();
            img.src = firstCatData.data.images.original.url;
        }
        runFirst(); */
// toggle displaying the data in Fahrenheit or Celsius.
// You could even use the Giphy API to find appropriate weather-related gifs and display them