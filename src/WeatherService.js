class WeatherService {
  constructor(pageState) {
    this.pageState = pageState;
    this.defaultWeatherMessage = "Unable to retrieve weather data.";
  }

  async fetchWeather() {
    try {
      const response = await fetch(this.pageState.weatherURL, { mode: "cors" });
      const data = await response.json();
      if (data.error) {
        this.handleError(data.error);
      } else {
        this.updateWeather(data);
      }
    } catch (error) {
      console.error("Failed to fetch weather:", error);
      this.displayError();
    }
  }

  fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  updateWeather(data) {
    console.log(
      `Current temperature in ${data.resolvedAddress}: ${this.fahrenheitToCelsius(data.currentConditions.temp)}°C`
    );
    // const weatherElement = document.querySelector("#weather");
    // weatherElement.textContent = `Current temperature in ${data.resolvedAddress}: ${data.currentConditions.temp}°C`;
  }

  handleError(error) {
    console.warn("Weather API Error:", error);
    this.displayError();
  }

  displayError() {
    console.log(`${this.defaultWeatherMessage}`);
    // const weatherElement = document.querySelector("#weather");
    // weatherElement.textContent = this.defaultWeatherMessage;
  }
}

export { WeatherService };
