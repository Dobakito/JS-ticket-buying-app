class Show {
  constructor(show) {
    this.show = show
    this.renderShowCards()
    //this.ATCListener()
  }
  static parseShows(shows){
    shows.forEach(show => new Show(show))
  }

  // renderShopCart(){}

  prepareDOM(){
    let section = document.querySelector('#main')
    let container = document.querySelector('#welcome')
    let columns
    let cardColumn
      if (container) {
        container.remove()
        columns = document.createElement('div')
        columns.className = "columns"
        cardColumn = document.createElement('div')
        cardColumn.className = "column is-two-thirds"
        cardColumn.id = "removable"
        section.append('columns')
        columns.append('cardColumn')
    } else {
        columns = document.querySelector('.columns')
        cardColumn = document.querySelector('#removable')
        cardColumn.remove()
        newCards = document.createElement('div')
        newCards.className = "column is-two-thirds"
        newCards.id = "removable"
        columns.append('newCards')
    }
  }

  renderShowCards(){
    prepareDOM();
    // renderShopCart()
    



  }
}
