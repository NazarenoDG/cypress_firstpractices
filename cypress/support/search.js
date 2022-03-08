Cypress.Commands.add('search', (searchBar, searchResult) => {
    cy.fixture('search').then((search) => {
        cy.get(search.searchBar).type(searchBar)
        cy.get(search.searchButton).click()
        cy.get(search.searchResult).should('contain', searchResult)
    })
})