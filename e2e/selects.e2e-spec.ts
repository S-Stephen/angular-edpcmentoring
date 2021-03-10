import { createPublicKey } from 'crypto';
import { browser } from 'protractor';
import { EdpcmentoringNg8Page } from './app.po';
import { FormFieldsPage } from './formfields.po'

describe('campl-ngx-input-reg-select', () => {
    let fieldsPage: FormFieldsPage;

    beforeEach(() => {
        fieldsPage = new FormFieldsPage();
    });

    it('options can be clicked', async () => {
        fieldsPage.navigateTo();
        expect(fieldsPage.getPageTitleText()).toEqual('Test app');

        // example via option index
        let index = 2
        await fieldsPage.clickMatSelectionOptionIndex(index)
        browser.sleep(2000)

        // example via option value
        await fieldsPage.clickMatSelectionOptionValue('two')
        browser.sleep(2000)


    });
});
