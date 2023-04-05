class elementwebtablePage{
    elements ={
        webtablebtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-3"),
        webtablebtnheader : () => cy.get(".main-header"),
        addbtn : () => cy.get("#addNewRecordButton"),
        fistname : () => cy.get("#firstName"),
        lastname : () => cy.get("#lastName"),
        email : () => cy.get("#userEmail"),
        age : () => cy.get("#age"),
        salary : () => cy.get("#salary"),
        department : () => cy.get("#department"),
        registerform : () => cy.get("#registration-form-modal"),
        submit : () => cy.get("#submit"),
        userdetails : () => cy.get(":nth-child(4) > .rt-tr"),
        details : () => cy.get(".rt-tbody > :nth-child(1)"),
        editbtn : () => cy.get("#edit-record-4"),
        searchbox : () => cy.get("#searchBox"),
        deleteuser : () => cy.get("#delete-record-4"),

    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    webtablebtnheadervalidation(actualtext){
        this.elements.webtablebtnheader().should("have.text", actualtext);
    }
    adduser(popuptext,firstname,lastname,email,age,salary,department,details){
        this.elements.addbtn().click();
        this.elements.registerform().should('contain.text',popuptext);
        this.elements.fistname().type(firstname);
        this.elements.lastname().type(lastname);
        this.elements.email().type(email);
        this.elements.age().type(age);
        this.elements.salary().type(salary);
        this.elements.department().type(department);
        this.elements.submit().click();
        this.elements.userdetails().should('contain.text',details);
    }
    edituser(editedage,editedsalary,details){
        cy.wait(3000);
        this.elements.editbtn().click();
        this.elements.age().clear().type(editedage);
        this.elements.salary().clear().type(editedsalary);
        this.elements.submit().click();
        this.elements.userdetails().should('contain.text',details);
    }

    searchuser(details){
        this.elements.searchbox().type("Sri{enter}");
        this.elements.details().should('contain.text',details);
    }
    deleteuser(){
        this.elements.deleteuser().click();
    }
    
}
export default new elementwebtablePage();