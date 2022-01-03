describe('Search test cases', () => {

    it('Search with results', () => {
  
     cy.visit('http://automationpractice.com/index.php')
       .get('#search_query_top').click()
       .type('dress')
       .get('#searchbox > .btn').click()
       .get('.lighter').contains('"dress"')
    
  
    })
  })