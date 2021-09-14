describe('Chronicle homepage', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
  });

  it('should be titled "Chronicle"', async () => {
    await expect(page.title()).resolves.toMatch('Chronicle');
  });
});