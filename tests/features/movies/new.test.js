describe('New movie page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/movies/new');
  });

  it('should be titled "Add Movie"', async () => {
    await expect(page.title()).resolves.toMatch('Add Movie');
  });

  it('should display the new movie on the page', async() => {
    await expect(page).toFillForm('form[name="new_movie"]', {
      title: 'Avatar',
      director: 'James Cameron',
    })
    await page.click('#add_movie');
    
    const title =  await page.$eval('.title', el => el.innerText);
    const director =  await page.$eval('.director', el => el.innerText);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(bodyHTML)

    await expect(title).toMatch('Avatar');
    await expect(director).toMatch('James Cameron');
  
  })
});