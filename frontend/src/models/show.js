class Show {
  constructor(show) {
    this.show = show
    this.renderShowCards()
    //this.ATCListener()
  }
  static parseShows(shows){
    shows.forEach(show => new Show(show))
  }

  renderShowCards(){
    //deletes html elements
    let title = document.querySelector('#welcome-title')
    let subTit = document.querySelector('#welcome-subtitle')
    title.remove();
    subTit.remove();
    //adds html elements

    //render show cards
  }
}
