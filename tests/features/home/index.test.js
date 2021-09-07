describe('Chronicle homepage', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
  });

  it('should be titled "Noodle Gang"', async () => {
    await expect(page.title()).resolves.toMatch('Noodle Gang');
  });
});