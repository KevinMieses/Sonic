describe('Search elements', () => {

    beforeEach('', () => {
        cy.visit("/")

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

    it('Validation of the pop up of liquidy tab', () => {

        cy.get('#tabs-1--tab-1').click()

        cy.get('.css-l0aeb3 > .chakra-button')
            .should('have.text', 'Create Position')

        cy.get('.css-l0aeb3 > .chakra-button').click()

        //Validacion boton de retroseso
        cy.get('.css-1mn89nx > svg')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')

        cy.get('.css-d24znl')
            .should('have.text', 'Add Liquidity')
        //Validacion del boton adjust the slippage
        cy.get('#menu-button-49 > svg')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
    })

    it('Validacion de la seleccion de los tokens en swap', () => {

        cy.contains('ICP').click()
        cy.get('.css-1485kjp > :nth-child(1)').click()

        cy.contains('ICP').click()
        cy.contains('XTC').click()

        cy.contains('XTC').click()
        cy.contains('WICP').click()

    })

    it('Validacion de los elementos que estan dentro de la ventana emergente del Swap tab', () => {

        cy.contains('ICP').click()

        cy.get('.chakra-heading')
            .should('have.text', 'Select Token')
        //Valida el signo de busqueda
        cy.get('.css-s6j6et > .chakra-image')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljg1OTQgMTYuNzM4M0wxMy42MDU1IDEyLjQ4NDRDMTMuNSAxMi40MTQxIDEzLjM5NDUgMTIuMzQzOCAxMy4yODkxIDEyLjM0MzhIMTIuODMyQzEzLjkyMTkgMTEuMDc4MSAxNC42MjUgOS4zOTA2MiAxNC42MjUgNy41NjI1QzE0LjYyNSAzLjU1NDY5IDExLjMyMDMgMC4yNSA3LjMxMjUgMC4yNUMzLjI2OTUzIDAuMjUgMCAzLjU1NDY5IDAgNy41NjI1QzAgMTEuNjA1NSAzLjI2OTUzIDE0Ljg3NSA3LjMxMjUgMTQuODc1QzkuMTQwNjIgMTQuODc1IDEwLjc5MyAxNC4yMDcgMTIuMDkzOCAxMy4xMTcyVjEzLjU3NDJDMTIuMDkzOCAxMy42Nzk3IDEyLjEyODkgMTMuNzg1MiAxMi4xOTkyIDEzLjg5MDZMMTYuNDUzMSAxOC4xNDQ1QzE2LjYyODkgMTguMzIwMyAxNi45MTAyIDE4LjMyMDMgMTcuMDUwOCAxOC4xNDQ1TDE3Ljg1OTQgMTcuMzM1OUMxOC4wMzUyIDE3LjE5NTMgMTguMDM1MiAxNi45MTQxIDE3Ljg1OTQgMTYuNzM4M1pNNy4zMTI1IDEzLjE4NzVDNC4xODM1OSAxMy4xODc1IDEuNjg3NSAxMC42OTE0IDEuNjg3NSA3LjU2MjVDMS42ODc1IDQuNDY4NzUgNC4xODM1OSAxLjkzNzUgNy4zMTI1IDEuOTM3NUMxMC40MDYyIDEuOTM3NSAxMi45Mzc1IDQuNDY4NzUgMTIuOTM3NSA3LjU2MjVDMTIuOTM3NSAxMC42OTE0IDEwLjQwNjIgMTMuMTg3NSA3LjMxMjUgMTMuMTg3NVoiIGZpbGw9IiM4ODhFOEYiLz4KPC9zdmc+Cg==')
            .should('be.visible')

        cy.get('.css-1mb7zhh')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Search by name or canister id')
        //Valida el signo de close
        cy.get('.chakra-modal__close-btn > .chakra-icon')
            .should('be.visible')

        cy.get('.css-5kn8fc > .chakra-stack > .css-0 > .css-oihbql > .chakra-text')
            .should('have.text', 'ICP')

        cy.get('.css-5kn8fc > .chakra-stack > .css-0 > .css-y8w2tl > .chakra-text')
            .should('have.text', 'Internet Computer Protocol')

        cy.get(':nth-child(3) > .chakra-stack > .css-0 > .css-oihbql > .chakra-text')
            .should('have.text', 'XTC')

        cy.get(':nth-child(3) > .chakra-stack > .css-0 > .css-y8w2tl > .chakra-text')
            .should('have.text', 'Cycles')

        cy.get(':nth-child(6) > .chakra-stack > .css-0 > .css-oihbql > .chakra-text')
            .should('have.text', 'WICP')

        cy.get('.chakra-modal__footer > .chakra-link')
            .should('have.text', 'Request Token (Soon)')

    })

    it('Validacion de las imagenes de los tokens en swap tab', () => { //

        cy.contains('ICP').click()

        cy.get('.css-5kn8fc > .chakra-stack > .css-cdkrf0 > .chakra-image')
            .should('be.visible')

        cy.get(':nth-child(3) > .chakra-stack > .css-cdkrf0 > .chakra-image')
          .should('be.visible')

        cy.contains('WICP').click()
        cy.get(':nth-child(6) > .chakra-stack > .css-cdkrf0 > .chakra-image')
          .should('be.visible')

    })

    it('Validacion de la ventana emergente Select token', () => {

        cy.get('.css-1df7sj8 > .css-1ki54i > .css-nftatg > .css-8ljx6d > .chakra-button').click()


        cy.get('.chakra-heading')
            .should('have.text', 'Select Token')
        //Valida el signo de busqueda
        cy.get('.css-s6j6et > .chakra-image')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljg1OTQgMTYuNzM4M0wxMy42MDU1IDEyLjQ4NDRDMTMuNSAxMi40MTQxIDEzLjM5NDUgMTIuMzQzOCAxMy4yODkxIDEyLjM0MzhIMTIuODMyQzEzLjkyMTkgMTEuMDc4MSAxNC42MjUgOS4zOTA2MiAxNC42MjUgNy41NjI1QzE0LjYyNSAzLjU1NDY5IDExLjMyMDMgMC4yNSA3LjMxMjUgMC4yNUMzLjI2OTUzIDAuMjUgMCAzLjU1NDY5IDAgNy41NjI1QzAgMTEuNjA1NSAzLjI2OTUzIDE0Ljg3NSA3LjMxMjUgMTQuODc1QzkuMTQwNjIgMTQuODc1IDEwLjc5MyAxNC4yMDcgMTIuMDkzOCAxMy4xMTcyVjEzLjU3NDJDMTIuMDkzOCAxMy42Nzk3IDEyLjEyODkgMTMuNzg1MiAxMi4xOTkyIDEzLjg5MDZMMTYuNDUzMSAxOC4xNDQ1QzE2LjYyODkgMTguMzIwMyAxNi45MTAyIDE4LjMyMDMgMTcuMDUwOCAxOC4xNDQ1TDE3Ljg1OTQgMTcuMzM1OUMxOC4wMzUyIDE3LjE5NTMgMTguMDM1MiAxNi45MTQxIDE3Ljg1OTQgMTYuNzM4M1pNNy4zMTI1IDEzLjE4NzVDNC4xODM1OSAxMy4xODc1IDEuNjg3NSAxMC42OTE0IDEuNjg3NSA3LjU2MjVDMS42ODc1IDQuNDY4NzUgNC4xODM1OSAxLjkzNzUgNy4zMTI1IDEuOTM3NUMxMC40MDYyIDEuOTM3NSAxMi45Mzc1IDQuNDY4NzUgMTIuOTM3NSA3LjU2MjVDMTIuOTM3NSAxMC42OTE0IDEwLjQwNjIgMTMuMTg3NSA3LjMxMjUgMTMuMTg3NVoiIGZpbGw9IiM4ODhFOEYiLz4KPC9zdmc+Cg==')
            .should('be.visible')

        cy.get('.css-1mb7zhh')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Search by name or canister id')
        //Valida el signo de close
        cy.get('.chakra-modal__close-btn > .chakra-icon')
            .should('be.visible')

        cy.contains('WICP').click()
        cy.get('.css-1df7sj8 > .css-1ki54i > .css-nftatg > .css-8ljx6d > .chakra-button').click()

        cy.contains('XTC').click()


    })
})


