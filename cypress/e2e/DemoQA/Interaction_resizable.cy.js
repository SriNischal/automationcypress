import interactionresizablePage from "../../pages/interactionresizablePage"
before(function () {
    cy.fixture("interactionresizable").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/resizable");
    interactionresizablePage.urlvalidation(this.data.url);
    interactionresizablePage.resizableheadervalidation(this.data.header);
    interactionresizablePage.resizefirstbox();
    interactionresizablePage.resizesecondbox();
})
