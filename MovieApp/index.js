// https://api.themoviedb.org/3/movie/157336?api_key=5b6cf6d5177f63298304bc1516552299

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

const API_KEY = "api_key=5b6cf6d5177f63298304bc1516552299";
const API_URL = "https://api.themoviedb.org/3";

const MOVIE_URL =  `${API_URL}/movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const searchMovie = `${API_URL}/search/movie?${API_KEY}`;
// const SEARCH_URL = "";


console.log(MOVIE_URL);

const getMovies = (url) => {
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        console.log(data.results);
        showMovies(data.results);
    })
    .catch((error)=> console.log(error)) 
}


getMovies(MOVIE_URL);

const movieContainer = document.querySelector(".movieContainer");

const showMovies = (movies) => {
    movieContainer.innerHTML = ""
    movies.forEach(movie => {
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement("div");
        divTag.classList.add("movieDetails");
        divTag.innerHTML  = `
        <img src="${IMAGE_URL}${poster_path}" alt="">
                <div class="movieTitle">
                    <p>${title}</p>
                    <p>${vote_average}</p>
                </div>
                <h2>Overview</h2>
                <p>
                ${overview}
                </p>
        `;
        movieContainer.appendChild(divTag);
    });
}

const form = document.querySelector(".search");
const search = document.getElementById('searchInput')

console.log(form)
console.log(search)
form.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchValue = search.value;
        if (searchValue){
            getMovies(searchMovie + "&query=" + searchValue);
        } else {
            getMovies(API_URL);
        }
    })
    
// class
// const form = document.querySelector(".search");
// const search = document.querySelector("#searchInput");

// form.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     const searchValue = search.value;
//     if (searchValue){
//         getMovies(SEARCH_URL + "&query=" + searchValue);
//     } else {
//         getMovies(API_URL);
//     }
// })


// Class end

// Orisha
/*
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";
const searchMovie = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch(error => console.log(error));
};


const search = document.forms["search"];
search.addEventListener("keyup", (event) => {
    event.preventDefault();
    let inputText = event.target.value;
    const url = SEARCH_URL + inputText + "&" + API_KEY;
    movieContainer.innerHTML = "";
    searchMovie(url);

});
*/