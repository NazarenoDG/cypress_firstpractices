/// <reference types='Cypress' />

describe('Search product', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('search hat', () => {
        cy.search('hat','hat')
        cy.fixture('search').then((search)=>{
        })  
    })
    it('search dress', () => {
        cy.search('dress','dress')
        cy.fixture('search').then((search)=>{
        })  
    })

})

describe('Login', () => {
    beforeEach(()=> {
        cy.visit('http://automationpractice.com/index.php')
    })
    it('Login with incorrect email', () => {
        cy.login('something','other')
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address')
        })
    })
    it('Login with Authentication failed', () => {
        cy.login('nazareno@gmail.com','asdasd123123')
        cy.fixture('login').then((login) => {
            cy.get(login.incorrectLoginBanner).should('contain','Authentication failed')
        })
    })
})

describe('Cart', () => {
    beforeEach(()=> {
        cy.visit('http://automationpractice.com/index.php')
    })
   it.only('Add product to card from PLP', () => {
        cy.addProductPlp()
        cy.fixture('addProduct').then((addProduct)=>{
        })  
   })
})