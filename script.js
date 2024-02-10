const key = '688b3c9affa9d84b18f37587a1a2db7c'

function putDataOnScreen(dados) {
    console.log(dados);
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-prevision").innerHTML = dados.weather[0].description;
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function searchCity(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    
    putDataOnScreen(dados);
}   

function clickButton() {
    const cidade = document.querySelector(".input-city").value;

    searchCity(cidade);
}