/// <reference types="cypress" />
describe('Search elements', () => {

    beforeEach('', () => {
        cy.visit('https://2aoj2-aaaaa-aaaad-qa4qq-cai.ic.fleek.co/')

    })

    it('Sonic Logo Validation', () => {

        cy.get('[class="chakra-icon css-17fwxks"]')
            .should('be.visible')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
    })

    it('Validation of navigation items', () => {

        cy.checkCSSAttrs2(0, "Swap")

        cy.checkCSSAttrs(1, "Liquidity")

        cy.checkCSSAttrs(2, "Assets")

        cy.checkCSSAttrs(3, "Activity")

    })

    it('Install plug button validation', () => {
        cy.get('.css-vvpvr5')
            .should('be.visible')
            .should('have.text', 'Install Plug')
            .should('have.css', 'font-family', '"Nunito Sans"')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
            .should('have.css', 'background-color', 'rgb(11, 13, 15)')

        cy.get('.chakra-button__icon > svg')
            .should('be.visible')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-button-9').click()
            .should('be.visible')

        cy.get('#menu-button-9 > svg')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-button-9').click()

    })

    it('Validation of css elements of navigation item', () => {

        cy.checkCSSAttrs2(1, "Liquidity")

        cy.checkCSSAttrs2(2, "Assets")

        cy.checkCSSAttrs2(3, "Activity")

    })

    it('Validation of the burger menu', () => {

        cy.get('#menu-button-9').click()

        cy.get('#menu-list-9-menuitem-2')
            .should('have.text', 'Light mode')
        //*Valida la luna
        cy.get('[class="chakra-menu__icon"]')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
        //*Aplica cambio de modo
        cy.get('#menu-list-9-menuitem-2').click()

        //*Abre el menu burguer 
        cy.get('#menu-button-9').click()

        //*Valida el sol
        cy.get('[class="chakra-menu__icon"]')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-list-9-menuitem-2')
            .should('have.text', 'Dark mode')
        //*Valida logo de Twitter
        cy.get('[class="chakra-menu__icon"]')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-list-9-menuitem-3')
            .should('have.text', 'Twitter')
        //*Valida el logo de Discord
        cy.get('[class="chakra-menu__icon"]')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-list-9-menuitem-4')
            .should('have.text', 'Discord')
        //*Valida el logo de Medium
        cy.get('[class="chakra-menu__icon"]')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-list-9-menuitem-5')
            .should('have.text', 'Medium')
        //*Valida el logo de Documentation
        cy.get('[class="chakra-menu__icon"]')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-list-9-menuitem-6')
            .should('have.text', 'Documentation')
        //*Valida el logo de API
        cy.get('[class="chakra-menu__icon"]')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('#menu-list-9-menuitem-7')
            .should('have.text', 'API')
    })
})