const $movieResult = document.querySelector('#movieresult');
const $description = document.querySelector('#description');
const $poster = document.querySelector('#poster');
const api = '824edc3661f79aedff20cdda9e6efacd';
let totalResults;
let page = 1;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=Star+Trek&page=${page}`;
const imagesBaseURL = `https://image.tmdb.org/t/p/w300`;

const trekMovies = [];


function displayMovie(movie){
    console.log(movie);
    $movieResult.textContent = movie.title;
    $poster.src = imagesBaseURL + movie.poster_path;
    $description.textContent = movie.overview
}

function pickMovie(movieArray){
    console.log(movieArray.length);
    const randomMovie = Math.floor(Math.random() * movieArray.length);
    displayMovie(movieArray[randomMovie]);
};


function getResults(){
    fetch(url)
        .then(result => result.json())
        .then(data => { 
            totalResults = data.total_pages;
            trekMovies.push(...data.results);
            pickMovie(trekMovies);
        })
    }
getResults();
