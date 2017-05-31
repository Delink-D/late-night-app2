import { LateNightApp2Page } from './app.po';

describe('late-night-app2 App', () => {
  let page: LateNightApp2Page;

  beforeEach(() => {
    page = new LateNightApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
