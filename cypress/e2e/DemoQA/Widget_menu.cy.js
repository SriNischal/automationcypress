import widgetmenuPage from "../../pages/widgetmenuPage"
before(function () {
    cy.fixture("widgetmenu").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/menu");
    widgetmenuPage.urlvalidation(this.data.url);
    widgetmenuPage.menuheadervalidation(this.data.header);
    widgetmenuPage.mainheader();
    widgetmenuPage.sublist();
})
