class elementuplaoddownloadPage{
    elements ={
        uploaddownloadbtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-7"),
        uploaddownloadbtnheader : () => cy.get(".main-header"),
        downloadbtn : () => cy.get("#downloadButton"),
        choosefilebtn : () => cy.get("#uploadFile"),
        uploadedfile : () => cy.get("#uploadedFilePath")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    uploaddownloadbtnheadervalidation(actualtext){
        this.elements.uploaddownloadbtnheader().should("have.text", actualtext);
    }
    clickdownloadbtn(){
        this.elements.downloadbtn().click();
        cy.readFile('cypress/downloads/sampleFile.jpeg');
    }
    clickchoosefilebtn(file,filepath){
        this.elements.choosefilebtn().selectFile(file);
        this.elements.uploadedfile().should("have.text",filepath);
    }
}
export default new elementuplaoddownloadPage();