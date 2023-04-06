import widgetdatepickerPage from "../../pages/widgetdatepickerPage"
before(function () {
    cy.fixture("widgetdatepicker").then(function (data) {
        this.data = data
    })
})
it('this is sample test script', function () {
    cy.visit("/date-picker");
    widgetdatepickerPage.urlvalidation(this.data.url);
    widgetdatepickerPage.datepickerheadervalidation(this.data.datepickerheader);
    widgetdatepickerPage.selectdate(this.data.date);
    widgetdatepickerPage.selectmonthsdate(this.data.month, this.data.date);
    widgetdatepickerPage.selectyearmonthsdate(this.data.year,this.data.month,this.data.date);
    widgetdatepickerPage.selectdatetime();
})
