/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    let strDuration = movie.duration
    let duration // We need to 

    // When strDuration === "Xh XXmin"
    if (strDuration.length === "Xh XXmin".length)
      duration = strDuration[0]*60 + strDuration[3]*10 + strDuration[4]*1
    // When strDuration === "Xh Xmin"
    if (strDuration.length === "Xh Xmin".length)
      duration = strDuration[0]*60 + strDuration[3]*1
    // When strDuration === "XXmin"
    if (strDuration.length === "XXmin".length)
      duration = strDuration[0]*10 + strDuration[1]*1
    // When strDuration === "Xh"
    if (strDuration.length === "Xh".length)
      duration = strDuration[0]*60

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: duration,
      genre: movie.genre,
      rate: movie.rate
    }
  })
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  if (movies.length === 0) return undefined
  let totalSum = movies.reduce((sum,movie)=>sum+Number(movie.rate), 0)
  let avg = totalSum / movies.length
  return Number(avg.toFixed(2))
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies
    .filter(movie => movie.genre.includes('Drama'))
  return ratesAverage(dramaMovies)
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  return movies
    .sort((movieA,movieB) => {
      // if movieA is before movieB, return -1
      if (movieA.duration < movieB.duration 
        || (movieA.duration === movieB.duration && movieA.title < movieB.title)) return -1
      else return 1
    })
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
