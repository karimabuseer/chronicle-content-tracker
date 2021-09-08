describe('New book page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/books/new');
  });

  it('should be titled "Add Book"', async () => {
    await expect(page.title()).resolves.toMatch('Add Book');
  });
});