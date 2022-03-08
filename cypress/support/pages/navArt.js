class navArtPage {
    constructor(){
        this.art = '.sf-with-ul';
    }
    nav = (n) => {
        cy.get(this.art).first().click()
    }
}
export default new navArtPage();