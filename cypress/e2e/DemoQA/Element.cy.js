import elementPage from "../../pages/elementPage"

before(function () {
    cy.fixture("elements").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/elements");
    elementPage.clickelementbtn();
    elementPage.clickelementbtn();
    elementPage.elementheadervalidation(this.data.element);
    elementPage.elementtextvalidation(this.data.text);
})
