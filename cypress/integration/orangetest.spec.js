/// <reference types='Cypress' />
beforeEach(() => {
    cy.fixture('datos_pruebao.json').then (function (datos){
        this.datos_pruebao=datos
        cy.visit(this.datos_pruebao.url)

    })
})

describe("Prueba de login", function(){
    it("Validacion de login",function(){
        cy.get('#divLogo > img').should('be.visible')
        cy.get('#frmLogin').should('be.visible')
        cy.get('#footer > :nth-child(1)').contains('OrangeHRM 4.9')
        cy.get('#txtUsername').click().type(this.datos_pruebao.username)
        cy.get('#txtPassword').click().type(this.datos_pruebao.password)
        cy.get('#btnLogin').click()
    })
    it("Validacion adicionar usuario",function(){
        cy.get('#txtUsername').click().type(this.datos_pruebao.username)
        cy.get('#txtPassword').click().type(this.datos_pruebao.password)
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.get('#btnAdd').click()
        cy.get('#UserHeading').contains('Add User')
        cy.get('#systemUser_employeeName_empName').first()
        cy.get('#systemUser_userName').type('texto')
        cy.get('#systemUser_password').type('asdasd123123')
        cy.get('#systemUser_confirmPassword').type('asdasd123123')
    })
})

describe('Prueba de navegacion principal',function(){
    it('Validacion prueba de navegacion',function(){
        cy.get('#txtUsername').click().type(this.datos_pruebao.username)
        cy.get('#txtPassword').click().type(this.datos_pruebao.password)
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule >').click()
        cy.get('#systemUser-information > .inner').should('be.visible')
        cy.get('#menu_pim_viewPimModule').click()
        cy.get('#employee-information > .inner').should('be.visible')
        cy.get('#menu_leave_viewLeaveModule').click()
        cy.get('#leave-list-search > .inner').should('be.visible')
        cy.get('#menu_time_viewTimeModule').click()
        cy.get(':nth-child(1) > .inner').should('be.visible')
        cy.get('#menu_recruitment_viewRecruitmentModule').click()
        cy.get('#srchCandidates > .inner').should('be.visible')
        cy.get('#menu_pim_viewMyDetails').click()
        cy.get('#pdMainContainer > .inner').should('be.visible')
        cy.get('#menu__Performance').click()
        cy.get('#menu_dashboard_index').click()
        cy.get('#panel_wrapper_0').should('be.visible')
        cy.get('#menu_directory_viewDirectory').click()
        cy.get('.searchForm > .inner').should('be.visible')
        cy.get(':nth-child(10) > .firstLevelMenu').click()
        cy.get('h1').contains('Purge Employee Records')
        cy.get('#menu_buzz_viewBuzz').click()
        cy.get('#frmPublishPost > fieldset > ol').should('be.visible')
    })
})

