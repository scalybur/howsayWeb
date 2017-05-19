import { HowsayPage } from './app.po';

describe('howsay App', () => {
  let page: HowsayPage;

  beforeEach(() => {
    page = new HowsayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
