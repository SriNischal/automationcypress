class widgetmenuPage{
    widgets ={
        menuBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-7"),
        menuheader : () => cy.get(".main-header"),
        mainheader2 : () => cy.get("#nav > :nth-child(2) > :nth-child(2)"),
        subheader : () => cy.get("#nav > :nth-child(2) > :nth-child(2) > :nth-child(3)")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    menuheadervalidation(actualtext){
        this.widgets.menuheader().should("have.text", actualtext);
    }
    mainheader(){
        this.widgets.mainheader2().trigger('mouseover',{force: true});
        //this.widgets.mainheader2().trigger('mouseover').eq(0).should('contain.text','Sub Item');
        //this.widgets.mainheader2().trigger('mouseover').eq(1).should('contain.text','Sub Item');
        //this.widgets.mainheader2().trigger('mouseover').eq(2).should('contain.text','Sub Sub List >>');
    }
    sublist(){
        this.widgets.subheader().trigger('mouseover',{force: true});
        //this.widgets.subheader().trigger('mouseover').eq(0).should('have.text','Sub Sub Item 1');
        //this.widgets.subheader().trigger('mouseover').eq(1).should('contain.text','Sub Sub Item 2');
    }
}
export default new widgetmenuPage();