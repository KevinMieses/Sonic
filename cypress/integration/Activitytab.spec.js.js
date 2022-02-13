/// <reference types="cypress" />
describe ('Search elements',()=>{

before('',()=>{
    cy.visit('https://2aoj2-aaaaa-aaaad-qa4qq-cai.ic.fleek.co/')

})

it('Activity tab',()=>{  
       cy.get('#tabs-1--tab-3').click()

        cy.get('.css-22dskd')
          .should('be.visible')
          .should('have.text','Your Activity')

        cy.get('.css-1ppz6m1 > svg') 
                .should('be.visible')

        cy.get('.css-1imtb7y > .chakra-stack > .chakra-text')
        .should('be.visible')
        .should('have.text','Your transaction activity will appear here.')

        cy.get('.css-1imtb7y > .chakra-stack > .chakra-button') 
        .should('be.visible')
        .should('have.text','Install Plug')

       cy.get('.css-9xuvt2')
        .should('be.visible')
        .should('have.text','Sonic v1.1.0') 




    })

})