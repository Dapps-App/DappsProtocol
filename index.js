// Function to fetch cryptocurrency data from CoinGecko API
async function fetchCryptoData() {
    const apiUrl = 'https://api.coingecko.com/api/v3'; // Base URL for CoinGecko API
    const endpoint = '/coins/markets'; // Endpoint to retrieve cryptocurrency market data
    const currency = 'usd'; // Currency for pricing, you can change it to your preferred currency

    try {
        // Make a GET request to the CoinGecko API
        const response = await fetch(`${apiUrl}${endpoint}?vs_currency=${currency}`);

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error('Failed to fetch data from CoinGecko API');
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the cryptocurrency data to the console (you can handle it differently based on your app's requirements)
        console.log(data);
        
        // Return the data if you want to use it elsewhere in your code
        return data;
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching data:', error.message);
    }
}

// Call the fetchCryptoData function to retrieve cryptocurrency data
fetchCryptoData();
