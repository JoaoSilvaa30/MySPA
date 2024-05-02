export function displayCountryInfo(countryData) {
    
    const countryInfo = document.getElementById('country-info');
    const flagUrl = countryData.flags.png;
    document.body.style.backgroundImage = `url(${flagUrl})`;

    countryInfo.innerHTML = `
        <h2>${countryData.name.common}</h2>
        <p><strong>Capital:</strong> ${countryData.capital}</p>
        <p><strong>Region:</strong> ${countryData.region}</p>
        <p><strong>Population:</strong> ${countryData.population}</p>
        <p><strong>Area:</strong> ${countryData.area} km²</p>
        <p><strong>Currency:</strong> ${Object.values(countryData.currencies)[0].name} (${Object.values(countryData.currencies)[0].symbol})</p>
    `;
}