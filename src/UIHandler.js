class UIHandler {
  constructor(pageState, giphyService) {
    this.pageState = pageState;
    this.giphyService = giphyService;
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => this.handleSearch());
  }

  handleSearch() {
    const input = document.querySelector("input");
    if (input.value) {
      this.pageState.gifSearchParameter = input.value;
      this.pageState.updateURLs();
    }
    this.giphyService.fetchGiphy();
  }
}

export { UIHandler };
