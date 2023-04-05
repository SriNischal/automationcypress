class CheckboxPage {

    elements = {
        checkboxBtn: () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-1"),
        checkboxheader: () => cy.get(".main-header"),
        mainfoldercheckbox: () => cy.get("label[for = tree-node-home]"),
        result: () => cy.get("#result"),
        mainfolderexpand: () => cy.get("button[title='Toggle']"),
        subfoldercheckbox: () => cy.get("label[for = tree-node-desktop]"),

    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    checkboxheadervalidation(actualtext) {
        this.elements.checkboxheader().should("have.text", actualtext);
    }
    mainfoldercheckbox() {
        this.elements.mainfoldercheckbox().click();
    }
    mainfoldercheckresult(result) {
        this.elements.result().should('have.text', result);
    }
    mainfolderexpand() {
        this.elements.mainfolderexpand().click();
    }
    subfolderexpand() {
        this.elements.subfoldercheckbox().click();
    }
    mainfolderuncheckbox(){
        this.elements.mainfoldercheckbox().click();
        this.elements.subfoldercheckbox().click();
    }
    subfolderresult(result){
        this.elements.result().should('have.text', result);
    }
    
    
}
export default new CheckboxPage();