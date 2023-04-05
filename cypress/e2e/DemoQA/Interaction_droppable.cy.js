import interactiondroppablePage from "../../pages/interactiondroppablePage"
before(function () {
    cy.fixture("interactiondroppable").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/droppable");
    interactiondroppablePage.urlvalidation(this.data.url);
    interactiondroppablePage.droppableheadervalidation(this.data.header);
    interactiondroppablePage.simpledrop(this.data.color,this.data.text);
    interactiondroppablePage.acceptdrop(this.data.beforetext,this.data.beforecolor,this.data.text,this.data.color);
    interactiondroppablePage.preventpropogationdrop(this.data.color,this.data.text);
    interactiondroppablePage.revertdragabbledrop(this.data.color,this.data.text);    
})
