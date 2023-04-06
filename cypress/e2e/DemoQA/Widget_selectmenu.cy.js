import widgetselectmenuPage from "../../pages/widgetselectmenuPage"
before(function () {
    cy.fixture("widgetselectmenu").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/select-menu");
    widgetselectmenuPage.urlvalidation(this.data.url);
    widgetselectmenuPage.selectmenuheadervalidation(this.data.header);
    widgetselectmenuPage.selectvaluedropdown();
    widgetselectmenuPage.selecttitledropdown();
    widgetselectmenuPage.selectoldmenustyle(this.data.value);
    widgetselectmenuPage.mulstiselectdropdown(this.data.text);
    widgetselectmenuPage.carsdropdown(this.data.cars);
})
