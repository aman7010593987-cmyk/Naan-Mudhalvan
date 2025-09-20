// script.js

const carNumberInput = document.getElementById('carNumber');
const loadCarBtn = document.getElementById('loadCarBtn');
const controlSection = document.getElementById('controlSection');
const speedDisplay = document.getElementById('speedDisplay');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const logDiv = document.getElementById('log');

let currentSpeed = 0;
let loadedCar = '';

loadCarBtn.addEventListener('click', () => {
  const carNumber = carNumberInput.value.trim().toUpperCase();

  if (!/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/.test(carNumber)) {
    alert('Please enter a valid car number (e.g., KA01AB1234).');
    return;
  }

  loadedCar = carNumber;
  currentSpeed = 0;
  updateSpeedDisplay();
  controlSection.classList.remove('hidden');
  logDiv.innerHTML = ''; // Clear previous logs
  logAction(`Car ${loadedCar} loaded. Speed initialized to 0 km/h.`);
});

increaseBtn.addEventListener('click', () => {
  currentSpeed += 10;
  updateSpeedDisplay();
  logAction(`Increased speed to ${currentSpeed} km/h.`);
});

decreaseBtn.addEventListener('click', () => {
  if (currentSpeed >= 10) {
    currentSpeed -= 10;
  } else {
    currentSpeed = 0;
  }
  updateSpeedDisplay();
  logAction(`Decreased speed to ${currentSpeed} km/h.`);
});

function updateSpeedDisplay() {
  speedDisplay.textContent = `Speed: ${currentSpeed} km/h`;
}

function logAction(message) {
  const timestamp = new Date().toLocaleTimeString();
  const entry = document.createElement('div');
  entry.textContent = `[${timestamp}] ${message}`;
  logDiv.prepend(entry); // New logs at the top
}
