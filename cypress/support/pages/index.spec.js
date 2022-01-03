class indexPage{
    constructor(){
    this.searchInput = '#search_query_top'
    this.searchButton = '#searchbox > .btn'

      //* En el constructor se ponen las caracterisiticas que tiene una clase  
    }

 search = (element) => {

  cy.get(this.searchInput).type(element)
  cy.get(this.searchButton).click()

 }

}
export default new indexPage()