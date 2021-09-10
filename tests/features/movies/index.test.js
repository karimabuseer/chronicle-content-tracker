describe('Movies index page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/movies');
  });

  it('should be titled "Movies"', async () => {
    await expect(page.title()).resolves.toMatch('Movies');
  });
});