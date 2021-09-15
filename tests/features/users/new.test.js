describe('Sign Up', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/users/new');
  });

  it('should have a sign up form', async() => {
    await expect(page).toMatchElement(".title", { text: 'Sign Up' });
    await expect(page).toMatchElement(".username");
    await expect(page).toMatchElement(".email");
    await expect(page).toMatchElement(".password");
    await expect(page).toMatchElement("#sign-up-button", { text: 'Sign Up' });
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