class Genre {
  constructor(genre) {
    this.genre = genre
    this.renderBtn()
    this.addClickDectection()
  }
  static getGenres(){
    apiCall.fetchGenres().then(genres => genres.forEach(genre => new Genre(genre))
    )
  }
  renderBtn(){
    let container = document.querySelector('.buttons');
    let button = document.createElement('a')
    button.className = "button is-primary"
    button.id = this.genre.id
    button.innerText = this.genre.name
    this.button = button
    container.append(button)
  }

  addClickDectection = () => {
   this.button.addEventListener("click", this.clickAction)
  }

  clickAction = () => {
    let id = this.genre.id
    apiCall.fetchShowsByGenre(id).then(shows => Show.parseShows(shows))
  }
}



// TODO: render genre buttons, add click eventlisteners
