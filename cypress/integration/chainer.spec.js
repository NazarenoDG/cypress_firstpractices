/// <reference types='Cypress' />
describe('Escribir en busqueda varios strings',function(){
    it('Vamos a escribir y limpiar',function(){
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').clear().type('Hola')
    })

    var a = 1
    var b = 20
    it('Vamos a ver una igualdad', () => {
        expect(1==1, "Ambos terminos tienen que ser iguales y no lo son").to.equal(true)
    })
    it('Vamos a ver que no sea una igualdad', () => {
        expect(1==2).to.equal(false)
    })
    it('Vamos a ver que una resta este bien', () => {
        expect(1-1, "Esta resta tendria q dar 0 y no da eso").to.equal(15)
    })
    it('Vamos a ver que una resta NO este bien', () => {
        expect(1-1).to.not.equal(2)
    })
    it('Tiene que ser verdadero', () => {
        expect(2==2).to.be.true
    })
    it('Tiene que ser falso', () =>{
        expect(2==1).to.be.false
    })
    it('La variable existe', () => {
        expect(a).to.exist
    })
    it('La variable es menor a 10', () => {
        expect(a).to.be.lessThan(10)
    })
    it('La variable b es mayor a 10', () => {
        expect(b).to.be.greaterThan(10)
    })


})