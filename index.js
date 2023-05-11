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

  lengthEl.innerHTML = `${inputEl.value} M = ${metres.toFixed(3)} Ft | ${inputEl.value} Ft = ${feet.toFixed(3)} M`
  volumeEl.innerHTML = `${inputEl.value} L = ${litres.toFixed(3)} Gallons | ${inputEl.value} Gallons = ${gallons.toFixed(3)} L`
  massEl.innerHTML = `${inputEl.value} KG = ${kilos.toFixed(3)} Lbs | ${inputEl.value} Lbs = ${pounds.toFixed(3)} KG`
})

inputEl.addEventListener("click", function() {
  inputEl.value = ""
})
