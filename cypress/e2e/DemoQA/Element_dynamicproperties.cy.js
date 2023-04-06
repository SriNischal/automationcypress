import elementdynamicproperties from "../../pages/elementdynamicproperties"
before(function () {
    cy.fixture("dynamicproperties").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("dynamic-properties");
    elementdynamicproperties.urlvalidation(this.data.url);
    elementdynamicproperties.dynamicpropertiesheadervalidation(this.data.dynamicproperties);
    elementdynamicproperties.visibleaftertextvalidation(this.data.visibleafter);
    elementdynamicproperties.colorchangevalidation(this.data.color);
})
