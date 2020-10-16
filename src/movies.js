// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let getAllDirectors = (movies) => {
 return movies.map((movie) => movie.director); 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = (movies) => {
    if (movies.length === 0)
    return 0;
   let spielbergDramaMovies = movies.filter(movie => {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg"; // 'includes' because its an array
    }); 
    return spielbergDramaMovies.length; // because they want the number 1 and not the name 
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (movies) => {
    if (movies.length === 0) {
        return 0;
    }
   let reduceSum = movies.reduce((accumulator, currentValue) => {
     if(!currentValue.rate){
        currentValue.rate = 0;
    }
        return accumulator + currentValue.rate;
    }, 0);
    console.log("reduceSum", reduceSum);
    let avg = reduceSum / movies.length;
    
    return Number(avg.toFixed(2));

   /* let totalSum = 0;
    movies.forEach((movie) => {
        if(!movie.rate){
            movie.rate = 0;
        }
        totalSum += movie.rate;
    }); 
    let average = totalSum / movies.length;
    return Number(average.toFixed(2)); 
    */
}

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (movies) => {
 
    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
};




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    let orderedMovies = movies.sort((movie1, movie2) => {
        if(movie1.year === movie2.year) {
            if(movie1.title > movie2.title) {
                return 1;
            } else {
                return -1;
            }
        } else {
            if (movie1.year > movie2.year) {
                return 1;
            }else {
                return -1;
            }
        }
    });
    // spread Operator - spreads items from one array: build a new array and spread the items
    return [...orderedMovies]; // [... array]
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (movies) => {
    let orderedArray = [...movies].sort((movie1,movie2) => { // [...movies] so it doesnt mutate the original array
        if(movie1.title > movie2.title) {
            return 1;
        }else{
            return -1;
        }
    }).slice(0, 20);
    return orderedArray.map(movie => movie.title);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
