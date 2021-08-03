class ApiCall {
  constructor(url) {
    this.url = url
  }
  fetchGenres = () => fetch(`${this.url}/genres`).then(response => response.json())

  fetchShowsByGenre = (id) => fetch(`${this.url}/genres/${id}/shows`).then(response => response.json())

  // addToCart = () =>

  updateTicketsRemaining = (genreID, showID) => fetch(`${this.url}/genres/${genreID}/shows/${showID}`, {method: "PATCH", headers: {"Content-Type": "application/json", "Accept": "application/json"}}).then(response => response.json())
}
