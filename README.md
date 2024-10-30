# SkyTracker 🌤️

**SkyTracker** is a user-friendly weather web app that provides real-time weather information for any location worldwide. Built with HTML, CSS, and JavaScript, and powered by the [WeatherAPI](https://www.weatherapi.com/), it’s designed for simplicity and accuracy in presenting essential weather data.

## Features

- **Live Weather Updates**: Instantly retrieve current weather conditions for any location.
- **Location-Based Search**: Enter the name of any city to get accurate weather data.
- **Current Location Weather**: Automatically fetch weather data for the user's current geographical location using geolocation.
- **Detailed Forecast**: Access information on temperature, humidity, wind speed, and weather conditions.
  
## Built With

- **Frontend**: HTML, CSS, JavaScript
- **Weather Data API**: [WeatherAPI](https://www.weatherapi.com/)

## Getting Started

To set up and use SkyTracker, follow these steps:

1. **Get an API Key**: Sign up on [WeatherAPI](https://www.weatherapi.com/signup.aspx) to obtain an API key.
2. **Create `apikey.js`**:
   - Create a new file named `apikey.js` in the root directory of your project.
   - Add the following code, replacing `'YOUR_API_KEY'` with your actual WeatherAPI key:
     ```javascript
     const apiKey = 'YOUR_API_KEY'
     export default apiKey;
     ```
3. **Launch the App**: Open `index.html` in any web browser to start using SkyTracker.

## How to Use

1. **Search a Location**: Enter the name of any city in the search bar and press enter or click the search button.
2. **Get Weather Information**: SkyTracker will display current weather details, including temperature, local time, and weather conditions for the searched city.
3. **Current Location Weather**: On page load, the app automatically fetches and displays the weather for the user's current location.
4. **Refresh for Updates**: Each time you search for a new city or load the page, the latest data is retrieved, ensuring accurate and real-time updates.

## Planned Features

- **Extended Forecasts**: Add multi-day weather forecasts.
- **Map Integration**: Display weather on an interactive map.
- **Push Notifications**: Alerts for weather changes and severe weather conditions.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to [WeatherAPI](https://www.weatherapi.com/) for providing reliable weather data.

---

Stay informed with SkyTracker, your essential weather companion!
