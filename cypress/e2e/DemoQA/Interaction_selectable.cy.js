import interactionselectablePage from "../../pages/interactionselectablePage"
before(function () {
    cy.fixture("interactionselectable").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/selectable");
    interactionselectablePage.urlvalidation(this.data.url);
    interactionselectablePage.selectableheadervalidation(this.data.header);
    interactionselectablePage.selectlist(this.data.beforecolor,this.data.aftercolor);
    interactionselectablePage.selectgrid(this.data.beforecolor,this.data.aftercolor);
})
