import { LenguajesFrontPage } from './app.po';

describe('lenguajes-front App', () => {
  let page: LenguajesFrontPage;

  beforeEach(() => {
    page = new LenguajesFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
