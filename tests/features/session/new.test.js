describe('Log In Page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/session/new');
  });

  it('should have a log in form', async() => {
    const title =  await page.$eval('h1', el => el.innerText);
    expect(title).toMatch('Log In');
  })
})