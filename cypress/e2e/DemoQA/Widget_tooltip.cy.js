import widgettooltipPage from "../../pages/widgettooltipPage"
before(function () {
    cy.fixture("widgettooltip").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/tool-tips");
    widgettooltipPage.urlvalidation(this.data.url);
    widgettooltipPage.tooltipheadervalidation(this.data.header);
    widgettooltipPage.tooltipbutton(this.data.buttontooltipmessage);
    widgettooltipPage.tooltiptext(this.data.texttooltipmessage);
    widgettooltipPage.tooltipcontrary(this.data.contrarytooltipmessage);
    widgettooltipPage.tooltipdate(this.data.datetooltipmessage);
})
