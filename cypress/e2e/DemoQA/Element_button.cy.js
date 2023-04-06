import elementbuttonPage from "../../pages/elementbuttonPage"
before(function () {
    cy.fixture("button").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/buttons");
    elementbuttonPage.urlvalidation(this.data.url);
    elementbuttonPage.buttonheadervalidation(this.data.button);
    elementbuttonPage.clickdblclickbtn();
    elementbuttonPage.doubleclickmessagevalidation(this.data.dblclick);
    elementbuttonPage.clickrightclickbtn();
    elementbuttonPage.rightclickmessagevalidation(this.data.rightclick);
    elementbuttonPage.clickclickmebtn();
    elementbuttonPage.clickmemessage(this.data.clickme);
})
