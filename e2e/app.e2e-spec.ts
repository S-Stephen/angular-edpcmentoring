import { EdpcmentoringNg8Page } from './app.po';

describe('projectlight-ngx App', () => {
  let page: EdpcmentoringNg8Page;

  beforeEach(() => {
    page = new EdpcmentoringNg8Page();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('Test app');
  });
});
