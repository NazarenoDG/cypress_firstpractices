/// <reference types='Cypress' />

describe('Sesion de retry-ability', () => {
    beforeEach(function() {
        cy.visit('https://example.cypress.io/todo')
        cy.get('.new-todo')
        .type('todo-A{enter}')
        .type('todo-B{enter}') 
    })
    it('debe crear dos items', () => {
        cy.get('.todo-list li')
        .should('have.length',4)
    })

    it('debe contener el texto indicado', () => {
        cy.get('.todo-list li')
        .should('have.length', 4)
        .and($li => {
            expect($li.get(0).textContent, 'first-item').to.equal('Pay electric bill')
            expect($li.get(1).textContent, 'second-item').to.equal('Walk the dog')
            expect($li.get(2).textContent, 'third-item').to.equal('todo-A')
            expect($li.get(3).textContent, 'fourth-item').to.equal('todo-B')
        })
    })
})