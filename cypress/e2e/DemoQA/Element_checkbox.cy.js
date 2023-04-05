import elementCheckboxPage from "../../pages/elementCheckboxPage"
before(function () {
    cy.fixture("checkbox").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/checkbox");
    elementCheckboxPage.urlvalidation(this.data.url);
    elementCheckboxPage.checkboxheadervalidation(this.data.checkbox);
    elementCheckboxPage.mainfoldercheckbox();
    elementCheckboxPage.mainfoldercheckresult(this.data.mainfolderresult);
    elementCheckboxPage.mainfolderexpand();
    elementCheckboxPage.subfolderexpand();
    elementCheckboxPage.mainfolderuncheckbox();
    elementCheckboxPage.subfolderresult(this.data.subfolderresult);
})
