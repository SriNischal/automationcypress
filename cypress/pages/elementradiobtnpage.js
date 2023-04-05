class elementrdiobtnPage{
    elements ={
        radioBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-2"),
        radiobtnheader : () => cy.get(".main-header"),
        yesradiobtn : () => cy.get("#yesRadio"),
        impressivebtn : () => cy.get("#impressiveRadio"),
        btnmessage : () => cy.get(".text-success"),
        noradiobtn : () => cy.get("#noRadio"),
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    radiobtnheadervalidation(actualtext){
        this.elements.radiobtnheader().should("have.text", actualtext);
    }
    clickyesradiobtn(){
        this.elements.yesradiobtn().click({force: true});
    }
    yesradiobtnmessagevalidation(actualmesage){
        this.elements.btnmessage().should('have.text', actualmesage);
    }
    clickimpressiveradiobtn(){
        this.elements.impressivebtn().click({force: true});
    }
    impressiveradiobtnmessagevalidation(actualmesage){
        this.elements.btnmessage().should('have.text', actualmesage);
    }
    clicknoradiobtn(){
        this.elements.noradiobtn().should('be.disabled');
    }
}
export default new elementrdiobtnPage();