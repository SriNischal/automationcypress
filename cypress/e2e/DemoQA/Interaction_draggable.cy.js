import interactiodraggablePage from "../../pages/interactiodraggablePage"
before(function () {
    cy.fixture("interactiondraggable").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("/dragabble");
    interactiodraggablePage.urlvalidation(this.data.url);
    interactiodraggablePage.draggableheadervalidation(this.data.header);
    interactiodraggablePage.simpledrag();
    interactiodraggablePage.restricteddrag();
    interactiodraggablePage.containerrestricteddrag();
    interactiodraggablePage.cursorstyledrag();
})
