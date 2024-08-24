class UIHandler {
  constructor(pageState, { giphyService, weatherService }) {
    this.pageState = pageState;
    this.giphyService = giphyService;
    this.weatherService = weatherService;
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // const gifBtn = document.querySelector("button");
    // gifBtn.addEventListener("click", () => this.handleGifSearch());
  }

  handleGifSearch() {
    const input = document.querySelector("input");
    if (input.value) {
      this.pageState.gifSearchParameter = input.value;
      this.pageState.updateURLs();
    }
    this.giphyService.fetchGiphy();
  }
}

export { UIHandler };
