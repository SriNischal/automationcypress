import interactionsortablePage from "../../pages/interactionsortablePage"
before(function () {
    cy.fixture("interactionsortable").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/sortable");
    interactionsortablePage.urlvalidation(this.data.url);
    interactionsortablePage.sortableheadervalidation(this.data.header);
    interactionsortablePage.sortlist(this.data.beforelistsort,this.data.afterlistsort);
    interactionsortablePage.sortgrid(this.data.beforegridsort,this.data.aftergridsort);
})
