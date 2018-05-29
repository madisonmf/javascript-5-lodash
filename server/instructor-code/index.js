const movies = require('./top-rated-movies-01.json');
// const lodash = require('lodash');
const flat = require('lodash/flat')

const titles = lodash.map(movies, 'imdbRating');
// console.log('titles', titles);


const user = {
  name: 'tyler',
  dob: 'asdf',
  awesomeness: 'mega',
  height: ' a perfect 6',
  children: [{
    name: 'zoobob',
    hairColor: 'blonde'
  }, {
    name: 'loobob',
  }]
};

const u = lodash.pick(user, ['name', 'awesomeness']);
console.log('-------------- u', u);

const hairColor = lodash.get(user, 'children[2].hairColor');
console.log('-------------- hairColor', hairColor);


const simplifiedMovies = movies.map(x => ({
  title: x.title,
  year: x.year
}));

const moviesByYear = lodash.groupBy(simplifiedMovies, 'year');
console.log('-------------- moviesByYear', );