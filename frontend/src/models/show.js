class Show {
  constructor(show) {
    this.show = show
    this.renderShowCards()
    this.addToCartListener()
  }

  static parseShows(shows){
    function prepareDom() {
    if (document.getElementById("cards") === undefined) {
      let column1 = document.getElementById("card-container-1")
      let column2 = document.getElementById("card-container-2")
      column1.innerHTML = ""
      column2.innerHTML = ""
    } else {
      let spacer = document.getElementById('spacer')
      spacer.remove()
      let column1 = document.getElementById("cards")
      column1.innerHTML = ""
      column1.id = "card-container-1"
      column1.className = "column is-one-third"
      let column2 = document.createElement('div')
      column2.className = "column is-one-third"
      column2.id = "card-container-2"
      column1.after(column2)
      let cartColumn = document.getElementById('cart-column')
      cartColumn.className = "column is-one-third"
      }
    };
    prepareDom()
    shows.forEach(show => new Show(show))
  };

  static renderCartPanel(){
    let column3 = document.getElementById("cart-column")
    let panel = document.createElement('article')
    panel.className = "panel is-primary"
    panel.innerHTML = this.panelHTML()
    column3.append(panel)
  }

  renderShowCards(){
    let column1 = document.getElementById('card-container-1')
    let column2 = document.getElementById('card-container-2')
    let card = document.createElement('div')
    this.card = card
    card.className = "card mb-4"
    card.id = this.show.id
    card.innerHTML = this.renderCardHTML()
    if (this.show.id % 2 == 0) {
      column1.append(this.card)
    } else {
      column2.append(this.card)
    }
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

  addShowToCartPanel(){

  }

  static panelHTML(){
    return `
    <p class="panel-heading" id="heading">
      <span class="icon is-small">
        <img src="https://img.icons8.com/material/48/000000/shopping-cart--v1.png"/>
      </span>
      Shopping Cart
    </p>
    <a class="panel-block" id="checkout-panel">
      <button class="button is-primary" id="checkout">Checkout</button>
    </a>
      `
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
    </div>
    <div class="card-footer">
      <div class="card-footer-item">
       <button class="button is-primary" id="atc-${this.show.id}" ${this.show.tickets_left < 1 ? "disabled" : ""}>${this.show.tickets_left < 1 ? "Sold Out" : "Add To Cart"}</button>
      </div>
    </div>
  </div>

    `
  }
}
