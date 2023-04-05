import elementlinksPage from "../../pages/elementlinksPage"
before(function () {
    cy.fixture("links").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/links");
    elementlinksPage.urlvalidation(this.data.url);
    elementlinksPage.linkheadervalidation(this.data.links);
    elementlinksPage.clicksamplelink();
    elementlinksPage.urlvalidation(this.data.linkurl);
    elementlinksPage.clickdynamiclink();
    elementlinksPage.urlvalidation(this.data.linkurl);
    elementlinksPage.clickcreateapi();
    elementlinksPage.apiresponsevaludation(this.data.createapi);
    elementlinksPage.clicknocontentapi();
    elementlinksPage.apiresponsevaludation(this.data.nocontentapi);
})
