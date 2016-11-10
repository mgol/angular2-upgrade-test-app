import { YgAngularAppPage } from './app.po';

describe('yg-angular-app App', function() {
  let page: YgAngularAppPage;

  beforeEach(() => {
    page = new YgAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yg works!');
  });
});
