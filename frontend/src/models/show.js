class Show {
  static section = document.querySelector('#main')
  static columns = document.querySelector('#boxes')
  static boxColumn = document.querySelector('.column is-full')

  constructor(show) {
    this.show = show
    this.renderShowBoxes()
    this.addToCartListener()
  }

  static parseShows(shows){
    function prepareDOM(){
        this.columns.className = "columns"
        this.columns.innerHTML = ""
        let newBoxColumn = document.createElement('div')
        newBoxColumn.className = "column is-full"
        this.columns.append(newBoxColumn)
      };
      shows.forEach(show => new Show(show))
    };

  isSoldOut(){this.show.tickets_left < 1 ? true : false}

  renderShowBox(){
    let box = document.createElement('div')
    box.className = "box"
    box.id = this.show.id
    this.box = box
    box.innerHTML = this.renderBoxHTML();
    this.boxColumn.append(box)
  }

  renderBoxHTML(){
    return `
      <div class="media-content">
        <div class="content">
        <p>
          <strong>${this.show.artist}</strong>
          <br>
          <p class="subtitle">${this.show.venue}</p>
        </p>
    <article class="media">
      <div class="media">
        <figure class="image is-5by4">
          <img src="${this.show.image}" alt="Image">
        </figure>
      </div>
    </article>
      <nav class="level">
      <div class="level-item">
        <div>
        <p class="heading">Tickets Remaining</p>
        <p class="subitle" id="tl-${this.show.id}">${this.show.tickets_left}</p>
        </div>
      </div>
        <div class="level-item">
          <div>
            <button class="button is-primary" id="atc-${this.show.id}" ${this.isSoldOut() ? "disabled" : ""}>${this.isSoldOut() ? "Sold Out" : "Add To Cart"}</button>
          </div>
        </div>
      </nav>
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
    let newTicketsLeft = this.show.tickets_left - 1
    apiCall.updateTicketsRemaining(genreID, showID, newTicketsLeft).then(updatedShow => console.log(updatedShow))
  }

  updateTicketsLeft(updatedShow){
    this.show = updatedShow
    let tl = document.querySelector(`#tl-${this.show.id}`)
    tl.innerText = this.show.tickets_left
  }

}
