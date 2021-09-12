describe('Book list page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/sessions/new');
    await expect(page).toFillForm('form[name="sign-up-form"]', {
      username: 'username',
      email: 'email@email.com',
      password: 'password'
    })
    await page.goto('http://localhost:3000/sessions/new');
    await expect(page).toFillForm('form[name="sign-up-form"]', {
      username: 'username',
      email: 'email@email.com',
      password: 'password'
    })
    await page.goto('http://localhost:3000/books');
  });

  it('should be titled "Books List"', async () => {
    const title =  await page.$eval('.title', el => el.innerText);
    expect(title).toMatch('Book List');
  });
});