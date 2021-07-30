class Genre {
  constructor(name) {
    this.name = name
  }
  static getGenres(){
    apiCall.fetchGenres().then(genres => console.log(genres))
  }
  renderBtn(){
  let navbar = document.querySelector('.navbar-start');
  let button = document.createElement('a')
  button.className = button
  button.innerText = this.genre.name
  navbar.append(button)
  }
}



// TODO: render genre buttons, add click eventlisteners
