class widgetsliderPage{
    widgets ={
        sliderBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-3"),
        sliderheader : () => cy.get(".main-header"),
        slidervaluetooltip : () => cy.get(".range-slider__tooltip__label"),
        slidervalue : () => cy.get("#sliderValue"),
        slider : () => cy.get("input[class='range-slider range-slider--primary']")
         
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    sliderheadervalidation(actualheader){
        this.widgets.sliderheader().should("have.text", actualheader);
    }
    slidervaluetooltipvalidation(value){
        this.widgets.slidervaluetooltip().should("have.text", value);
        this.widgets.slidervalue().should("contain.value",value);
    }
    moveslider(){
        cy.get("input.range-slider.range-slider--primary").trigger("mouseover").click();
    }
    
}
export default new widgetsliderPage();