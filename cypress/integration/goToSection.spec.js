describe('Go to different section', ()=> {

beforeEach('', () => {

 cy.visit('http://automationpractice.com/index.php')

})

it('Go to Women section', () =>{
  cy.get('[class="sf-with-ul"]').eq(0).click()
/*.eq(0) es lo equivalente a .first
Se usa eq para organizar los elemntos que  tienen la misma forma de nombrarse, pero diferentes funciones*/
})

it('Go to Dresses section', () => {
 cy.get('[class="sf-with-ul"]').eq(3).click()
})

})