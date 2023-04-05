import widgetprogressbar from "../../pages/widgetprogressbar"
before(function () {
    cy.fixture("widgetprogressbar").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/progress-bar");
    widgetprogressbar.urlvalidation(this.data.url);
    widgetprogressbar.progressbarheadervalidation(this.data.header);
    widgetprogressbar.clickstartbtn();
    widgetprogressbar.clickresetbtn();
})
