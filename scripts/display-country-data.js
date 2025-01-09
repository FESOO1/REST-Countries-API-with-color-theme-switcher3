const countryImage = document.querySelector('.country-data-left-image');
const countryName = document.querySelector('.country-data-right-name');
const countryNativeName = document.querySelector('.country-data-right-grid-native-name');
const countryPopulation = document.querySelector('.country-data-right-grid-population');
const countryRegion = document.querySelector('.country-data-right-grid-region');
const countrySubregion = document.querySelector('.country-data-right-grid-subregion');
const countryCapital = document.querySelector('.country-data-right-grid-capital');
const countryTopLevelDomain = document.querySelector('.country-data-right-grid-top-level-domain');
const countryCurrencies = document.querySelector('.country-data-right-grid-currencies');
const countryLanguages = document.querySelector('.country-data-right-grid-languages');

// DISPLAY COUNTRY DATA

function displayCountryData() {
    const countryFlagLS = localStorage.getItem('countryFlagLS');
    const countryNameLS = localStorage.getItem('countryNameLS');
    const countryNativeNameLS = localStorage.getItem('countryNativeNameLS');
    const countryPopulationLS = localStorage.getItem('countryPopulationLS');
    const countryRegionLS = localStorage.getItem('countryRegionLS');
    const countrySubregionLS = localStorage.getItem('countrySubregionLS');
    const countryCapitalLS = localStorage.getItem('countryCapitalLS');
    const countryTopLevelDomainLS = localStorage.getItem('countryTopLevelDomainLS');
    const countryCurrenciesLS = localStorage.getItem('countryCurrenciesLS');
    /* const countryBorderCountriesLS = JSON.parse(localStorage.getItem('countryBorderCountriesLS'));
    const countryLanguagesLS = JSON.parse(localStorage.getItem('countryLanguagesLS')); */

    if (countryFlagLS) {
        countryImage.src = countryFlagLS;
        countryName.textContent = countryNameLS;
        countryNativeName.textContent = countryNativeNameLS;
        countryPopulation.textContent = countryPopulationLS;
        countryRegion.textContent = countryRegionLS;
        countrySubregion.textContent = countrySubregionLS;
        countryCapital.textContent = countryCapitalLS;
        countryTopLevelDomain.textContent = countryTopLevelDomainLS;
        countryCurrencies.textContent = countryCurrenciesLS;
    };
};

displayCountryData();
