class interactionPage{
    interactions ={
        interactionBtn : () => cy.get(":nth-child(5) > .group-header > .header-wrapper > .header-text"),
        interactionheader : () => cy.get(".main-header"),
        interactiontext : () => cy.get(".col-md-6"),
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    clickinteractionbtn(){
        this.interactions.interactionBtn().click();
    }
    interactionheadervalidation(actualtext){
        this.interactions.interactionheader().should("have.text", actualtext);
    }
    interactiontextvalidation(actualtext){
        this.interactions.interactiontext().should("have.text",actualtext);
    }
}
export default new interactionPage();