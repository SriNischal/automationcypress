class interactionselectablePage{
    interactions ={
        selectableBtn : () => cy.get(":nth-child(5) > .element-list > .menu-list > #item-1 > .text"),
        selectableheader : () => cy.get(".main-header"),
        listone : () => cy.get("#verticalListContainer > :nth-child(1)"),
        listtwo : () => cy.get("#verticalListContainer > :nth-child(2)"),
        gridbtn : () => cy.get("#demo-tab-grid"),
        gridone : () => cy.get("#row1 > :nth-child(1)"),
        gridnine : () => cy.get("#row3 > :nth-child(3)"),
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    selectableheadervalidation(actualtext){
        this.interactions.selectableheader().should("have.text", actualtext);
    }
    selectlist(beforecolor,aftercolor){
        this.interactions.listone().should('have.css','background-color',beforecolor).click().should('have.css','background-color',aftercolor);
        this.interactions.listtwo().should('have.css','background-color',beforecolor).click().should('have.css','background-color',aftercolor);
    }
    selectgrid(beforecolor,aftercolor){
        this.interactions.gridbtn().click();
        this.interactions.gridone().should('have.css','background-color',beforecolor).click().should('have.css','background-color',aftercolor);
        this.interactions.gridnine().should('have.css','background-color',beforecolor).click().should('have.css','background-color',aftercolor);
    }
}
export default new interactionselectablePage();