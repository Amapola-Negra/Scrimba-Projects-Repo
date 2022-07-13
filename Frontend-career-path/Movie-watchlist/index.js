/**___________Variables___________________ */
let idArray = []
let watchList = JSON.parse(localStorage.getItem('watchList')) || []
let filmsSearched = []
const searchBtn = document.getElementById("search-btn")
const searchValue = document.getElementById("search-value")
const searchInput = document.getElementById("search-input")
const moviesContainer = document.getElementById("movies-container")
const notMovie = document.getElementById("not-movie")
const startMovie = document.getElementById("start-movie")
/**______initial state_______________ */
notMovie.style.display = "none"
moviesContainer.style.display ="none"
/** _____________ASK FOR MOVIE TITLE____________________ */
function gimeTitle(){
    searchValue.addEventListener("submit", function(e){
        e.preventDefault()
        startMovie.style.display = "none"
        const searchInputValue = searchInput.value
        if (searchInput.value !== ""){
            fetch(`https://www.omdbapi.com/?s=${searchInputValue}&apikey=eebe71d6`)
                .then(response => response.json())
                .then(data =>{
                    /*I'm filtering the response in order to avoid error messages*/
                    if (data.Response == "False"){
                        notMovie.style.display = "block"
                        moviesContainer.style.display ="none"
                    }else{
                        notMovie.style.display = "none"
                        moviesContainer.style.display ="flex"
                        /**Get all the pictures related with what I was looking for */
                        idArray = data.Search.map(item =>{
                            return item.imdbID
                        })
                        gimeData()
                    }
                })
        searchInput.value = ""
        moviesContainer.innerHTML = ""
        }else{
            notMovie.style.display = "block"
            moviesContainer.style.display ="none"
        }
    })
}
gimeTitle()

/**_____________Here I collect the data pertaining to each film to use it later____________________ */
 function gimeData(){
   let films = idArray.map(movieID =>{
       fetch(`https://www.omdbapi.com/?i=${movieID}&apikey=eebe71d6`)
        .then(response => response.json())
        .then(data => {
           /* I'm filtering here those pictures with no data available in order to avoid errors*/
           if (data.Poster !== "N/A" 
                && data.imdbRating !== "N/A" 
                && data.Runtime !== "N/A" 
                && data.Genre !== "N/A" 
                && data.Plot !== "N/A"){
                filmsSearched = {
                        id: movieID,
                        poster: data.Poster,
                        title: data.Title,
                        rating: data.imdbRating,
                        runtime: data.Runtime,
                        genre: data.Genre,
                        plot: data.Plot
                }
                renderFilms()   
           }
        })
   }) 
}

/**________________Collect the movies to display in the watchlist __________________ */

function addToWatchlist(movieID){
    /**I have to filter here if the movie is already on the list or not */
   if(watchList.length > 0){
        if (watchList.indexOf(movieID.id)=== -1){
            watchList.push(movieID.id)
        }
   }else{
        watchList.push(movieID.id)
    }
    localStorage.setItem('watchList', JSON.stringify(watchList));  
}

/**___________Display the data on the screen_________________*/
function renderFilms(){
    /** DATA TO DISPLAY 
 * Image (data.Poster)
 * Title (data.Title)
 * Ratings (data.imdbRating)
 * Runtime (data.Runtime)
 * Genre (data.Genre)
 * Plot (data.Plot)
*/
    moviesContainer.innerHTML +=  `<div class="movie">
                    <img class="movie-img" src=${filmsSearched.poster}>
                    <div class="movie-items">
                        <div class="title-ratings">
                            <h2 class="film-title">${filmsSearched.title}</h2>
                            <img src="images/star.png">
                            <p class="film-info">${filmsSearched.rating}</p>
                        </div>
                        <div class="film-info movie-details">
                            <p>${filmsSearched.runtime}</p>
                            <p>${filmsSearched.genre}</p>
                            <div >
                                <button class="watchlist-btn" id="${filmsSearched.id}" 
                                    onClick="addToWatchlist(${filmsSearched.id})">
                                    <img src="images/plus.png">
                                    Watchlist
                                </button>
                            </div>
                        </div>
                        <p>${filmsSearched.plot}</p>
                    </div>
                </div> `
}




    
    


