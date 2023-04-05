import widgetPage from "../../pages/widgetPage";
before(function () {
    cy.fixture("widgets").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/widgets");
    widgetPage.urlvalidation(this.data.url)
    widgetPage.clickwidgetbtn();
    widgetPage.clickwidgetbtn();
    widgetPage.widgetheadervalidation(this.data.widget);
    widgetPage.widgettextvalidation(this.data.text);
})
