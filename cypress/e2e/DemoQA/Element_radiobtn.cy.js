import elementradiobtnpage from "../../pages/elementradiobtnpage"
before(function () {
    cy.fixture("radiobtn").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/radio-button");
    elementradiobtnpage.urlvalidation(this.data.url);
    elementradiobtnpage.radiobtnheadervalidation(this.data.radiobtnheader);
    elementradiobtnpage.clickyesradiobtn();
    elementradiobtnpage.yesradiobtnmessagevalidation(this.data.yesradibtn);
    elementradiobtnpage.clickimpressiveradiobtn();
    elementradiobtnpage.impressiveradiobtnmessagevalidation(this.data.impressiveradiobtn);
    elementradiobtnpage.clicknoradiobtn();
})
