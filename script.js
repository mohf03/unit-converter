
let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-span");
let volumeEl = document.getElementById("volume-span");
let massEl = document.getElementById("mass-span");

convertBtn.addEventListener("click", function() {
  formatLength();
  formatVolume();
  formatMass();
})

function formatLength() {
  let feetNum = inputEl.value * 3.281;
  let meterNum = inputEl.value /  3.281;
  lengthEl.textContent = `${inputEl.value} meters = ${feetNum.toFixed(2)} feet | ${inputEl.value} feet = ${meterNum.toFixed(2)} meters`;
}

function formatVolume() {
  let gallonNum = inputEl.value * 0.264; 
  let literNum = inputEl.value / 0.264;
  volumeEl.textContent = `${inputEl.value} liters = ${gallonNum.toFixed(2)} gallons | ${inputEl.value} gallons = ${literNum.toFixed(2)} liters`;
}

function formatMass() {
  let poundNum = inputEl.value * 2.204;
  let kiloNum = inputEl.value / 2.204;
  massEl.textContent = `${inputEl.value} kilos = ${poundNum.toFixed(2)} pounds | ${inputEl.value} pounds = ${kiloNum.toFixed(2)} kilos`;
}