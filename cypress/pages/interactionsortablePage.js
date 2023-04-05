class interactionsortablePage{
    interactions ={
        sortableBtn : () => cy.get(":nth-child(5) > .element-list > .menu-list > #item-0 > .text"),
        sortableheader : () => cy.get(".main-header"),
        listone : () => cy.get(".vertical-list-container > :nth-child(1)"),
        listtwo : () => cy.get(".vertical-list-container > :nth-child(5)"),
        list : () => cy.get("#demo-tabpane-list"),
        gridbtn : () => cy.get("#demo-tab-grid"),
        gridone : () => cy.get(".create-grid > :nth-child(1)"),
        gridnine : () => cy.get(".create-grid > :nth-child(8)"),
        grid : () => cy.get("#demo-tabpane-grid")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    sortableheadervalidation(actualtext){
        this.interactions.sortableheader().should("have.text", actualtext);
    }
    sortlist(beforesort,aftersort){
        this.interactions.list().should('contain.text',beforesort);
        this.interactions.listone().trigger('mousedown').scrollTo('bottom',{ensureScrollable: false}).trigger('mouseup');
        this.interactions.listone().trigger('mousedown').scrollTo('top',{ensureScrollable: false}).trigger('mouseup')
        this.interactions.list().should('contain.text',aftersort);
    }
    sortgrid(beforesort,aftersort){
        this.interactions.gridbtn().click();
        this.interactions.grid().should('contain.text',beforesort);
        this.interactions.gridone().trigger('mousedown').scrollTo('bottomLeft',{ensureScrollable: false}).trigger('mouseup');
        this.interactions.gridnine().trigger('mousedown').scrollTo('topRight',{ensureScrollable: false}).trigger('mouseup')
        this.interactions.grid().should('contain.text',aftersort);
    }
}
export default new interactionsortablePage();