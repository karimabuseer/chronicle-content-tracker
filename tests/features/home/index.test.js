describe('Chronicle homepage', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
  });

  it('should be redirect you to the log in page if you are not logged in', async () => {
    await expect(page.url()).toMatch('http://localhost:3000/session/new');
  });

  it('should be titled "Chronicle"', async () => {
    await expect(page.title()).resolves.toMatch('Chronicle');
  });
});