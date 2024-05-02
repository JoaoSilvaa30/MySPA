import { fetchCountryData } from './../services/country-service.js';
import { displayCountryInfo } from './../views/country-view.js';


// Function to handle the search button click event
export function start() {
    //showForm();
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', async () => {
    const input = document.getElementById('country-input');
    const countryName = input.value.trim();
    if (countryName === '') {
        alert('Please enter a country name.');
        return;
    }

    try {
        // Fetch country data from the service
        const countries = await fetchCountryData(countryName);
        // Display country information in the view
        displayCountryInfo(countries[0]);
    } catch (error) {
        console.error(error);
        alert('Error fetching country information. Please try again later.');
    }
  });
}