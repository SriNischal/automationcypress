import widgetstabsPage from "../../pages/widgetstabsPage"
before(function () {
    cy.fixture("widgetstabs").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/tabs");
    widgetstabsPage.urlvalidation(this.data.url);
    widgetstabsPage.tabsheadervalidation(this.data.header);
    widgetstabsPage.clickorigintab(this.data.firsttabcontent);
    widgetstabsPage.clickusetab(this.data.secondtabcontent);
    widgetstabsPage.clickwhattab(this.data.thirdtabcontent);
    widgetstabsPage.moretab();
})
