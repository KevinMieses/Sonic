    import indexPage from '../support/pages/index.spec'
    import articlesPage from '../support/pages/articles.spec'

    describe("Search test cases", () => {

        beforeEach('', () => {
            cy.visit('http://automationpractice.com/index.php')
        })
        
        afterEach('', () => {
            cy.log('Ejecutando todas las postcondiciones a las pruebas')
        })

        it("Search dresses",() => {
        indexPage.search('dress')
        //*articlesPage.verifyArticle('dress')
        
        
        })

    it('Search hats', () => {
        indexPage.search('"hat"')
        //*articlesPage.verifyArticle('"hat"')
        

    })

    })


