import widgetautocompletePage from "../../pages/widgetautocompletePage"
before(function () {
    cy.fixture("widgetautocomplete").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/auto-complete");
    widgetautocompletePage.urlvalidation(this.data.url);
    widgetautocompletePage.autocompleteheadervalidation(this.data.autocomolete);
    widgetautocompletePage.entersinglecolor(this.data.singlecolor);
    widgetautocompletePage.entermulticolor(this.data.color1, this.data.color2, this.data.colors);
})
