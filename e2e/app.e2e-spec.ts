import { Tv-apiPage } from './app.po';

describe('tv-api App', function() {
  let page: Tv-apiPage;

  beforeEach(() => {
    page = new Tv-apiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
