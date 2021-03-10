import { EdpcmentoringNg8Page } from './app.po';

describe('projectlight-ngx App', () => {
  let page: EdpcmentoringNg8Page;

  beforeEach(() => {
    page = new EdpcmentoringNg8Page();
  });

  it('should display page title',async  () => {
    page.navigateTo();
    // The configuration from environment common ha sbeen used:
    expect(await page.getPageTitleText()).toEqual('Test app');
  });
});
