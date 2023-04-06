import widgetsliderPage from "../../pages/widgetsliderPage"
before(function () {
    cy.fixture("widgetslider").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/slider");
    widgetsliderPage.urlvalidation(this.data.url);
    widgetsliderPage.sliderheadervalidation(this.data.slider);
    widgetsliderPage.slidervaluetooltipvalidation(this.data.slidertooltip);
    widgetsliderPage.moveslider();
})
