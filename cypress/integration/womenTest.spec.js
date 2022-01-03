describe('', () => {
    
 beforeEach('', () =>{ 

 cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')

 })
 
 it("Large Tops search", ()=> {

 cy.get('#layered_category_4').check()
   .get('#layered_id_attribute_group_3').check()
   .get('#layered_id_attribute_group_3').check()
   .get('#layered_category_4').uncheck()

 })

it('Order by Lowest first', () => {
 cy.get('#selectProductSort').select('Price: Lowest first')
})

it('Order by Highest first', () => { 
 cy.get('#selectProductSort').select('Price: Highest first')
})

it('Order by A to Z', () => {
  cy.get('#selectProductSort').select('Product Name: A to Z')
})

it('Order by Z to A', () => {
 cy.get('#selectProductSort').select('Product Name: Z to A')
})

it('Order by In stock', () => {
 cy.get('#selectProductSort').select('In stock')
})

it('Order by Reference: Lowest first', ()=> {
 cy.get('#selectProductSort').select('Reference: Lowest first')
})

it('Order by Reference: Highest first', () => {
 cy.get('#selectProductSort').select('Reference: Highest first')
})

})




