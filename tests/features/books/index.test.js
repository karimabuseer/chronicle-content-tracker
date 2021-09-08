describe('Book list page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/books');
  });

  it('should be titled "Books List"', async () => {
    await expect(page.title()).resolves.toMatch('Books List');
  });
});