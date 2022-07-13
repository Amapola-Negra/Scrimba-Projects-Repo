/**____________Variables_____________ */
let watchList = JSON.parse(localStorage.getItem('watchList')) || []
const notMovieList = document.getElementById("not-movie-list")
const moviesWatchlist = document.getElementById("movies-watchlist")
let filmsStored = []
let film 
/**______________ Initial state__________________ */
function displayElements(){
    notMovieList.style.display = "block"
    moviesWatchlist.style.display = "none"
}
displayElements()
/**____________Retrieve all the films I have stored _________________*/
function gimeDataStored(){
    let displayWatchList = watchList.map(film =>{
        fetch(`https://www.omdbapi.com/?i=${film}&apikey=eebe71d6`)
        .then(response => response.json())
        .then(data =>{
            filmsStored = {
               id: film,
               poster: data.Poster,
               title: data.Title,
               rating: data.imdbRating,
               runtime: data.Runtime,
               genre: data.Genre,
               plot: data.Plot
           }
           renderWatchList()
        })
    })
}
if (watchList.length > 0){
    gimeDataStored()
}
/**_____________Remove films _________________________ */
function removeFilms(film){
    if (watchList.indexOf(`${film.id}`)!== -1){
        watchList.splice(watchList.indexOf(`${film.id}`), 1)
    }
    
    localStorage.setItem('watchList', JSON.stringify(watchList));
    watchList = JSON.parse(localStorage.getItem('watchList'))
    filmsStored = []
    moviesWatchlist.innerHTML =""
    gimeDataStored()
    if (filmsStored.length === 0){
        displayElements()
    }
}
function renderWatchList(){
    notMovieList.style.display = "none"
    moviesWatchlist.style.display = "block"
    moviesWatchlist.innerHTML += `
        <div class="movie">
            <img class="movie-img" src=${filmsStored.poster}>
            <div class="movie-items">
                <div class="title-ratings">
                    <h2 class="film-title">${filmsStored.title}</h2>
                    <img src="images/star.png">
                    <p class="film-info">${filmsStored.rating}</p>
                </div>
                <div class="film-info movie-details">
                    <p>${filmsStored.runtime}</p>
                    <p>${filmsStored.genre}</p>
                    <div>
                        <button id="${filmsStored.id}" class="watchlist-btn"
                            onClick="removeFilms(${filmsStored.id})">
                            <img src="images/minus.png">
                            <p>Watchlist</p>
                        </button>
                    </div>
                </div>
                <p>${filmsStored.plot}</p>
            </div>
        </div>
        `
}
