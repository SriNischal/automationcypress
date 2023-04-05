class interactionresizablePage{
    interactions ={
        resizableBtn : () => cy.get(":nth-child(5) > .element-list > .menu-list > #item-2 > .text"),
        resizableheader : () => cy.get(".main-header"),
        firstbox : () => cy.get("#resizableBoxWithRestriction > .react-resizable-handle"),
        firstboxtext : () => cy.get("#resizableBoxWithRestriction > .text"),
        secondbox : () => cy.get("#resizable > .react-resizable-handle"),
        gridone : () => cy.get("#row1 > :nth-child(1)"),
        gridnine : () => cy.get("#row3 > :nth-child(3)"),
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    resizableheadervalidation(actualtext){
        this.interactions.resizableheader().should("have.text", actualtext);
    }
    resizefirstbox(){
        this.interactions.firstbox().trigger('mousedown').scrollTo('450','150',{ensureScrollable: false}).trigger('mouseup');
    }
    resizesecondbox(){
        this.interactions.secondbox().trigger('mousedown').scrollTo('150','150',{ensureScrollable: false}).trigger('mouseup');
    }
}
export default new interactionresizablePage();