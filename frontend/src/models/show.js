class Show {
  static section = document.querySelector('#main')
  static columns = document.querySelector('#boxs')
  static boxColumn = document.querySelector('.column is-full')

  constructor(show) {
    this.show = show
    this.renderShowBoxes()
    //this.ATCListener()
  }

  static parseShows(shows){
    let prepareDOM = () => {
        this.columns.className = "columns"
        this.columns.innerHTML = ""
        let newBoxColumn = document.createElement('div')
        newBoxColumn.className = "column is-full"
        this.columns.append(newBoxColumn)
      };
      shows.forEach(show => new Show(show))
    };

  renderShowBox(){
    let box = document.createElement('div')
    box.className = "box"
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
        <p class="subitle">${this.show.tickets_left}</p>
        </div>
      </div>
        <div class="level-item">
          <div>
            <button class="button is-primary" id="atc">Add To Cart</button>
          </div>
        </div>
      </nav>
    </div>
    </div>
    `
  }

  addToCartListener = () => {
    this.box.addEventListener("click", e => this.reduceTicketsLeft(e))
  }


  reduceTicketsLeft = (e) => {
    
  }
}
