const version = "1.0.0"
const versionEl = document.getElementById("version-el").textContent = "Version " + version
const numberToConvertEl = document.getElementById("numberToConvert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    let num = numberToConvertEl.value
    let meters = Math.floor( (num / 3.281) * 1000 ) / 1000
    let feet = Math.floor( (num * 3.281) * 1000 ) / 1000
    let liters = Math.floor( (num / 0.264) * 1000) / 1000
    let gallons = Math.floor( (num *0.264) * 1000 ) / 1000
    let kilograms = Math.floor( (num / 2.204) * 1000 ) / 1000
    let pounds = Math.floor( (num * 2.204) * 1000 ) / 1000
    lengthEl.innerHTML = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    volumeEl.innerHTML = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
    massEl.innerHTML = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilograms} kilos`
})