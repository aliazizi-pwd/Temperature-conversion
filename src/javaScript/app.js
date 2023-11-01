// Get Started javaScript...);
let $ = document;
const titleConvert = $.querySelector(".title-convert");
const convertValue = $.querySelector(".convert-value");
const modal = $.querySelector(".modal-text");
const changeTemp = $.querySelector(".change-temp");
const showResult = $.querySelector(".result-convert");
const looding = $.querySelector(".looding");
const btnConvert = $.querySelector(".btn-convert");
const btnReset = $.querySelector(".btn-reset");
const titleBody = $.querySelector("title");



function getChangeTemp (e) {
     let temp = changeTemp.value;
     if (temp === "°C to °F") {
          // Celsius to Fahrenheit
          titleBody.innerHTML = "Temp Conversion | °C to °F";
          titleConvert.innerText = "Converter C° to F°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder", "Write °C (Celsius)")
     } else if (temp === "°F to °C") {
          // Fahrenheit to Celsius
          titleBody.innerHTML = "Temp Conversion | °F to °C";
          titleConvert.innerText = "Converter F° to C°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °F (Fahrenheit)");
     } else if (temp === "°K to °C") {
          // Kelvin to Celsius
          titleBody.innerHTML = "Temp Conversion | °K to °C";
          titleConvert.innerText = "Converter K° to C°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °K (Kelvin)");
     } else if (temp === "°C to °K") {
          // Celsius to Kelvin
          titleBody.innerHTML = "Temp Conversion | °C to °K";
          titleConvert.innerText = "Converter C° to K°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °C (Celsius)"); 
     } else if (temp === "°R to °C") {
          // Rankine to Celsius
          titleBody.innerHTML = "Temp Conversion | °R to °C";
          titleConvert.innerText = "Converter R° to C°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °R (Rankine)"); 
     } else if (temp === "°C to °R") {
          // Celsius to Rankine
          titleBody.innerHTML = "Temp Conversion | °C to °R";
          titleConvert.innerText = "Converter C° to R°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °C (Celsius)"); 
     }
     setTimeout( () => {
          modal.innerHTML = "";
     } , 5000);
}

changeTemp.addEventListener("change" , getChangeTemp);
