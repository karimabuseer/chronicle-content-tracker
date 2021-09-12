document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Script loaded')
  $(".anim").hide();
  const game = new Game();
  const searchButton = document.getElementById('book-search-submit');
  let scoreTable = document.getElementById('scoreTables');


  searchButton.addEventListener( 'submit', (event) => {
    console.log('I have been clicked')
    event.preventDefault();
  });
});