import elementuploaddownload from "../../pages/elementuploaddownload"
before(function () {
    cy.fixture("uploaddownload").then(function (data) {
        this.data = data
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
it('this is sample test script', function () {
    cy.visit("upload-download");
    elementuploaddownload.urlvalidation(this.data.url);
    elementuploaddownload.uploaddownloadbtnheadervalidation(this.data.uploaddownload);
    elementuploaddownload.clickdownloadbtn();
    elementuploaddownload.clickchoosefilebtn(this.data.file,this.data.filepath);
})
