describe('New book page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/books/new');
  });

  it('should be titled "Add Book"', async () => {
    await expect(page.title()).resolves.toMatch('Add Book');
  });

  it('should display new book in books list', async() => {
    await page.type('#title', 'Harry Potter');
    await page.type('#author', 'JK Rowling');
    await page.click('#Add Book');

    await page.goto('http://localhost:3000/books');

    const title =  await page.$eval('.title', el => el.innerText);
    const author =  await page.$eval('.author', el => el.innerText);

    await expect(title).resolves.toMatch('Harry Potter');
    await expect(author).resolves.toMatch('JK Rowling');
  
  })
});

