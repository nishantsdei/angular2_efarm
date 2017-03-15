import { EfarmPage } from './app.po';

describe('efarm App', () => {
  let page: EfarmPage;

  beforeEach(() => {
    page = new EfarmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
