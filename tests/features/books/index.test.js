describe('Book search page', () => {

  // fix when crud / authentication is complete
  xit('should be redirect you to the log in page if you are not logged in', async () => {
    await page.goto('http://localhost:3000/books');
    await expect(page.url()).toMatch('http://localhost:3000/session/new');
  });

  beforeEach(async () => {
    await page.goto('http://localhost:3000/users/new');
    await expect(page).toFillForm('form[name="sign-up-form"]', {
      username: 'username',
      email: 'email@email.com',
      password: 'password'
    })
    await page.click('#sign-up-button');

    await page.goto('http://localhost:3000/session/new');
    await expect(page).toFillForm('form[name="log-in-form"]', {
      email: 'email@example.com',
      password: 'Example'
    })
    await page.click('#log-in-button');
    await page.goto('http://localhost:3000/books');
  });

  it('should be titled "Books Finder"', async () => {
    await expect(page.url()).toMatch('http://localhost:3000/books');
    await expect(page.title()).resolves.toMatch("Chronicle")
    const title =  await page.$eval('h1', el => el.innerText);
    expect(title).toMatch('Book Finder');
  });
});