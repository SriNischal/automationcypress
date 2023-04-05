class widgettabsPage{
    widgets ={
        tabsBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-5"),
        tabsheader : () => cy.get(".main-header"),
        origintab : () => cy.get("#demo-tab-origin"),
        origintabtext : () => cy.get("#demo-tabpane-origin .mt-3"),
        usetab : () => cy.get("#demo-tab-use"),
        usetabtext : () => cy.get("#demo-tabpane-use .mt-3"),
        whattab : () => cy.get("#demo-tab-what"),
        whattabtext : () => cy.get("#demo-tabpane-what .mt-3"),
        moretab : () => cy.get("#demo-tab-more")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    tabsheadervalidation(actualheader){
        this.widgets.tabsheader().should("have.text", actualheader);
    }
    clickorigintab(firsttabcontent){
        this.widgets.origintab().click();
        this.widgets.origintabtext().should("contain.text",firsttabcontent);
    }
    clickusetab(secondtabcontent){
        this.widgets.usetab().click();
        this.widgets.usetabtext().should("contain.text",secondtabcontent);
    }
    clickwhattab(thirdtabcontent){
        this.widgets.whattab().click();
        this.widgets.whattabtext().should("contain.text",thirdtabcontent);
    }
    moretab(){
        this.widgets.moretab().should("not.be.checked");
    }
}
export default new widgettabsPage();