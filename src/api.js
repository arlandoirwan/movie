import axios from 'axios'
const apiKey = process.env.REACT_APP_TMDB_KEY
const baseURL = process.env.REACT_APP_BASE_URL

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`)
  console.log({ movieList: movie })
  return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${q}&api_key=${apiKey}`,
  )
  return search.data
}
