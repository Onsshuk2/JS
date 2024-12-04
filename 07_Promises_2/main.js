const myURL = "https://www.omdbapi.com/?apikey=3d82d368&s";  

async function searchMovies(title, type, page = 1) {
    const url = `${myURL}&s=${title}&page=${page}`;
    
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data.Response === "True") {
                displayResults(data.Search);
                setupPagination(title, type, Math.ceil(data.totalResults / 10), page);
            } else {
                displayMessage("Movie not found!");
            }
        } else {
            console.error("Error fetching data: HTTP error " + response.status);
            displayMessage("Failed to load data.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        displayMessage("Failed to load data.");
    }
}

function displayResults(movies) {
    const resultsContainer = document.getElementById("movies-list");
    resultsContainer.innerHTML = ''; 
    if (movies.length === 0) {
        resultsContainer.innerHTML = "<p>No movies found.</p>";
        return;
    }

    const movieList = movies.map(movie => `
        <div class="movie col-4 m-3" style="cursor: pointer; background-color:rgb(237, 215, 230,0.2); border-radius:20px;" data-imdbid="${movie.imdbID}">
            <h5>${movie.Title}</h5>
            <img src="${movie.Poster}" alt="Poster">
            <p>Year: ${movie.Year}</p>
            <p>Type: ${movie.Type}</p>
        </div>
    `).join('');

    resultsContainer.innerHTML = movieList;

    
    const movieItems = document.querySelectorAll('.movie');
    movieItems.forEach(item => {
        item.addEventListener('click', () => {
            const imdbID = item.getAttribute('data-imdbid');
            getMovieDetails(imdbID);
        });
    });
}

async function getMovieDetails(imdbID) {
    const url = `https://www.omdbapi.com/?apikey=3d82d368&i=${imdbID}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data.Response === "True") {
                displayMovieDetails(data);
            } else {
                displayMessage("Movie details not found.");
            }
        } else {
            console.error("Error fetching data: HTTP error " + response.status);
            displayMessage("Failed to load data.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        displayMessage("Failed to load data.");
    }
}

function displayMovieDetails(movie) {
    const movieDetails = document.getElementById('movie-details');
    
    movieDetails.innerHTML = `
        <div class="movie-detail-card">
            <div class="movie-poster">
                <img src="${movie.Poster}" alt="${movie.Title}">
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.Title}</h3>
                <p><strong>Year:</strong> ${movie.Year}</p>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
               <p><strong>Director:</strong> ${movie.Director}</p>
                <p><strong>Actors:</strong> ${movie.Actors}</p>
                <p><strong>Plot:</strong> ${movie.Plot}</p>
            </div>
        </div>
    `;
}

function displayMessage(message) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = `<p>${message}</p>`;
}

function setupPagination(title, type, totalPages, currentPage) {
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = '';

    const totalPagesToShow = Math.min(totalPages, 5); 
    let paginationHTML = '';

    for (let page = 1; page <= totalPagesToShow; page++) {
        paginationHTML += `
            <button class="page-button" data-page="${page}" ${page === currentPage ? 'disabled' : ''}>
                ${page}
            </button>
        `;
    }
    
    paginationContainer.innerHTML = paginationHTML;

    const pageButtons = paginationContainer.querySelectorAll(".page-button");
    pageButtons.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("data-page");
            searchMovies(title, type, page);
        });
    });
}

document.getElementById("search-button").addEventListener("click", () => {
    const title = document.getElementById("movie-title").value;
    const type = document.getElementById("type-select").value;
    if (title) {
        searchMovies(title, type);
    } else {
        displayMessage("Please enter a movie title.");
    }
});
