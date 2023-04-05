class widgetaccordianPage{
    widgets ={
        accordianBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-0"),
        accordianheader : () => cy.get(".main-header"),
        firstheader : () => cy.get("#section1Heading"),
        secondheader : () => cy.get("#section2Heading"),
        thirdheader : () => cy.get("#section3Heading"),
        firstcontent : () => cy.get("#section1Content > p"),
        secondcontent : () => cy.get("#section2Content > p"),
        thirdcontent : () => cy.get("#section3Content > p")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    accordianheadervalidation(actualtext){
        this.widgets.accordianheader().should("have.text", actualtext);
    }
    clickaccordiansecondheader(){
        this.widgets.secondheader().click();
    }
    clickaccordianthirdheader(){
        this.widgets.thirdheader().click();
    }
    firstheadertextvalidation(actualtext,actualcontent){
        this.widgets.firstheader().should("have.text",actualtext);
        this.widgets.firstcontent().contains(actualcontent);
    }
    secondheadertextvalidation(actualtext,actualcontent){
        this.widgets.secondheader().should("have.text", actualtext);
        this.widgets.secondcontent().contains(actualcontent);
    }
    thirdheadertextvalidation(actualtext,actualcontent){
        this.widgets.thirdheader().should("have.text", actualtext);
        this.widgets.thirdcontent().contains(actualcontent);
    }
}
export default new widgetaccordianPage();