import { HowsaydevPage } from './app.po';

describe('howsaydev App', () => {
  let page: HowsaydevPage;

  beforeEach(() => {
    page = new HowsaydevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
