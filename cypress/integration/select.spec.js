describe('Select', function(){
    it('select',function(){
        cy.get('.search_query.form-control.ac_input').type('Hola') //Buscamos por clase
        cy.get('#search_query_top').type('Como te va') // Buscamos por id
        cy.get('[name="search_query"]').type('Me va muy bien') // Buscamos por cualquier otra propiedad
        cy.get('[placeholder="Search"]').clear() // por placeholder
    })
})