import { Card, Col, Container, Row, Image } from 'react-bootstrap'

import { getMovieList, searchMovie } from '../api'
import { useEffect, useState } from 'react'

const SuperHero = () => {
  const [popularMovie, setPopularMovie] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result)
    })
  }, [])

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovie(query.results)
    }
  }
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white">List Movie</h1>
        <input
          placeholder="cari film anda..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        ></input>

        <Row>
          {popularMovie.map((movie) => {
            return (
              <Col md={4} className="movieWrapper" id="super">
                <Card className="bg-white movieImage">
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
                    alt="Card image"
                    className="Imange"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">
                        {movie.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        realse date: {movie.release_date}
                      </Card.Text>
                      <Card.Text className="text-center">
                        <i>Ratings: {movie.vote_average}</i>
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
export default SuperHero
