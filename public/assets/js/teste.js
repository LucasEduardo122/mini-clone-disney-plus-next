const API_KEY = '03c4e3dc470296959d6bf68804146538'
const API_LANGUAGE = 'pt-br'
const BASE_URL_IMAGE = {
  original: 'https://image.tmdb.org/t/p/original',
  small: 'https://image.tmdb.org/t/p/w500'
}

const movies = []
const moviesElement = window.document.getElementById('movies')

function getUrlMovie(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${API_LANGUAGE}`
}

function changeButtonMenu() {
  const button = window.document.querySelector('.button__menu')
  const navigation = window.document.querySelector('.navigation')

  console.log(movies)


  button.classList.toggle('active')
  navigation.classList.toggle('active')
}

function setMainMovie(movie) {
  const appImage2 = window.document.querySelector('.app__image img#image')
  const appImage = window.document.querySelector('.app__image img')
  const title = window.document.querySelector('.feature__movie h1')
  const description = window.document.querySelector('.feature__movie p')
  const info = window.document.querySelector('.feature__movie span')
  const rating = window.document.querySelector('.rating strong')


  title.innerHTML = movie.title
  description.innerHTML = movie.overview
  rating.innerHTML = movie.vote_average
  info.innerHTML = movie.release + ' - ' + movie.genre + ' - Movie'

  appImage.setAttribute('src', movie.image.original)
  appImage2.setAttribute('src', movie.image.original)
  appImage2.setAttribute('srcset', movie.image.original)
}

function changeMainMovie(movieId) {
  const movie = movies.find(movie => movie.id === movieId)

  setMainMovie(movie)
  changeButtonMenu()
}

function createButtonMovie(movieId) {
  const button = window.document.createElement('button')
  button.setAttribute('onclick', `changeMainMovie('${movieId}')`)
  button.innerHTML = '<img src="assets/images/icon-play-button.png" alt="Icon play button" />'

  return button
}

function createImageMovie(movieImage, movieTitle) {
  const divImageMovie = window.document.createElement('div')
  divImageMovie.classList.add('movie__image')

  const image = window.document.createElement('img')

  image.setAttribute('src', movieImage)
  image.setAttribute('alt', `Imagem do filme ${movieTitle}`)
  image.setAttribute('loading', 'lazy')

  divImageMovie.appendChild(image)

  return divImageMovie
}

function addMovieInList(movie) {
  const movieElement = window.document.createElement('li')
  movieElement.classList.add('movie')

  const genre = `<span>${movie.genre}</span>`
  const title = `<strong>${movie.title}</strong>`

  movieElement.innerHTML = genre + title
  movieElement.appendChild(createButtonMovie(movie.id))
  movieElement.appendChild(createImageMovie(movie.image.small, movie.title))

  moviesElement.appendChild(movieElement)
}

function loadMovies() {
  const LIST_MOVIES = ['tt12801262', 'tt4823776', 'tt2096673', 'tt5109280', 'tt7146812', 'tt2948372', 'tt2953050', 'tt3521164']

  LIST_MOVIES.map((movie, index) => {
    fetch(getUrlMovie(movie)).then(response => response.json()).then(data => {

      const movieData = {
        id: movie,
        title: data.title,
        overview: data.overview,
        vote_average: data.vote_average,
        genre: data.genres[0].name,
        release: data.release_date.split('-')[0],
        image: {
          original: BASE_URL_IMAGE.original.concat(data.backdrop_path),
          small: BASE_URL_IMAGE.small.concat(data.backdrop_path),
        }
      }

      movies.push(movieData)

      if (index === 0) {
        setMainMovie(movieData)
      }

      addMovieInList(movieData)
    })
  })
}

loadMovies()