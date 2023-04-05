class elementPage{
    elements ={
        elementBtn : () => cy.get(":nth-child(1) > .group-header > .header-wrapper"),
        elementheader : () => cy.get(".main-header"),
        elementtext : () => cy.get(".col-md-6"),
    }
    clickelementbtn(){
        this.elements.elementBtn().click();
    }
    elementheadervalidation(actualtext){
        this.elements.elementheader().should("have.text", actualtext);
    }
    elementtextvalidation(actualtext){
        this.elements.elementtext().should("have.text",actualtext);
    }
}
export default new elementPage();