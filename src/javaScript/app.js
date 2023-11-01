// Get Started javaScript...);
let $ = document;
const titleConvert = $.querySelector(".title-convert");
const convertValue = $.querySelector(".convert-value");
const modal = $.querySelector(".modal-text");
const changeTemp = $.querySelector(".change-temp");
const showResult = $.querySelector(".result-convert");
const btnConvert = $.querySelector(".btn-convert");
const btnReset = $.querySelector(".btn-reset");
const titleBody = $.querySelector("title");
let temp = "";
let result = "";


function getChangeTemp (e) {
     temp = e.target.value;
     modal.style.color = "green";
     if (temp === "°C to °F") {
          // Celsius to Fahrenheit
          titleBody.innerHTML = "Temp Conversion | °C to °F";
          titleConvert.innerText = "Converter C° to F°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder", "Write °C (Celsius) to (Fahrenheit)");
     } else if (temp === "°F to °C") {
          // Fahrenheit to Celsius
          titleBody.innerHTML = "Temp Conversion | °F to °C";
          titleConvert.innerText = "Converter F° to C°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °F (Fahrenheit) to (Celsius)");
     } else if (temp === "°K to °C") {
          // Kelvin to Celsius
          titleBody.innerHTML = "Temp Conversion | °K to °C";
          titleConvert.innerText = "Converter K° to C°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °K (Kelvin) to (Celsius)");
     } else if (temp === "°C to °K") {
          // Celsius to Kelvin
          titleBody.innerHTML = "Temp Conversion | °C to °K";
          titleConvert.innerText = "Converter C° to K°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °C (Celsius) to (Kelvin)"); 
     } else if (temp === "°R to °C") {
          // Rankine to Celsius
          titleBody.innerHTML = "Temp Conversion | °R to °C";
          titleConvert.innerText = "Converter R° to C°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °R (Rankine) to (Celsius)");
     } else if (temp === "°C to °R") {
          // Celsius to Rankine
          titleBody.innerHTML = "Temp Conversion | °C to °R";
          titleConvert.innerText = "Converter C° to R°";
          modal.innerText = `The temperature change was done successfully`;
          convertValue.setAttribute("placeholder" , "Write °C (Celsius) to (Rankine)"); 
     }
     setTimeout( () => {
          modal.innerHTML = "";
     } , 5000);

     showResult.innerHTML = "Looding...";
}


// Convert Temperature...
function convertTemp () {
     // Convert...
     // return Temp is Changed...
     anime({
          targets: '.modal-text',
          translateX: -50,
     });
     

     if (convertValue.value === "") {
          modal.innerHTML = "Please enter the selected numerical value";
          modal.style.color = "red";
     } else if (isNaN(convertValue.value)) {
          modal.innerHTML = "The entered value is not correct. Try again";
          modal.style.color = "red";
     } else {
          if (titleConvert.innerHTML === "Converter C° to F°") {
               // Celsius to Fahrenheit
               // Formula: F = (C * 5/9) + 32
               result = (convertValue.value * 1.8) + 32;
               showResult.innerHTML = `${convertValue.value} °C to ${result.toFixed(2)} °F`;
          } else if (titleConvert.innerHTML === "Converter F° to C°") {
               // Fahrenheit to Celsius
               // Formula: C = (F - 32) * 5/9
               result = (convertValue.value - 32) * 5 / 9;
               showResult.innerHTML = `${convertValue.value} °F to ${result.toFixed(2)} °C`;
          } else if (titleConvert.innerHTML === "Converter K° to C°") {
               // Kelvin to Celsius
               // Formula: K = C - 273.15
               result = Number(convertValue.value) - 273.15;
               showResult.innerHTML = `${convertValue.value} °K to ${result.toFixed(2)} °C`;
          } else if (titleConvert.innerHTML === "Converter C° to K°") {
               // Celsius to Kelvin
               // Formula: K = C + 273.15
               result = Number(convertValue.value) + 273.15;
               showResult.innerHTML = `${convertValue.value} °C to ${result} °K`;
          } else if (titleConvert.innerHTML === "Converter R° to C°") {
               // Convert from Rankine to Celsius:
               // Formula: C = (R - 491.67) * 5/9
               result = (convertValue.value - 491.67) * 5 / 9;
               showResult.innerHTML = `${convertValue.value} °R to ${result.toFixed(2)} °C`;
          } else if (titleConvert.innerHTML === "Converter C° to R°") {
               // Convert from Celsius to Rankine:
               // Formula: R = (C + 491.67) * 5/9
               result = (convertValue.value * 9 / 5) + 491.67;
               showResult.innerHTML = `${convertValue.value} °C to ${result.toFixed(2)} °R`;
          }
     }

     // Remove Text to input...
     convertValue.value = "";

     setTimeout( () => {
          modal.innerHTML = "";
          anime({
               targets : '.modal-text',
               translateX: 0,
          });
     } , 5000);
}

// Button Click Reset App...
function resetApp () {
     $.location.reload();
}



// Set Event Handler...
changeTemp.addEventListener("change" , getChangeTemp);
btnConvert.addEventListener("click" , convertTemp);
btnReset.addEventListener("click" , resetApp);