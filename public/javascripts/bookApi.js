document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Script loaded')
  $(".anim").hide();
  const searchButton = document.getElementById('book-search-submit');
  const form = document.getElementById('book-search-form');


  searchButton.addEventListener( 'click', (event) => {
    console.log('I have been clicked')
    event.preventDefault();
    const query = document.getElementById('book-search-query').value;
    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  });
});