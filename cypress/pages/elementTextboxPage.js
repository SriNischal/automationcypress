class TextboxPage {

    elements = {
        textboxBtn: () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-0"),
        textboxheader: () => cy.get(".main-header"),
        textboxfullname: () => cy.get("input[placeholder='Full Name']"),
        textboxemail: () => cy.get("input[placeholder='name@example.com']"),
        textboxcurrentaddress: () => cy.get("textarea[placeholder='Current Address']"),
        textboxpermanantaddress: () => cy.get("textarea#permanentAddress"), 
        submitbtn: () => cy.get("#submit"),
        actualname: () => cy.get("#name"),
        actualemail: () => cy.get("#email"),
        actualcurrentaddress:() => cy.get("p#currentAddress"),
        actualpermanentaddress: () => cy.get("p#permanentAddress")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    textboxheadervalidation(actualtext) {
        this.elements.textboxheader().should("have.text", actualtext);
    }
    entertextboxfullname(name) {
        this.elements.textboxfullname().type(name);
    }
    entertextboxemail(email) {
        this.elements.textboxemail().type(email);
    }
    entertextcurrentaddress(caddress) {
        this.elements.textboxcurrentaddress().type(caddress);
    }
    entertextpermanantaddress(paddress) {
        this.elements.textboxpermanantaddress().click().type(paddress);
    }
    clicksubmitbtn() {
        this.elements.submitbtn().click();
    }
    namevalidation(expectedname){
        this.elements.actualname().should('contain', expectedname);
    }
    emailvalidation(expectedemail){
        this.elements.actualemail().should('contain', expectedemail);
    }
    actualcurrentvalidation(expectedactualaddress){
        this.elements.actualcurrentaddress().should('contain', expectedactualaddress);
    }
    permanentaddressvalidation(expectedpermanentaddress){
        this.elements.actualpermanentaddress().should('contain', expectedpermanentaddress);
    }
}
export default new TextboxPage();