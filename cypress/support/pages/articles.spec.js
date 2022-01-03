class articlesPage{
    constructor(){
  
      this.banner = '.lighter'
    }
     verifyArticule = (article) =>{
     cy.get(this.banner).contains(article)
     }
  }
  export default new articlesPage()