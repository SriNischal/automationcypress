import widgetprogressbar from "../../pages/widgetprogressbar"
before(function () {
    cy.fixture("widgetprogressbar").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/progress-bar");
    widgetprogressbar.urlvalidation(this.data.url);
    widgetprogressbar.progressbarheadervalidation(this.data.header);
    widgetprogressbar.clickstartbtn();
    widgetprogressbar.clickresetbtn();
})
