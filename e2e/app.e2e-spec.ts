import { RpmPage } from './app.po';

describe('rpm App', function() {
  let page: RpmPage;

  beforeEach(() => {
    page = new RpmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
