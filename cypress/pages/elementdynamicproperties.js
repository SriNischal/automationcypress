class elementdynamicpropertiesPage {

    elements = {
        dynamicpropertiesBtn: () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-8"),
        dynamicpropertiesheader: () => cy.get(".main-header"),
        visibleafter : () => cy.get("#visibleAfter"),
        colorchange : () => cy.get("#colorChange")

    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    dynamicpropertiesheadervalidation(actualtext) {
        this.elements.dynamicpropertiesheader().should("have.text", actualtext);
    }
    visibleaftertextvalidation(actualmesage){
        cy.wait(3000);
        this.elements.visibleafter().should("have.text", actualmesage);
    }
    colorchangevalidation(actualcolor){
        this.elements.colorchange().should('have.css', 'color', actualcolor);
    }
    
    
}
export default new elementdynamicpropertiesPage();