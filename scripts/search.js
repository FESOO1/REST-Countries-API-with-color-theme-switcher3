const searchInput = document.getElementById('searchInput');
const form = document.querySelector('form');
const para = document.querySelector('.main-top-search-error');

// REMOVE WHITE SPACE
function removeWhiteSpace(space) {
    return space.replaceAll(' ', '');
};

// SEARCH FOR A COUNTRY

function searchForACountry(e) {
    e.preventDefault();

    const searchInputItself = removeWhiteSpace(searchInput.value.toLowerCase());
    const countryItself = countriesThemselves.querySelectorAll('a');
    const countriesNames = countriesThemselves.querySelectorAll('a .country-itself-information-name');
    
    let i = 0;
    while (i < countriesNames.length) {
        const countryNameItself = countriesNames[i].textContent.toLowerCase().replaceAll(' ', '');

        // CHECKING IF THE INPUT EQUALS TO ONE OF THE NAMES IN THE CONTAINER
        if (searchInput.value.length > 0) {
            form.style.border = '1px solid rgba(255,255,255,0.05)';
            if (searchInputItself === countryNameItself) {
                // IF SO:
                countryItself[i].classList.add('country-itself-shown');
                countryItself[i].classList.remove('country-itself-hidden');
                para.classList.remove('main-top-search-error-active');
            } else {
                // IF NOT:
                countryItself[i].classList.add('country-itself-hidden');
                countryItself[i].classList.remove('country-itself-shown');
                para.classList.add('main-top-search-error-active');
            };
        } else {
            form.style.border = '1px solid red';
        };
        
        // MAKING SURE THAT IF THE INPUT IS EMPTY THE CONTAINER WILL BE FILLED WITH COUNTRIES
        searchInput.addEventListener('input', () => {
            if (searchInput.value.length === 0) {
                para.classList.remove('main-top-search-error-active');
                for (const country of countryItself) {
                    country.classList.remove('country-itself-shown');
                    country.classList.remove('country-itself-hidden');
                };
            };
        });

        // INCREMENTING BY ONE
        i++
    };
};

// INITIALIZE BUTTON
form.addEventListener('submit', searchForACountry);