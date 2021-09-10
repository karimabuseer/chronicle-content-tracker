describe('Sign Up Page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/users/new');
  });

  it('should have a sign up form', async() => {
    await expect(page.title()).resolves.toMatch('Sign Up');
  })

  it('sign up then login should direct you to profile page', async() => {
    await expect(page).toFillForm('form[name="sign-up-form"]', {
      username: 'username',
      email: 'email@email.com',
      password: 'password'
    })
    await page.click('#sign-up-button');
    await expect(page.url()).toMatch('http://localhost:3000/users')
  })

  it('sign up then login should direct you to profile page', async() => {
    
  })
});