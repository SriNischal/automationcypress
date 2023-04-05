class elementlinksPage{
    elements ={
        linksbtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-5"),
        linksheader : () => cy.get(".main-header"),
        samplelink : () => cy.get("#simpleLink"),
        dynamiclink : () => cy.get("#dynamicLink"),
        createdapi : () => cy.get("#created"),
        nocintentapi : () => cy.get("#no-content"),
        apiresponse : () => cy.get("#linkResponse"),
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    linkheadervalidation(actualtext){
        this.elements.linksheader().should("have.text", actualtext);
    }
    clicksamplelink(){
        this.elements.samplelink().click();
    }
    clickdynamiclink(){
        this.elements.dynamiclink().click();
    }
    clickcreateapi(){
        this.elements.createdapi().click();
    }
    clicknocontentapi(){
        this.elements.nocintentapi().click();
    }
    apiresponsevaludation(actualmesage){
        this.elements.apiresponse().should('have.text', actualmesage);
    }
    urlvalidation(actualurl){
        cy.url().should('eq', actualurl);
    }
}
export default new elementlinksPage();