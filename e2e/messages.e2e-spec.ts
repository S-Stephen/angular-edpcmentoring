import { MessagesPage } from './messages.po';

describe('Messages', () => {
  let page: MessagesPage;

  beforeEach(() => {
    page = new MessagesPage();
  });

  it('Appear when button clicked', async () => {
    await page.navigateTo();
    await page.pressRaiseAlterButton();
    expect( page.getAlertIcon()).toEqual('Errors!');
  });
});
