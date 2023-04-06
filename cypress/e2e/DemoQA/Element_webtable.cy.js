import elementwebtablePage from "../../pages/elementwebtablePage"

    before(function () {
        cy.fixture("elementwebtable").then(function (data) {
            this.data = data
        })
    })
    it('this is sample test script', function () {
        cy.visit("/webtables");
        elementwebtablePage.urlvalidation(this.data.url);
        elementwebtablePage.webtablebtnheadervalidation(this.data.header);
        elementwebtablePage.adduser(this.data.popuptext,this.data.firstname,this.data.lastname,this.data.email,this.data.age,this.data.salary,this.data.department,this.data.details);
        elementwebtablePage.edituser(this.data.editedage,this.data.editedsalary,this.data.editeddetails);
        elementwebtablePage.searchuser(this.data.editeddetails);
        elementwebtablePage.deleteuser();
    })
