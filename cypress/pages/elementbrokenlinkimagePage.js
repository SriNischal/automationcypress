class elementbrokenlinkimagesPage{
    elements ={
        brokenlinkbtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-6"),
        brokenlinkheader : () => cy.get(".main-header"),
        validimage : () => cy.get(":nth-child(2) > [src='/images/Toolsqa.jpg']"),
        invalidimage : () => cy.get("[src='/images/Toolsqa_1.jpg']"),
        validlink : () => cy.get('[href="http://demoqa.com"]'),
        invalidlink : () => cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]')
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    brokenlinkheadervalidation(actualtext){
        this.elements.brokenlinkheader().should("have.text", actualtext);
    }
    validimage(imagepath){
        this.elements.validimage().compareSnapshot(imagepath);
    }
    invalidimage(imagepath){
        this.elements.invalidimage().compareSnapshot(imagepath);
    }
    validlink(actuallink){
        this.elements.validlink().invoke('attr', 'href')
        .should('eq', actuallink);
    }
    brokenlink(actuallink){
        this.elements.invalidlink().invoke('attr', 'href')
        .should('eq', actuallink);

    }
}
export default new elementbrokenlinkimagesPage();