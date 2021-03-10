import { browser, by, element } from 'protractor';

export class FormFieldsPage {


    getPageTitleText() {
        return element(by.css('p.campl-page-title')).getText();
    }

    /**
     * Navigate to this test page
     */
    navigateTo() {
        return browser.get('/examples/formfields');
    }

    /**
     * Clicks the select demonstrating a regular array of options
     */
    clickRegSelectArr() {
        return element(by.id('selectArr')).click()
        // TODO do we need a browser.wait( EC.x ) here?
    }

    /**
     * 
     * Selects an option in a selected based on selected value
     * 
     * @param value - option value to select
     */
    async clickMatSelectionOptionValue(value: string){
        await this.clickRegSelectArr()
        // TODO do we need a browser.wait( EC.x ) here?
        return this.clickMatOption(value)
    }

    /**
     * 
     * Selects an option in a selected based on selected value
     * 
     * @param value - option value to select
     */
    async clickMatSelectionOptionIndex(index: number){
        await this.clickRegSelectArr()
        // TODO do we need a browser.wait( EC.x ) here?
        return this.clickMatOptionN(index)
    }

    /**
     * Click option displayed from a mat-select
     * 
     * These options are hidden in a cdk-overlay until such a time 
     * when the mat-select is clicked
     * 
     * @dependancies: clickRegSelectX()
     */
    clickMatOption(value: string) {
        return element(by.cssContainingText('mat-option',value)).click()
    }

    /**
     * Click the nth mat-option
     * 
     * These options are hidden in a cdk-overlay until such a time 
     * when the mat-select is clicked
     * 
     * call:
     * 
     * formFieldsPage = FormFieldsPage()
     * await formFieldsPage.clickMatOptionN(index)
     * 
     * @dependancies: clickRegSelectX()
     */
    clickMatOptionN(index: number){
        return element.all(by.css('mat-option')).then(
            items => {
                return items[index].click()
            }
        )
    }

    /**
     * Clicks the select demonstrating an array of object options
     */
    clickRegSelectObj() {
        return element(by.id('selectObj')).click()
    }




    pressRaiseAlterButton() {
        return element(by.id('raisealert')).click();
    }

    getAlertIcon() {
        return element(by.css('.campl-alert-icon')).getText();
    }
}
