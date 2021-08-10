class Show {
  constructor(show) {
    this.show = show
    this.renderShowCards()
    this.addToCartListenerTix()
    this.addToCartListenerPanel()
  }

  static parseShows(shows){
    function prepareDom() {
    if (document.getElementById("cards") == undefined) {
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

  static checkoutListener(){
    let checkout = document.getElementById('checkout')
      checkout.addEventListener('click', () => {
        let content = document.getElementById('cart-content')
          content.innerHTML = ""
          alert("Congratulations, the order was successful! Enjoy your show.")
    });
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

  addToCartListenerTix = () => {
    let btn = document.querySelector(`#atc-${this.show.id}`)
      btn.addEventListener("click", this.reduceTicketsLeft)
  }

  addToCartListenerPanel = () => {
    let btn = document.querySelector(`#atc-${this.show.id}`)
      btn.addEventListener("click", this.renderShowToCart)
  }

  reduceTicketsLeft = () => {
    let showID = this.show.id
    let genreID = this.show.genre_id
      apiCall.updateTicketsRemaining(genreID, showID).then(show => this.reRenderShowTix(show))
  }

  reRenderShowTix(show){
    this.show = show
    let tl = document.getElementById(`tl-${this.show.id}`)
    tl.innerHTML = ""
    tl.innerHTML = this.show.tickets_left
  }

  renderShowToCart = () => {
    if ( document.getElementById(`num-tix-${this.show.id}`) == undefined) {
      let content = document.getElementById('cart-content')
      let item = document.createElement('a')
        item.className = "panel-block is-block"
        item.id = `cart-${this.show.id}`
        item.innerHTML = this.panelCardHTML()
        content.append(item)
    } else {
      let count = 1
      let numTix = document.getElementById(`num-tix-${this.show.id}`)
        count++
        numTix.innerHTML = `Tickets: ${count}`
    }
  }

  static panelHTML(){
    return `
    <p class="panel-heading" id="heading">
      <span class="icon is-small">
        <img src="https://img.icons8.com/material/48/000000/shopping-cart--v1.png"/>
      </span>
      Shopping Cart
    </p>
    <div id="cart-content">

    </div>
    <a class="panel-block" id="checkout-panel">
      <button class="button is-primary" id="checkout">Checkout</button>
    </a>
      `
  }

  panelCardHTML(){
    return `
    <div class="columns">
      <div class="column">
        <figure class="image is-32x32">
          <img src="${this.show.image}"
        </figure>
      </div>
      <span class="column">
        <a class="header">${this.show.artist}</a>
      </span>
      <span class="column has-text-right" id="num-tix-${this.show.id}">Tickets: 1</span>
    </div>
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
