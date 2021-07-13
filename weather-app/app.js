const myKey = "af276126cd0606dd46a2ff2cad4284f6"; //ye i know this is my key

const button = document.querySelector(".button");
const iconData = {
        "clear sky":"light_mode",
        "few clouds: 11-25%":"wb_cloudy",
        "few clouds":"wb_cloudy",
        "scattered clouds":"wb_cloudy",
        "broken clouds":"wb_cloudy",
        "overcast clouds":"wb_cloudy",
        "mist":"wine_bar",
        "Smoke":"wine_bar",
        "Haze":"wine_bar",
        "sand/ dust whirls":"wine_bar",
        "fog":"wine_bar",
        "sand":"wine_bar",
        "dust":"wine_bar",
        "volcanic ash":"wine_bar",
        "squalls":"wine_bar",
        "tornado":"wine_bar",
        "light snow": "ac_unit",
        "Snow":"ac_unit",
        "Heavy snow":"ac_unit",
        "Sleet":"ac_unit",
        "Light shower sleet":"ac_unit",
        "Shower sleet":"ac_unit",
        "Light rain and snow":"ac_unit",
        "Rain and snow":"ac_unit",
        "Light shower snow":"ac_unit",
        "Shower snow":"ac_unit",
        "Heavy shower snow":"ac_unit",
        "light rain":"umbrella",
        "moderate rain":"umbrella",
        "heavy intensity rain":"umbrella",
        "very heavy rain":"umbrella",
        "extreme rain":"umbrella",
        "freezing rain":"umbrella",
        "light intensity shower rain":"umbrella",
        "shower rain":"umbrella",
        "heavy intensity shower rain":"umbrella",
        "ragged shower rain":"umbrella"
}

Weather.setApiKey(myKey);

function getData(city, domTemp, domCond, domIcon){
    Weather.getCurrent( city, function( current ) {
        temperature = Math.round( Weather.kelvinToCelsius( current.temperature()));
        condition = current.conditions();
        
        const temperatureDom = document.querySelector(domTemp);
        const conditionDom = document.querySelector(domCond);
        const icon = document.querySelector(domIcon);

        temperatureDom.textContent = "Tempature is " + temperature + "°";
        conditionDom.textContent = "Weather is " + condition + "";
        icon.innerHTML = iconData[condition];
    } );

}

getData("Istanbul",".istanbulTemp",".istanbulCond",".left-left .material-icons");
getData("Tokyo",".tokyoTemp",".tokyoCond",".right-right .material-icons");

button.addEventListener("click",function(e){
    const bot = document.querySelector(".bot");
    const cityName = document.querySelector(".cityX");
    const input = document.querySelector(".input")
    if (input.value){
        cityName.innerHTML = input.value;
        bot.style.display = "flex";
        getData(input.value,".tempX", ".condX","#iconX");
    }
});

