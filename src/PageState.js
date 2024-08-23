class PageState {
  constructor(
    publicKeyWeather,
    locSearchParameter,
    publicKeyGiphy,
    gifSearchParameter
  ) {
    this.publicKeyWeather = publicKeyWeather;
    this.locSearchParameter = locSearchParameter;
    this.publicKeyGiphy = publicKeyGiphy;
    this.gifSearchParameter = gifSearchParameter;
    this.weatherURLTemplate = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/location_parameter?key=public_key`;
    this.giphyURLTemplate = `https://api.giphy.com/v1/gifs/translate?api_key=public_key&s=search_parameter`;
  }

  updateURLs() {
    this.weatherURL = this.weatherURLTemplate
      .replace("location_parameter", this.locSearchParameter)
      .replace("public_key", this.publicKeyWeather);

    this.giphyURL = this.giphyURLTemplate
      .replace("search_parameter", this.gifSearchParameter)
      .replace("public_key", this.publicKeyGiphy);
  }
}

export { PageState };
