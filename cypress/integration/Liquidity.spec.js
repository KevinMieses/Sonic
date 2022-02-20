/// <reference types="cypress" />
describe('Search elements', () => {

  before('', () => {
    cy.visit('https://2aoj2-aaaaa-aaaad-qa4qq-cai.ic.fleek.co/')

  })

  it('Liquidity tab', () => {
    cy.get('#tabs-1--tab-1').click()

    cy.get('.css-1oygcxo')
      .should('be.visible')
      .should('have.text', 'Liquidity Provider Rewards')
      .should('have.css', 'font-family', '"Nunito Sans"')
      .should('have.css', 'color', 'rgb(240, 242, 244)')

    cy.get('.css-9svypg > .chakra-text')
      .should('be.visible')
      .should('have.text', 'Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity. If you want to learn review our documentation.')
      .should('have.css', 'font-family', '"Nunito Sans"')
      .should('have.css', 'color', 'rgb(136, 142, 143)')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

    cy.get('.css-22dskd')
      .should('be.visible')
      .should('have.text', 'Your Liquidity Positions')
      .should('have.css', 'font-family', '"Nunito Sans"')
      .should('have.css', 'color', 'rgb(240, 242, 244)')

    cy.get('.css-l0aeb3 > .chakra-button')
      .should('be.visible')
      .should('have.text', 'Create Position')
      .should('have.css', 'font-family', '"Nunito Sans"')
      .should('have.css', 'color', 'rgb(240, 242, 244)')

    cy.get('.css-1ppz6m1 > svg')
      .should('be.visible')
      .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

    cy.get('.css-1imtb7y > .chakra-stack > .chakra-text')
      .should('be.visible')
      .should('have.text', 'Your liquidity positions will appear here.')
      .should('have.css', 'font-family', '"Nunito Sans"')
      .should('have.css', 'color', 'rgb(104, 114, 125)')

    cy.get('.css-1imtb7y > .chakra-stack > .chakra-button')
      .should('be.visible')
      .should('have.text', 'Install Plug')
      .should('have.css', 'font-family', '"Nunito Sans"')
      .should('have.css', 'color', 'rgb(104, 114, 125)')

    cy.get('.css-9xuvt2')
      .should('be.visible')
      .should('have.text', 'Sonic v1.1.0')
      .should('have.css', 'font-family', '"Nunito Sans"')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.92)')
  })
 })