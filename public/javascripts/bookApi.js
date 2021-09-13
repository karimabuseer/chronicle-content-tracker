document.addEventListener('DOMContentLoaded', (event) => {
  // import dotenv from "dotenv";
  // const api_key = process.env.GOOGLE_BOOKS_API
  // console.log('Script loaded')
  // console.log(api_key)
  $(".anim").hide();
  const searchButton = document.getElementById('book-search-submit');
  const form = document.getElementById('book-search-form');
  const list = document.getElementById('book-list-results');

  let createBookCard = ((bookResult) => { 
    const newDiv = document.createElement("div");
    newDiv.classList.add("book-card");
    const imgTag = document.createElement("img")
    const titleTag = document.createElement("h3")
    const authorTag = document.createElement("h4")
    const descriptionTag = document.createElement("p")
    imgTag.src = bookResult.volumeInfo.imageLinks.thumbnail;
    imgTag.alt = `${bookResult.volumeInfo.title} cover image`
    titleTag.innerHTML = bookResult.volumeInfo.title;
    authorTag.innerHTML = bookResult.volumeInfo.authors[0]
    descriptionTag.innerHTML = bookResult.volumeInfo.description
    newDiv.appendChild(imgTag);
    newDiv.appendChild(titleTag)
    newDiv.appendChild(authorTag)
    newDiv.appendChild(descriptionTag)
    list.appendChild(newDiv);
  })

  searchButton.addEventListener( 'click', (event) => {
    event.preventDefault();
    const query = document.getElementById('book-search-query').value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCKQ0s_7lFUeJA3GSYhcsXP8tPAX9O36xQ`)
    .then(response => response.json())
    .then((data) => {return data.items})
    .then((bookResults) => {
      for (i = 0; i < bookResults.length; i++ ) {
        createBookCard(bookResults[i]);
      }
    });
  });


});