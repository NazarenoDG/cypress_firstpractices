/// <reference types='Cypress' />

import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';
import navArtPage from '../support/pages/navArt';
import sortPage from '../support/pages/sort';

describe('Search test cases',() =>{
    before(() => {
        cy.log('Ejecutando precondiciones a las pruebas')
    })
    after(() => {
        cy.log('Ejecutando todas las post condiciones a las pruebas')
    })
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    afterEach(() => {
        cy.log('Poniendo datos en su estado original')
    })

    it('Search dress',() => {
        indexPage.search('dress')
        //cy.get('#search_query_top').type('dress')
        //cy.get('#searchbox > .btn').click()
        //cy.get('.lighter').contains('dress') 
        articlesPage.verifyArticle('"dress"')
    })
    it('Search hats',() => {
        indexPage.search('hat')
        //cy.get('#search_query_top').type('hat')
        //cy.get('#searchbox > .btn').click()
        //cy.get('.lighter').contains('hat')
        articlesPage.verifyArticle('"hat"')
    })
    it('Checkbox in Women', () => {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.get('#layered_category_4').check()
        cy.get('#layered_id_attribute_group_3').check()
        cy.get('#layered_id_attribute_group_3').uncheck()
    })
    it('Order by Highest Price', () => {
        navArtPage.nav()
        //cy.get('.sf-with-ul').first().click()
        //cy.get('#selectProductSort').select("Price: Highest first")
        sortPage.sort('Price: Highest first')
        })
    it('Order by In Stock ', () => {
        navArtPage.nav()
        //cy.get('.sf-with-ul').first().click()
        //cy.get('#selectProductSort').select('In stock')
        sortPage.sort('In stock')
    })
    it('Go to Dresses Section ', () => {
        cy.get('.sf-with-ul').eq(3).click()
    })
})