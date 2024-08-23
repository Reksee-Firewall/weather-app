class GiphyService {
  constructor(pageState) {
    this.pageState = pageState;
    this.defaultImageURL = "./assets/images/github-mark-white.png";
  }

  async fetchGiphy() {
    try {
      const response = await fetch(this.pageState.giphyURL, { mode: "cors" });
      const data = await response.json();
      if (data.data.length === 0) {
        this.handleNoResults();
      } else {
        this.updateImage(data.data.images.original.url);
      }
    } catch (error) {
      console.error("Failed to fetch Giphy:", error);
      this.displayError();
    }
  }

  updateImage(url) {
    const img = document.querySelector("img");
    img.src = url;
  }

  handleNoResults() {
    this.updateImage(this.defaultImageURL);
  }

  // Does NOT mean the same as 'handleNoResults'
  displayError() {
    const img = document.querySelector("img");
    img.src = this.defaultImageURL;
  }
}

export { GiphyService };
