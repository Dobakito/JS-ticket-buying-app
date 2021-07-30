class ApiCall {
  constructor(url) {
    this.url = url
  }
  fetchGenres = () => fetch(`${this.url}/genres`).then(response => response.json())
}
