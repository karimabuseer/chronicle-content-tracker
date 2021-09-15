document.addEventListener('DOMContentLoaded', (event) => {
  const searchButton = document.getElementById('movie-search-submit');
  const list = document.getElementById('movie-list-results');

  let createMovieCardFormElement = ((key, value) => {
      const element = document.createElement("input")
      element.setAttribute("type", "hidden")
      element.setAttribute("name", key)
      element.setAttribute("value", value)
      return element
  })

  let createMovieCard = ((movieResult) => { 
    //create box
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.classList.add("card");
    movieCard.classList.add("flex-row");

    //create body
    const cardBody = document.createElement("div");
    cardBody.classList.add("movie-body");

    //create img
    const imgWrapper = document.createElement("div");
    const imgTag = document.createElement("img")
    imgTag.src = `https://image.tmdb.org/t/p/w154/${movieResult.poster_path}`;
    imgTag.alt = `${movieResult.title} cover image`
    imgWrapper.appendChild(imgTag);
    
    //set title
    const titleTag = document.createElement("h3")
    titleTag.innerHTML = movieResult.title;

    //set autor
    const releaseTag = document.createElement("h5")
    releaseTag.innerHTML = `First released: ${movieResult.release_date}`

    //set description
    const descriptionTag = document.createElement("p")
    descriptionTag.innerHTML = movieResult.overview

    // create add form
    const movieForm = document.createElement("form")
    movieForm.setAttribute("method", "POST")
    const movieAttributes = {
      "title": movieResult.title, 
      "releaseDate": movieResult.release_date, 
      "description":  movieResult.overview, 
      "image": `https://image.tmdb.org/t/p/w154/${movieResult.poster_path}`, 
    };

    for( j = 0; j < Object.keys(movieAttributes).length; j++) {
      let key = Object.keys(movieAttributes)[j]
      let value = movieAttributes[key]
      let element = createMovieCardFormElement(key, value);
      movieForm.appendChild(element);
    }
    
    // create add form button
    const addButton = document.createElement("button")
    movieForm.setAttribute("method", "POST")
    addButton.classList.add('button')
    addButton.classList.add('btn')
    addButton.setAttribute("type", "submit")
    addButton.innerHTML = ("Add movie")
    movieForm.appendChild(addButton)

    movieCard.appendChild(imgWrapper);
    cardBody.appendChild(titleTag);
    cardBody.appendChild(releaseTag);
    cardBody.appendChild(descriptionTag);
    cardBody.appendChild(movieForm);
    movieCard.appendChild(cardBody);
    list.appendChild(movieCard);
  })



  searchButton.addEventListener( 'click', (event) => {
    event.preventDefault();
    const query = document.getElementById('movie-search-query').value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=38fbfe658e2293a5ff72803359f32c61&query=${query}`)
    .then(response => response.json())
    .then(data => { return data.results } )
    .then(movieResults => {
      console.log(movieResults)
      for (i = 0; i < movieResults.length; i++ ) {
      createMovieCard(movieResults[i])
      }
    })
    .catch(err => {
      console.error(err);
    });
    
  });
  
})