import interactionsPage from "../../pages/interactionsPage"
before(function () {
    cy.fixture("interactions").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/interaction");
    interactionsPage.urlvalidation(this.data.url)
    interactionsPage.clickinteractionbtn();
    interactionsPage.clickinteractionbtn();
    interactionsPage.interactionheadervalidation(this.data.interaction);
    interactionsPage.interactiontextvalidation(this.data.text);
})
