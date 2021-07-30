class ApiCall {
  constructor(url) {
    this.url = url
  }
  fetchGenres = () => fetch(`${this.url}/genres`).then(response => response.json())

  fetchShowsByGenre = () => fetch(`${this.url}/genres/${id}/shows`).then(response => response.json())

  // addToCart = () =>

  // updateTicketsRemaining = () =>
}
