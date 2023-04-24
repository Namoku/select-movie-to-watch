import { component$ } from '@builder.io/qwik'
import Search from '~/components/Search'
import MOVIES from '../mocks/movies.json'

function getMovies() {
  const movies = MOVIES.Search.map((movie) => ({
    id: movie.imdbID,
    poster: movie.Poster,
    type: movie.Type,
    title: movie.Title,
    year: movie.Year,
  }))
  return movies as {
    id: string
    poster: string
    type: string
    title: string
    year: string
  }[]
}

export default component$(() => {
  const movies = getMovies()
  return (
    <div class="page">
      <header>
        <h1>Search movies</h1>
        <Search />
      </header>
      <main>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <article>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
})
