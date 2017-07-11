import { BarrelFrontendPage } from './app.po';

describe('barrel-frontend App', () => {
  let page: BarrelFrontendPage;

  beforeEach(() => {
    page = new BarrelFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
