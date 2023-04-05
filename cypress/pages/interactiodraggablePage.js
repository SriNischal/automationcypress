class interactiondraggablePage{
    interactions ={
        draggableBtn : () => cy.get(":nth-child(5) > .element-list > .menu-list > #item-4 > .text"),
        draggableheader : () => cy.get(".main-header"),
        simpledrag : () => cy.get("#dragBox"),
        accessrestricted : () => cy.get("#draggableExample-tab-axisRestriction"),
        onlyx : () => cy.get("#restrictedX"),
        onlyy : () => cy.get("#restrictedY"),
        containerrestricted : () => cy.get("#draggableExample-tab-containerRestriction"),
        containedbox : () => cy.get("#containmentWrapper > .draggable"),
        containedparent : () => cy.get(".ui-widget-header"),
        cursorstyle : () => cy.get("#draggableExample-tab-cursorStyle"),
        cursorcenter : () => cy.get("#cursorCenter"),
        cursorleft : () => cy.get("#cursorTopLeft"),
        cursorbottom : () => cy.get("#cursorBottom")
    }
    urlvalidation(url){
        cy.url().should('include', url)
    }
    draggableheadervalidation(actualtext){
        this.interactions.draggableheader().should("have.text", actualtext);
    }
    simpledrag(){
        this.interactions.simpledrag().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
    }
    restricteddrag(){
        this.interactions.accessrestricted().click();
        this.interactions.onlyx().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
        this.interactions.onlyy().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
    }
    containerrestricteddrag(){
        this.interactions.containerrestricted().click();
        this.interactions.containedbox().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
        this.interactions.containedparent().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
    }
    cursorstyledrag(){
        this.interactions.cursorstyle().click();
        this.interactions.cursorcenter().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
        this.interactions.cursorleft().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
        this.interactions.cursorbottom().trigger('mousedown').scrollTo(0,100,{ensureScrollable: false}).trigger('mouseup');
    }
}
export default new interactiondraggablePage();