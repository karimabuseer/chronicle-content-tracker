describe('Log In Page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/session/');
  });

  it('should have a log in form', async() => {
    await expect(page.title()).resolves.toMatch('Log In');
  })
})