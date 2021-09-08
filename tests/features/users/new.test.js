describe('Sign Up Page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/users/new');
  });

  it('should have a sign up form', async() => {
    await expect(page.title()).resolves.toMatch('Sign Up');
  })

  it('sign up then login should direct you to email', async() => {
    
  })
})