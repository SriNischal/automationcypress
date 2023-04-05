import widgetsaccoirdianPage from "../../pages/widgetsaccoirdianPage"
before(function () {
    cy.fixture("widgetaccordian").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/accordian");
    widgetsaccoirdianPage.urlvalidation(this.data.url);
    widgetsaccoirdianPage.accordianheadervalidation(this.data.accordian);
    widgetsaccoirdianPage.firstheadertextvalidation(this.data.firstheader,this.data.firstcontent);
    widgetsaccoirdianPage.clickaccordiansecondheader();
    widgetsaccoirdianPage.secondheadertextvalidation(this.data.secondheader,this.data.secondcontent);
    widgetsaccoirdianPage.clickaccordianthirdheader();
    widgetsaccoirdianPage.thirdheadertextvalidation(this.data.thirdheader,this.data.thirdcontent);
})
