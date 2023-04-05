class widgetautocompletePage{
    widgets ={
        autocompleteBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-1"),
        autocompleteheader : () => cy.get(".main-header"),
        multicolor : () => cy.get("#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container"),
        singlecolor : () => cy.get("#autoCompleteSingleContainer > .auto-complete__control > .auto-complete__value-container"),
        singlecoloroption : () => cy.get("#react-select-3-option-0"),
        multicoloroption : () => cy.get("#react-select-2-option-0"),
        selectedcolors : () => cy.get("#autoCompleteMultipleContainer > .auto-complete__control > .auto-complete__value-container")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    autocompleteheadervalidation(){
        this.widgets.autocompleteheader().should("have.text", "Auto Complete");
    }
    entersinglecolor(color){
        this.widgets.singlecolor().type(color);
        this.widgets.singlecoloroption().click();
        this.widgets.singlecolor().should('have.text', color);
    }
    entermulticolor(color1, color2, colors){
        this.widgets.multicolor().type(color1);
        this.widgets.multicoloroption().click();
        this.widgets.multicolor().type(color2);
        this.widgets.multicoloroption().click();
        this.widgets.selectedcolors().should('have.text',colors);
    }
}
export default new widgetautocompletePage();