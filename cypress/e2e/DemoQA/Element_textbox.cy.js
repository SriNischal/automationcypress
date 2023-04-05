import elementTextboxPage from "../../pages/elementTextboxPage"
before(function () {
    cy.fixture("textbox").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/text-box");
    elementTextboxPage.urlvalidation(this.data.url);
    elementTextboxPage.textboxheadervalidation(this.data.textbox);
    elementTextboxPage.entertextboxfullname(this.data.fullname);
    elementTextboxPage.entertextboxemail(this.data.email);
    elementTextboxPage.entertextcurrentaddress(this.data.caddress);
    elementTextboxPage.entertextpermanantaddress(this.data.paddress);
    elementTextboxPage.clicksubmitbtn();
    elementTextboxPage.namevalidation(this.data.fullname);
    elementTextboxPage.emailvalidation(this.data.email);
    elementTextboxPage.actualcurrentvalidation(this.data.caddress);
    elementTextboxPage.permanentaddressvalidation(this.data.paddress);
})
