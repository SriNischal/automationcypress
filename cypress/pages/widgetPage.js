class widgetPage{
    widgets ={
        widgetBtn : () => cy.get(":nth-child(4) > .group-header > .header-wrapper"),
        widgetheader : () => cy.get(".main-header"),
        widgettext : () => cy.get(".col-md-6"),
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    clickwidgetbtn(){
        this.widgets.widgetBtn().click();
    }
    widgetheadervalidation(actualtext){
        this.widgets.widgetheader().should("have.text", actualtext);
    }
    widgettextvalidation(actualtext){
        this.widgets.widgettext().should("have.text",actualtext);
    }
}
export default new widgetPage();