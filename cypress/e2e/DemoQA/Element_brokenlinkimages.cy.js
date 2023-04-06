import elementbrokenlinkimagePage from "../../pages/elementbrokenlinkimagePage"
before(function () {
    cy.fixture("brokenlinkimages").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/broken");
    elementbrokenlinkimagePage.urlvalidation(this.data.url);
    elementbrokenlinkimagePage.brokenlinkheadervalidation(this.data.brokenimagelink);
    elementbrokenlinkimagePage.validimage(this.data.validimagepath);
    elementbrokenlinkimagePage.invalidimage(this.data.invalidimagepath);
    elementbrokenlinkimagePage.validlink(this.data.validlink);
    elementbrokenlinkimagePage.brokenlink(this.data.invalidlink);
})
