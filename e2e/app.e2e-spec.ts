import { AppPage } from './app.po';

describe('todolist-with-angular-material App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Welcome to app!');
  });

  it('should display name of list', () => {
    page.navigateTo();
    expect(page.getListName()).toEqual('List of Todos');
  });

  it('should display an input for todo with paceholder "What needs to be done?"', () => {
    page.navigateTo();
    expect(page.getTodoInputPlaceHolder()).toEqual('What needs to be done?');
  });
});
