document.addEventListener('DOMContentLoaded', (event) => {
  const searchButton = document.getElementById('book-search-submit');
  const list = document.getElementById('book-list-results');

  let createBookCardFormElement = ((bookAttributes, bookForm) => {
    for( j = 0; j < bookAttributes.length; j++) {
      const element = document.createElement("input")
      element.setAttribute("type", "hidden")
      element.setAttribute("name", bookAttributes.keys(j))
      element.setAttribute("value", bookAttributes[bookAttributes.keys(j)])
      bookForm.appendChild(element)
    }
  })

  let createBookCard = ((bookResult) => { 
    const newDiv = document.createElement("div");
    newDiv.classList.add("book-card");
    const imgTag = document.createElement("img")
    const titleTag = document.createElement("h3")
    const authorTag = document.createElement("h4")
    const descriptionTag = document.createElement("p")
    const addButton = document.createElement("input")
    const bookForm = document.createElement("form")
    const bookAttributes = {
      "title": bookResult.volumeInfo.title, 
      "author": bookResult.volumeInfo.authors[0], 
      "description": bookResult.volumeInfo.description, 
      "image": bookResult.volumeInfo.imageLinks.thumbnail, 
      "isbn": bookResult.volumeInfo.industryIdentifiers[0].identifier
    };

    createBookCardFormElement(bookAttributes, bookForm);
  
    bookForm.appendChild(addButton)
    bookForm.setAttribute("method", "post")

    addButton.classList.add('button')
    addButton.setAttribute("type", "submit")
    addButton.innerHTML = ("Add book")

    imgTag.src = bookResult.volumeInfo.imageLinks.thumbnail;
    imgTag.alt = `${bookResult.volumeInfo.title} cover image`
    titleTag.innerHTML = bookResult.volumeInfo.title;
    authorTag.innerHTML = bookResult.volumeInfo.authors[0]
    descriptionTag.innerHTML = bookResult.volumeInfo.description
    newDiv.appendChild(imgTag);
    newDiv.appendChild(titleTag);
    newDiv.appendChild(authorTag);
    newDiv.appendChild(descriptionTag);
    newDiv.appendChild(bookForm);
    list.appendChild(newDiv);
  })

  searchButton.addEventListener( 'click', (event) => {
    event.preventDefault();
    list.innerHTML = "";
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