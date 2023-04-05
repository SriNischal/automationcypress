class interactiondroppablePage{
    interactions ={
        droppableBtn : () => cy.get(":nth-child(5) > .element-list > .menu-list > #item-3 > .text"),
        droppableheader : () => cy.get(".main-header"),
        simpledropabble : () => cy.get("#draggable"),
        simpledropabbletarget : () => cy.get("#simpleDropContainer > #droppable"),
        simpledropabbletargettext : () => cy.get("#simpleDropContainer > #droppable > p"),
        acceptdrop : () => cy.get("#droppableExample-tab-accept"),
        acceptable : () => cy.get("#acceptable"),
        acceptabletext : () => cy.get("#acceptDropContainer > #droppable > p"),
        acceptabletarget : () => cy.get("#acceptDropContainer > #droppable"),
        notacceptable : () => cy.get("#notAcceptable"),
        preventpropogation : () => cy.get("#droppableExample-tab-preventPropogation"),
        dragbox : () => cy.get("#dragBox"),
        preventpropogationtext : () => cy.get("#acceptDropContainer > #droppable > p"),
        notgreedy : () => cy.get("#notGreedyDropBox"),
        greedy : () => cy.get("#greedyDropBoxInner"),
        revertdragabblebtn : () => cy.get("#droppableExample-tab-revertable"),
        willrevert : () => cy.get("#revertable"),
        willnotrevert : () => cy.get("#notRevertable")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    droppableheadervalidation(actualtext){
        this.interactions.droppableheader().should("have.text", actualtext);
    }
    simpledrop(color,text){
        this.interactions.simpledropabble().trigger('mousedown').drag("#simpleDropContainer #droppable",{force: true});
        this.interactions.simpledropabbletargettext().should('have.text',text);
        this.interactions.simpledropabbletarget().should('have.css','background-color',color)
    }
    acceptdrop(beforetext,beforecolor,aftertext,aftercolor){
        this.interactions.acceptdrop().click();
        this.interactions.notacceptable().trigger('mousedown').drag("#acceptDropContainer > #droppable",{force: true});
        this.interactions.acceptabletext().should('have.text',beforetext);
        this.interactions.acceptabletarget().should('have.css','background-color',beforecolor);
        this.interactions.acceptable().trigger('mousedown').drag("#acceptDropContainer > #droppable",{force: true});
        this.interactions.acceptabletext().should('have.text',aftertext);
        this.interactions.acceptabletarget().should('have.css','background-color',aftercolor);
    }
    preventpropogationdrop(color,text){
        this.interactions.preventpropogation().click();
        this.interactions.dragbox().trigger('mousedown').drag("#notGreedyDropBox",{force: true});
        this.interactions.preventpropogationtext().should('have.text',text);
        this.interactions.notgreedy().should('have.css','background-color',color);
        this.interactions.dragbox().trigger('mousedown').drag("#greedyDropBox",{force: true});
        this.interactions.preventpropogationtext().should('have.text',text);
        this.interactions.greedy().should('have.css','background-color',color);
    }
    revertdragabbledrop(color,text){
        this.interactions.revertdragabblebtn().click();
        this.interactions.willrevert().trigger('mousedown').drag("#revertableDropContainer > #droppable",{force: true});
        this.interactions.willnotrevert().trigger('mousedown').drag("#revertableDropContainer > #droppable",{force: true});
        this.interactions.preventpropogationtext().should('have.text',text);
        this.interactions.notgreedy().should('have.css','background-color',color);
    }
}
export default new interactiondroppablePage();