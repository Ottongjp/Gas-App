// scripts.js

// Page Elements
const splashScreen = document.getElementById('splash-screen');
const registrationPage = document.getElementById('registration-page');
const loginPage = document.getElementById('login-page');
const choosePage = document.getElementById('choose-page');
const paymentPage = document.getElementById('payment-page');
const confirmationPage = document.getElementById('confirmation-page');

// Simulating a splash screen timeout
setTimeout(() => {
    splashScreen.classList.add('hidden');
    registrationPage.classList.remove('hidden');
}, 3000); // 3 seconds

// Registration form logic
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    registrationPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
});

// Login form logic
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    loginPage.classList.add('hidden');
    choosePage.classList.remove('hidden');
});

// Choose form logic
document.getElementById('choose-form').addEventListener('submit', (e) => {
    e.preventDefault();
    choosePage.classList.add('hidden');
    paymentPage.classList.remove('hidden');
});

// Payment confirmation logic
document.getElementById('confirm-payment').addEventListener('click', () => {
    paymentPage.classList.add('hidden');
    confirmationPage.classList.remove('hidden');
});

// Back to home logic
document.getElementById('go-home').addEventListener('click', () => {
    confirmationPage.classList.add('hidden');
    registrationPage.classList.remove('hidden');
});

// Get the splash screen button and other elements
const splashButton = document.getElementById('get-started-button');

// Event listener for splash screen button
splashButton.addEventListener('click', () => {
    splashScreen.classList.add('hidden'); // Hide splash screen
    registrationPage.classList.remove('hidden'); // Show registration page
});
