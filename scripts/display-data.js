const countriesThemselves = document.querySelector('.countries-themselves');

// DISPLAY COUNTRIES DATA

async function displayCountriesData() {
    const respose = await fetch('../data.json');
    const countriesData = await respose.json();

    for (let i = 0; i < 10; i++) {
        countriesThemselves.innerHTML += `
            <a href="./pages/country-data.html" class="country-itself">
                <div class="country-itself-image">
                    <img src="${countriesData[i].flags.svg}" alt="${countriesData[i].name}" class="country-itself-image-itself">
                </div>
                <div class="country-itself-information">
                    <h2 class="country-itself-information-name">${countriesData[i].name}</h2>
                    <div class="country-itself-information-inner">
                        <h4 class="country-itself-information-inner-text">Population: <span class="country-itself-information-inner-text-population">${countriesData[i].population}</span></h4>
                        <h4 class="country-itself-information-inner-text">Region: <span class="country-itself-information-inner-text-region">${countriesData[i].region}</span></h4>
                        <h4 class="country-itself-information-inner-text">Capital: <span class="country-itself-information-inner-text-capital">${countriesData[i].capital}</span></h4>
                    </div>
                </div>
            </a>
        `;
    };

    // STORING SOME VALUES TO SHOW IN THE COUNTRY DATA PAGE WHEN CLICKED ON THE COUNTRYITSELF ELEMENT
    const countryItself = document.querySelectorAll('.country-itself');

    for (let i = 0; i < countryItself.length; i++) {
        countryItself[i].addEventListener('click', () => {
            localStorage.setItem('countryFlagLS', countriesData[i].flags.svg);
            localStorage.setItem('countryNameLS', countriesData[i].name);
            localStorage.setItem('countryNativeNameLS', countriesData[0].nativeName);
            localStorage.setItem('countryPopulationLS', countriesData[0].population);
            localStorage.setItem('countryRegionLS', countriesData[0].region);
            localStorage.setItem('countrySubregionLS', countriesData[0].subregion);
            localStorage.setItem('countryCapitalLS', countriesData[0].capital);
            localStorage.setItem('countryTopLevelDomainLS', countriesData[0].topLevelDomain[0]);
            localStorage.setItem('countryCurrenciesLS', countriesData[0].currencies[0].name);
            localStorage.setItem('countryBorderCountriesLS', JSON.stringify(countriesData[0].borders));
        });
    };
};

// INITIALIZE BUTTONS
window.addEventListener('DOMContentLoaded', displayCountriesData);