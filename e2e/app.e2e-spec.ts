import { AngularReduxAppPage } from './app.po';

describe('angular-redux-app App', () => {
  let page: AngularReduxAppPage;

  beforeEach(() => {
    page = new AngularReduxAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
