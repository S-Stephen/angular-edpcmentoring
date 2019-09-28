import { EdpcmentoringNg8Page } from './app.po';

describe('edpcmentoring-ng8 App', () => {
  let page: EdpcmentoringNg8Page;

  beforeEach(() => {
    page = new EdpcmentoringNg8Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
