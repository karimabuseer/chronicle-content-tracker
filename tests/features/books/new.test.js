describe('New book page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/books/new');
  });

  it('should be titled "Add Book"', async () => {
    await expect(page.title()).resolves.toMatch('Add Book');
  });

  it('should display new book in books list', async() => {
    await expect(page).toFillForm('form[name="new_book"]', {
      title: 'Harry Potter',
      author: 'JK Rowling',
    })
    await page.click('#add_book');
    
    const title =  await page.$eval('.title', el => el.innerText);
    const author =  await page.$eval('.author', el => el.innerText);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(bodyHTML)

    await expect(title).toMatch('Harry Potter');
    await expect(author).toMatch('JK Rowling');
  
  })
});

