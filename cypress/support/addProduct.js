Cypress.Commands.add('addProductPlp', () => {
    cy.fixture('addProduct').then((addProduct) => {
        cy.get(addProduct.buttonAddCartPlp).click()
        cy.get(addProduct.productAddedCart).should('contain','Product successfully added to your shopping cart')
        cy.get(addProduct.buttonProceedCheckOut).click()
        cy.get(addProduct.cartTitle).should('contain','Shopping-cart summary')
        cy.get(addProduct.buttonProceed).click()
        cy.get(addProduct.signAuth).should('contain','Authentication')
        cy.get(addProduct.navSummary).should('contain.text',' Summary').click()
        cy.get(addProduct.iconDelete).click()
        cy.get(addProduct.alertCartEmpty).should('contain.text', 'Your shopping cart is empty.')
    })
})