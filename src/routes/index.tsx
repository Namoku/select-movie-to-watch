import { component$ } from '@builder.io/qwik'
import Search from '~/components/Search'
import useMovies from '~/hooks/useMovies'

export default component$(() => {
  const { movies, search } = useMovies()

  return (
    <div class="page">
      <header>
        <h1>Search movies</h1>
        <Search search={search} />
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
