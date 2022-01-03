describe("Search test cases",()=> {



    beforeEach('',() =>{
        cy.visit('https://www.vitalproteins.com/')
        /*cy.get('[class="klaviyo_close_modal klaviyo_header_close"]').first()
        .click()*/
    })

    afterEach('',() =>{
        cy.log('')  
    }) 

    it("Correct email incorrect password",()=>{
     cy.get(':nth-child(1) > a > .svg-inline--fa > path').click()
     //*cy.wait(3800)
     cy.get('headerIcons').click()
     cy.wait(3800)
     cy.get('[class="klaviyo_close_modal klaviyo_header_close"]').first()
        .click()
     cy.get('#login-placement > .btn').click()
     cy.get(':nth-child(1) > .large').type("Kevinmieses.2005@gmail.com")
     
     
     
     

     /*cy.get(':nth-child(2) > .large').type('1245')
     cy.get('#login-placement > .btn')
     cy.get('[class="btn action_button kapra"]').click()

      cy.get('.errors > ul > li')
.should('be.visible')
.should('have.text','Incorrect email or password.')*/


 })
   xit("Incorrect email correct password",()=>{
    
    cy.get(':nth-child(1) > a > .svg-inline--fa > path').click()
    cy.get(':nth-child(1) > .large').type("Karlamieses.gmail.com")
    cy.get('[class="klaviyo_close_modal klaviyo_header_close"]').first()
     .click()
    cy.get('#login-placement > .btn').click()
    cy.get('.modal-body > h2')
    .should('be.visible')
    .should('have.text','Oops!')
    cy.get('.modal-body > p')
    .should('be.visible')
    .should('have.css','color','rgb(94, 94, 94)')
    .should('have.text','Please enter a valid email.')
    cy.get('.modal-body > .btn')
    .should('be.visible')
    .should('have.css','color','rgb(255, 255, 255)')
    .should('have.text','Ok')

})
    xit("Correct email correct pasword",()=>{
    
    cy.get(':nth-child(1) > a > .svg-inline--fa > path').click()
    cy.get('[class="klaviyo_close_modal klaviyo_header_close"]').first()
     .click()
     cy.get(':nth-child(1) > .large').type("Kevinmieses.2005@gmail.com")
     cy.get('#login-placement > .btn').click()
     cy.get(':nth-child(2) > .large').type('kevinmieses')
     cy.get('#login-placement > .btn')
     cy.get('[class="btn action_button kapra"]').click()

    it.only('URL should be https://www.vitalproteins.com/account')
    cy.url().should('eq','https://www.vitalproteins.com/account')

})

})