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
            getImage(cityName);
            console.log(cityName);
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${APIkey}`,{mode: 'cors'});
            const locationData = await response.json();
            console.log(locationData);
            const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&appid=${APIkey}`,{mode: 'cors'});
            const weatherData = await secondResponse.json();
            console.log(weatherData);
            console.log(weatherData.main.temp);
            // display temperature
            const dispTemp = document.createElement('button');
            dispTemp.innerText = `${Math.round(weatherData.main.temp-273.15)} °C`;
            dispTemp.setAttribute('class','tempBtn')
            document.body.appendChild(dispTemp);
            dispTemp.addEventListener('click',toggleTemperature);
            // display humidity
            const disphumidity = document.createElement('button');
            disphumidity.innerText = `Humidity ${Math.round(weatherData.main.humidity)} %`;
            disphumidity.setAttribute('class','humidityBtn')
            document.body.appendChild(disphumidity);
            // display wind speed
            const dispwindSpeed = document.createElement('button');
            dispwindSpeed.innerText = `Wind speed equal ${Math.round(weatherData.wind.speed)} m/s`;
            dispwindSpeed.setAttribute('class','windspdBtn')
            document.body.appendChild(dispwindSpeed);
            
        }
        //weatherRun();
        //const searchItem = "new york";//"cats";
        async function getImage(searchItem){
            const firstResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ZHZdlYgH9XPNSFgE0ORImXO5Tw42KpXs&s=${searchItem}`, {mode: 'cors'});
            const firstCatData = await firstResponse.json();
            img.src = firstCatData.data.images.original.url;
        }
        function toggleTemperature(){
            const inputData = document.querySelector('.tempBtn').innerHTML;
            if(inputData.split(' ')[1] ==='°C'){
                const tempCelsius = document.querySelector('.tempBtn').innerHTML;
                console.log(tempCelsius);
                let tempFahrenheit = (tempCelsius.split(' ')[0]*(9/5))+32;
                console.log(tempFahrenheit);
                tempFahrenheit = Math.round(tempFahrenheit);
                console.log(tempFahrenheit);
                document.querySelector('.tempBtn').innerText = `${tempFahrenheit} °F`; 
            }else if(inputData.split(' ')[1] ==='°F'){
                const tempFahrenheit = document.querySelector('.tempBtn').innerHTML;
                console.log(tempFahrenheit);
                const numFahrenheit = tempFahrenheit.split(' ')[0];
                console.log(numFahrenheit);
                const constantNum = 32;
                console.log(numFahrenheit - constantNum)
                let tempCelsius = (numFahrenheit - constantNum)*(5/9);
                console.log(tempCelsius);
                tempCelsius = Math.round(tempCelsius);
                console.log(tempCelsius);
                document.querySelector('.tempBtn').innerText = `${tempCelsius} °C`; 
            }else{
                console.log('error in the temperature!')
            }
        }
        //runFirst();
// DONE -- toggle displaying the data in Fahrenheit or Celsius.
// DONEHumidity
// DONE wind speed
//  DONE --> You could even use the Giphy API to find appropriate weather-related gifs and display them