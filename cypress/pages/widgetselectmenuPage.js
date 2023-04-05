class widgetselectmenuPage{
    widgets ={
        selectmenuBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-8"),
        selectmenuheader : () => cy.get(".main-header"),
        selectvalue : () => cy.get("#withOptGroup > .css-yk16xz-control > .css-1hwfws3"),
        selecttitle : () => cy.get("#selectOne > .css-yk16xz-control > .css-1hwfws3"),
        selectoldstylemenu : () => cy.get("#oldSelectMenu"),
        multiselect : () => cy.get(":nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3"),
        cars : () => cy.get("#cars")

    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    selectmenuheadervalidation(actualtext){
        this.widgets.selectmenuheader().should("have.text", actualtext);
    }
    selectvaluedropdown(){
        this.widgets.selectvalue().click().type("Group 1, option 1{enter}");
    }
    selecttitledropdown(){
        this.widgets.selecttitle().click().type("Mr.{enter}")
    }
    selectoldmenustyle(value){
        this.widgets.selectoldstylemenu().select(value);
    }
    mulstiselectdropdown(text){
        this.widgets.multiselect().click().type("blue{enter}").type("red{enter}");
    }
    carsdropdown(values){
        this.widgets.cars().select(values);
    }
}
export default new widgetselectmenuPage();