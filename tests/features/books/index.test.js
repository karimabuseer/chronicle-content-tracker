describe('Book list page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/users/new');
    await expect(page).toFillForm('form[name="sign-up-form"]', {
      username: 'username',
      email: 'email@email.com',
      password: 'password'
    })
    await page.goto('http://localhost:3000/books');
  });

  it('should be titled "Books Finder"', async () => {
    const title =  await page.$eval('.title', el => el.innerText);
    expect(title).toMatch('Book Finder');
  });

  it('should be redirect you to the log in page if you are not logged in', async () => {
    await expect(page.url()).toMatch('http://localhost:3000/session/new');
  });

  

});