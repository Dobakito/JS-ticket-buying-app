class ApiCall {
  constructor(url) {
    this.url = url
  }
  fetchGenres = () => fetch(`${this.url}/genres`).then(response => response.json())

  fetchShowsByGenre = (id) => fetch(`${this.url}/genres/${id}/shows`).then(response => response.json())

  // addToCart = () =>

  updateTicketsRemaining = (genreID, showID, newTicketsLeft) => fetch(`${this.url}/genres/${genreID}/shows/${showID}`, {method: "PATCH", body: JSON.stringify({tickets_left: newTicketsLeft})}).then(response => response.json())
}
