class Show {
  constructor(show) {
    this.show = show
    this.array
    this.renderShowCardes()
    this.addToCartListener()
  }

  static parseShows(shows){
      let columns = document.querySelector("#cards")
        this.columns = columns
        this.columns.className = "columns"
        this.columns.innerHTML = ""
        let newCardColumn = document.createElement('div')
        newCardColumn.className = "column is-half"
        newCardColumn.id = "card-container"
        this.columns.append(newCardColumn)

      shows.forEach(show => new Show(show))
    };

  renderShowCardes(){
    let cardColumn = document.getElementById('card-container')
    let card = document.createElement('div')
    card.className = "card"
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
    <br>
    <p class="heading">Tickets Remaining</p>
    <p class="subitle">${this.show.tickets_left}</p>
      <br>
       <button class="button is-primary" id="atc-${this.show.id}" ${this.isSoldOut() ? "disabled" : ""}>${this.isSoldOut() ? "Sold Out" : "Add To Cart"}</button>
    </div>
  </div>
    `
  }



  addToCartListener = () => {
    let btn = document.querySelector(`#atc-${this.show.id}`)
    btn.addEventListener("click", this.reduceTicketsLeft)
  }


  reduceTicketsLeft = () => {
    let showID = this.show.id
    let genreID = this.show.genre_id
    apiCall.updateTicketsRemaining(genreID, showID).then(console.log(data))
  }

  isSoldOut(){this.show.tickets_left < 1 ? true : false}

}
