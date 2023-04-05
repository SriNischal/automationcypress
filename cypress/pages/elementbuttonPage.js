class elementbuttonPage{
    elements ={
        button : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-4"),
        buttonheader : () => cy.get(".main-header"),
        doubleclickbtn : () => cy.get("#doubleClickBtn"),
        rightclickbtn : () => cy.get("#rightClickBtn"),
        clickmebtn : () => cy.get(".col-md-6 > :nth-child(2) > :nth-child(3) button"),
        doubleclickmessage : () => cy.get("#doubleClickMessage"),
        rightclickmessage : () => cy.get("#rightClickMessage"),
        clickmemessage : () => cy.get("#dynamicClickMessage"),
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    buttonheadervalidation(actualtext){
        this.elements.buttonheader().should("have.text", actualtext);
    }
    clickdblclickbtn(){
        this.elements.doubleclickbtn().dblclick();
    }
    clickrightclickbtn(){
        this.elements.rightclickbtn().rightclick();
    }
    clickclickmebtn(){
        this.elements.clickmebtn().click();
    }
    doubleclickmessagevalidation(actualmesage){
        this.elements.doubleclickmessage().should('have.text', actualmesage);
    }
    rightclickmessagevalidation(actualmesage){
        this.elements.rightclickmessage().should('have.text', actualmesage);
    }
    clickmemessage(actualmesage){
        this.elements.clickmemessage().should('have.text', actualmesage);
    }
}
export default new elementbuttonPage();