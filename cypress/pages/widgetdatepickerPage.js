class widgetdatepickerPage{
    widgets ={
        datepickerbtnBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-2 > .text"),
        datepickerheader : () => cy.get(".main-header"),
        selectdate : () => cy.get("#datePickerMonthYearInput"),
        date : () => cy.get(".react-datepicker__week div"),
        monthselect : () => cy.get(".react-datepicker__month-select"),
        previous : () => cy.get(".react-datepicker__navigation--previous"),
        next : () => cy.get(".react-datepicker__navigation--next"),
        yearselect : () => cy.get(".react-datepicker__year-select"),
        selecteddate : () => cy.get("#datePickerMonthYearInput"),
        selectdatetime : () => cy.get("#dateAndTimePickerInput"),
        selectdatetimemonth : () => cy.get(".react-datepicker__month-read-view--selected-month"),
        selectdatetimeyear : () => cy.get(".react-datepicker__year-read-view--down-arrow"),
        selectyear : () => cy.get(".react-datepicker__year-dropdown > :nth-child(12)"),
        selectmonth : () => cy.get(".react-datepicker__month-dropdown > :nth-child(7)"),
        selecttime : () => cy.get(":nth-child(69)"),
        dateselect : () => cy.get(".react-datepicker__day--024") 
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    datepickerheadervalidation(actualheader){
        this.widgets.datepickerheader().should("have.text", actualheader);
    }
    selectdate(date){
        this.widgets.selectdate().click();
        this.widgets.date().contains(date).click();
    }
    selectmonthsdate(month,date){
        this.widgets.selectdate().click();
        this.widgets.monthselect().select(month);
        this.widgets.date().contains(date).click();
    }
    selectyearmonthsdate(year,month,date){
        this.widgets.selectdate().click();
        this.widgets.yearselect().select(year);
        this.widgets.monthselect().select(month);
        this.widgets.date().contains(date).click();
    }
    selectdatetime(){
        this.widgets.selectdatetime().click();
        this.widgets.selectdatetimeyear().click();
        this.widgets.selectyear().click();
        this.widgets.selectdatetimemonth().click();
        this.widgets.selectmonth().click();
        this.widgets.dateselect().click();
        this.widgets.selecttime().click();
    }
}
export default new widgetdatepickerPage();