function MoviesAndHintsRepository({moviesAndHints}){

    return {
        getMovieAndHints: getMovieAndHints
    };

    function getMovieAndHints(){
        let movieAndHints = moviesAndHints[Math.floor(Math.random() * moviesAndHints.length)];
        return {
            movieTitle: movieAndHints.title,
            hints: movieAndHints.hints
        };
    }
}

module.exports = MoviesAndHintsRepository;