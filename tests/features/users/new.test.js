describe('Sign Up', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/users/new');
  });

  it('should have a sign up form', async() => {
    const title =  await page.$eval('h1', el => el.innerText);
    expect(title).toMatch('Sign Up');
  })

  it('sign up should direct you to home page', async() => {
    await expect(page).toFillForm('form[name="sign-up-form"]', {
      username: 'username',
      email: 'email@email.com',
      password: 'password'
    })
    await page.click('#sign-up-button');
    await expect(page.url()).toMatch('http://localhost:3000')
  })
});