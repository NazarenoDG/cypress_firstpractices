class sortPage{
    constructor(){
        this.selectSort = '#selectProductSort';
    }
    sort = (s) => {
        cy.get(this.selectSort).select(s);
    }
}
export default new sortPage();