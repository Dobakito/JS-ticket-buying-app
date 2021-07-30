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
  let navbar = document.querySelector('.navbar-start');
  let button = document.createElement('a')
  button.className = button
  button.id = this.genre.id
  button.innerText = this.genre.name
  this.button = button
  navbar.append(button)
  }

  addClickDectection(){
  this.button.addEventListener("click", clickAction())
  }

  clickAction(){
    const id = this.genre.id
    apiCall.fetchShowsByGenre(id).then(shows => console.log(shows))
  }
}



// TODO: render genre buttons, add click eventlisteners
