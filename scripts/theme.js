const navbarThemeButton = document.getElementById('navbarThemeButton');
const navbarThemeButtonText = document.querySelector('.navbar-theme-button-text');
const body = document.querySelector('body');
let isLightMode = false;

// TOGGLE BETWEEN DARK MODE AND LIGHT MODE

function toggleBetweenDarkModeAndLightMode() {
    if (isLightMode === false) {
        body.classList.add('body-js');
        navbarThemeButton.classList.add('navbar-theme-button-js');
        navbarThemeButtonText.textContent = 'Dark Mode';
        
        isLightMode = true;
        localStorage.setItem('isLightModeLS', isLightMode);
    } else {
        body.classList.remove('body-js');
        navbarThemeButton.classList.remove('navbar-theme-button-js');
        navbarThemeButtonText.textContent = 'Light Mode';
        
        isLightMode = false;
        localStorage.setItem('isLightModeLS', isLightMode);
    };
};

// INITIALIZE BUTTON
navbarThemeButton.addEventListener('click', toggleBetweenDarkModeAndLightMode);

// LOCAL STORAGE

function changeTheThemeBasedOnTheStoredValueInLocalStorage() {
    const isLightModeLS = localStorage.getItem('isLightModeLS');
    
    if (isLightModeLS === 'true') {
        body.classList.add('body-js');
        navbarThemeButton.classList.add('navbar-theme-button-js');
        navbarThemeButtonText.textContent = 'Dark Mode';

        isLightMode = true;
    };
};

changeTheThemeBasedOnTheStoredValueInLocalStorage();