/// <reference types='Cypress' />
beforeEach(() => {
    cy.fixture('datos_prueba.json').then (function (datos){
        this.datos_prueba=datos
        cy.visit(this.datos_prueba.url)
    })
})


describe('Pruebas pagina de inicio', function (){
    it('Validacion encabezado superior', function(){

        //cy.get('Selector').should('be.visible')
        //should = que se va a hacer con ese selector
        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom > h4').contains('Online Banking')   
    })
    it('Validacion de columnas',function(){
        cy.get('#online_banking_features > :nth-child(1) > h4').should('be.visible')
        cy.get('#account_activity_link').should('be.visible')
        cy.get('#transfer_funds_link').should('be.visible')
        cy.get('#money_map_link').should('be.visible')
    })
    it('Validacion footer',function(){
        
    })
})

describe('Prueba E2E Transferencia de fondos',function(){
    it('Prueba 1 Transferencia de fondos de ahorros a t. de credito',function(){
        cy.get('#signin_button').click()
        cy.get('#user_login').type(this.datos_prueba.username)
        cy.get('#user_password').type(this.datos_prueba.password)
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_toAccountId').select(4)
        cy.get('#tf_amount').type(500)
        cy.get('#tf_description').type('Prueba de transferencia de ahorros a t.credito')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text','You successfully submitted your transaction.')
        cy.get('.board-content').should('be.visible')
    })
    it('Prueba 2 Transferencia de fondos a broke ', function(){
        cy.get('#signin_button').click()
        cy.get('#user_login').type(this.datos_prueba.username)
        cy.get('#user_password').type(this.datos_prueba.password)
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_toAccountId').select(5)
        cy.get('#tf_amount').type(100)  
        cy.get('#tf_description').type('Prueba de transferencia de ahorros a brokerage')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text','You successfully submitted your transaction.')
        cy.get('.board-content').should('be.visible')
    })
    it('Prueba 3 Transferencia de fondos a prestamo', function(){
        cy.get('#signin_button').contains('Signin').click()
        cy.get('#user_login').type(this.datos_prueba.username)
        cy.get('#user_password').type(this.datos_prueba.password)
        cy.get('.btn').contains('Sign in').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('.board-header').contains('Transfer Money & Make Payments')
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_toAccountId').select(3)
        cy.get('#tf_amount').type(50)  
        cy.get('#tf_description').type('Prueba de transferencia de ahorros a prestamo')
        cy.get('#btn_submit').contains('Continue').click()
        cy.get('#btn_submit').contains('Submit').click()
        cy.get('.alert').should('contain.text','You successfully submitted your transaction.')
        cy.get('.board-content').should('be.visible')
    })
})

