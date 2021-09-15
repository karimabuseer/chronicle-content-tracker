describe('Add books', () => {

  beforeEach(async () => {
    await page.goto('http://localhost:3000/users/new');
    await expect(page).toFillForm('form[name="sign-up-form"]', {
      username: 'username',
      email: 'email@email.com',
      password: 'password'
    })
    await page.click('#sign-up-button');
    await page.waitForNavigation();
    await page.goto('http://localhost:3000/books');
  });

  it('should display new book in user books list', async() => {
    await expect(page.url()).toMatch('http://localhost:3000/books');
    await expect(page).toFillForm('form[id="book-search-form"]', {
      booksearch: 'Dune',
    })
    
    await page.click('#0593200101');

    await expect(page.url()).toMatch('http://localhost:3000/users/1/books');
    
    //this needs updating
    const title =  await page.$eval('.title', el => el.innerText);
    const author =  await page.$eval('.author', el => el.innerText);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(bodyHTML)

    await expect(title).toMatch('Harry Potter');
    await expect(author).toMatch('JK Rowling');
  
  })
});

