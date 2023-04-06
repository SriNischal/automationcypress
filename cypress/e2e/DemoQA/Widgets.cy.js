import widgetPage from "../../pages/widgetPage";
before(function () {
    cy.fixture("widgets").then(function (data) {
        this.data = data
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
