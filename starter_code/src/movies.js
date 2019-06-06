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


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
