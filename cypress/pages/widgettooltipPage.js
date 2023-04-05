class widgettooltipPage{
    widgets ={
        tooltipBtn : () => cy.get(":nth-child(4) > .element-list > .menu-list > #item-6"),
        tooltipheader : () => cy.get(".main-header"),
        firsttooltip : () => cy.get("#toolTipButton"),
        firsttooltipmessage : () => cy.get(".tooltip-inner"),
        secondtooltip : () => cy.get("#toolTipTextField"),
        secondtooltipmessage : () => cy.get("#textFieldToolTip"),
        thirdtooltip : () => cy.get("#texToolTopContainer > :nth-child(1)"),
        thirdtooltipmessage : () => cy.get("#contraryTexToolTip"),
        fourthtooltip : () => cy.get("#texToolTopContainer > :nth-child(2)"),
        fourthtooltipmessage : () => cy.get("#sectionToolTip")
    }
    urlvalidation(url){
        cy.url().should('include', url) 
    }
    tooltipheadervalidation(actualheader){
        this.widgets.tooltipheader().should("have.text", actualheader);
    }
    tooltipbutton(buttontooltipmessage){
        this.widgets.firsttooltip().trigger('mouseover');
        this.widgets.firsttooltipmessage().should("have.text",buttontooltipmessage);
    }
    tooltiptext(textfieldtooltipmessage){
        this.widgets.secondtooltip().trigger('mouseover');
        this.widgets.secondtooltipmessage().should("have.text",textfieldtooltipmessage);
    }
    tooltipcontrary(contrarytooltipmessage){
        this.widgets.thirdtooltip().trigger('mouseover');
        this.widgets.thirdtooltipmessage().should("have.text",contrarytooltipmessage);
    }
    tooltipdate(datetooltipmessage){
        this.widgets.fourthtooltip().trigger('mouseover');
        this.widgets.fourthtooltipmessage().should("have.text",datetooltipmessage);
    }
}
export default new widgettooltipPage();