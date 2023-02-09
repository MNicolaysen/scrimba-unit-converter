const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
  const metres = inputEl.value * 3.281
  const litres = inputEl.value * 0.220
  const kilos = inputEl.value * 2.0204
  const feet = inputEl.value * 0.3048
  const gallons = inputEl.value * 4.456
  const pounds = inputEl.value * 0.453

  lengthEl.innerHTML = `${inputEl.value} metres = ${metres.toFixed(3)} feet | ${inputEl.value} feet = ${feet.toFixed(3)}`
  volumeEl.innerHTML = `${inputEl.value} litres = ${litres.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallons.toFixed(3)}`
  massEl.innerHTML = `${inputEl.value} kilograms = ${kilos.toFixed(3)} pounds | ${inputEl.value} pounds = ${pounds.toFixed(3)}`

  inputEl.value = ""
})
