class widgetprogressbarPage{
    widgets ={
        progressbarBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-4"),
        progressbarheader : () => cy.get(".main-header"),
        startbtn : () => cy.get("#startStopButton"),
        resetbtn : () =>cy.get("#resetButton")
         
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    progressbarheadervalidation(actualheader){
        this.widgets.progressbarheader().should("have.text", actualheader);
    }
    clickstartbtn(){
        this.widgets.startbtn().click();
    }
    clickresetbtn(){
        cy.wait(10000);
        this.widgets.resetbtn().click();
    }
}
export default new widgetprogressbarPage();