import "./styles.css";
import { PageState } from "./PageState.js";
import { GiphyService } from "./GiphyService.js";
import { UIHandler } from "./UIHandler.js";
import { WeatherService } from "./WeatherService.js";

const pageState = new PageState("null", "london", "null", "cats");
pageState.updateURLs();

// const giphyService = new GiphyService(pageState);

const weatherService = new WeatherService(pageState);

new UIHandler(pageState, weatherService);

// Initialize by drawing the initial Giphy and fetching the weather
// giphyService.fetchGiphy();
weatherService.fetchWeather();
