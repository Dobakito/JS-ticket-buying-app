class Show {
  constructor(show) {
    this.show = show
    this.renderShowCards()
    this.addToCartListener()
  }

  static parseShows(shows){
    function createCards() {
      let columns = document.getElementById("cards")
      columns.className = "columns"
      columns.innerHTML = ""
      let newCardColumn = document.createElement('div')
      newCardColumn.className = "column is-half"
      newCardColumn.id = "card-container"
      columns.append(newCardColumn)
    };
    createCards()
    shows.forEach(show => new Show(show))
    };

  renderShowCards(){
    let cardColumn = document.getElementById('card-container')
    let card = document.createElement('div')
    card.className = "card mb-4"
    card.id = this.show.id
    card.innerHTML = this.renderCardHTML()
    cardColumn.append(card)
  }


  renderCardHTML(){
    return `
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${this.show.image}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${this.show.artist}</p>
        <p class="subtitle is-6">${this.show.venue}</p>
      </div>
    </div>
    <div class="content">
    <p class="heading">Date</p>
    <time datetime="${this.show.date}">${this.show.date}</time>
    <p class="heading">Tickets Remaining</p>
    <p class="subitle" id="tl-${this.show.id}">${this.show.tickets_left}</p>
      <br>
       <button class="button is-primary" id="atc-${this.show.id}" ${this.show.tickets_left < 1 ? "disabled" : ""}>${this.show.tickets_left < 1 ? "Sold Out" : "Add To Cart"}</button>
    </div>
  </div>

    `
  }

  addToCartListener = () => {
    let btn = document.querySelector(`#atc-${this.show.id}`)
    btn.addEventListener("click", this.reduceTicketsLeft)
  }

  reRenderShowTix(show){
    this.show = show
    let tl = document.getElementById(`tl-${this.show.id}`)
    tl.innerHTML = ""
    tl.innerHTML = this.show.tickets_left
  }

  reduceTicketsLeft = () => {
    let showID = this.show.id
    let genreID = this.show.genre_id
    apiCall.updateTicketsRemaining(genreID, showID).then(show => this.reRenderShowTix(show))
  }

  isSoldOut(){this.show.tickets_left < 1 ? true : false}
  //<button class="button is-primary" id="atc-${this.show.id}" ${this.show.tickets_left < 1 ? "disabled" : ""}>${this.show.tickets_left < 1 ? "Sold Out" : "Add To Cart"}</button>

}
