import widgetsliderPage from "../../pages/widgetsliderPage"
before(function () {
    cy.fixture("widgetslider").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/slider");
    widgetsliderPage.urlvalidation(this.data.url);
    widgetsliderPage.sliderheadervalidation(this.data.slider);
    widgetsliderPage.slidervaluetooltipvalidation(this.data.slidertooltip);
    widgetsliderPage.moveslider();
})
