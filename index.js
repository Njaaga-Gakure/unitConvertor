const inputEl = document.querySelector(".header--input")
const btn = document.querySelector(".convert--btn")
const lengthCon = document.querySelector("#length-conversion")
const volumeCon = document.querySelector("#volume-conversion")
const massCon = document.querySelector("#mass-conversion")

btn.addEventListener("click", () => {
   convert()
   inputEl.value = ""
})
function convert() {
     let meterToFeet = Number(inputEl.value) * 3.281
     let feetToMeter = Number(inputEl.value) / 3.281
     let literToGallon = Number(inputEl.value) *  0.264
     let gallonToLiter = Number(inputEl.value) /  0.264
     let kiloToPound = Number(inputEl.value) * 2.204
     let poundToKilo = Number(inputEl.value) / 2.204
     
    if (inputEl.value) {
        lengthCon.innerHTML = `${inputEl.value} meters = ${meterToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeter.toFixed(3)} meters`
        volumeCon.innerHTML = `${inputEl.value} liters =  ${literToGallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonToLiter.toFixed(3)} liters`  
        massCon.innerHTML = `${inputEl.value} kilos = ${kiloToPound.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundToKilo.toFixed(3)} kilos`     
    }   
}