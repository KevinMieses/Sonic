describe("Search test cases", () => {

    before('', () => {
        cy.visit('https://www.youtube.com/')
    })
    
    after('', () => {
        cy.log('')
    })

    it("Get in YT",() => {
    cy.get('#search-input > #search').click()
      .get('#search-input > #search').type('Eladio carrion')
      .get('#search-icon-legacy').click()
      .get(':nth-child(3) > :nth-child(2) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click()
      .get('.ytp-play-button').click()
      .get(':nth-child(1) > .yt-simple-endpoint > yt-icon-button.style-scope > #button > .ytd-toggle-button-renderer').click()
      .get(':nth-child(3) > .yt-simple-endpoint > yt-icon-button.style-scope > #button > .ytd-button-renderer').click()
      .get('#copy-button > .yt-simple-endpoint > #button > #text').click()
    })
})