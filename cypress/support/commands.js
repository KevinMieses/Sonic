// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkCSSAttrs', (kevin,NavItem) => {
    cy.get('#tabs-1--tab-'+[kevin])
    .should('be.visible')
    .should('have.text', NavItem)
    .should('have.css', 'font-family', '"Nunito Sans"')
    .should('have.css', 'color', 'rgba(255, 255, 255, 0.92)')
    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
})

Cypress.Commands.add('checkCSSAttrs2', (index,NavItem) => {
cy.get('#tabs-1--tab-'+[index])
             .click()
            .should('be.visible')
            .should('have.text', NavItem)
            .should('have.css', 'font-family', '"Nunito Sans"')
            .should('have.css', 'color', 'rgb(214, 216, 218)')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
})

