document.addEventListener('DOMContentLoaded', (event) => {
  const searchButton = document.getElementById('book-search-submit');
  const list = document.getElementById('book-list-results');

  let createBookCardFormElement = ((key, value) => {
      const element = document.createElement("input")
      element.setAttribute("type", "hidden")
      element.setAttribute("name", key)
      element.setAttribute("value", value)
      return element
  })

  let createBookCard = ((bookResult) => { 
    //create box
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.classList.add("card");
    bookCard.classList.add("flex-row");

    //create body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //create img
    const imgWrapper = document.createElement("div");
    const imgTag = document.createElement("img")
    imgTag.src = bookResult.volumeInfo.imageLinks.thumbnail;
    imgTag.alt = `${bookResult.volumeInfo.title} cover image`
    imgWrapper.appendChild(imgTag);
    
    //set title
    const titleTag = document.createElement("h3")
    titleTag.innerHTML = bookResult.volumeInfo.title;

    //set autor
    const authorTag = document.createElement("h4")
    authorTag.innerHTML = bookResult.volumeInfo.authors[0]

    //set description
    const descriptionTag = document.createElement("p")
    descriptionTag.innerHTML = bookResult.volumeInfo.description

    //create add form
    const bookForm = document.createElement("form")
    bookForm.setAttribute("method", "POST")
    const bookAttributes = {
      "title": bookResult.volumeInfo.title, 
      "author": bookResult.volumeInfo.authors[0], 
      "description": bookResult.volumeInfo.description, 
      "image": bookResult.volumeInfo.imageLinks.thumbnail, 
      "isbn": bookResult.volumeInfo.industryIdentifiers[0].identifier
    };

    for( j = 0; j < Object.keys(bookAttributes).length; j++) {
      let key = Object.keys(bookAttributes)[j]
      let value = bookAttributes[key]
      let element = createBookCardFormElement(key, value);
      bookForm.appendChild(element);
    }
    
    //create add form button
    const addButton = document.createElement("button")
    bookForm.setAttribute("method", "POST")
    addButton.classList.add('button')
    addButton.classList.add('btn')
    addButton.setAttribute("type", "submit")
    addButton.innerHTML = ("Add book")
    bookForm.appendChild(addButton)

    bookCard.appendChild(imgWrapper);
    cardBody.appendChild(titleTag);
    cardBody.appendChild(authorTag);
    cardBody.appendChild(descriptionTag);
    cardBody.appendChild(bookForm);
    bookCard.appendChild(cardBody);
    list.appendChild(bookCard);
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