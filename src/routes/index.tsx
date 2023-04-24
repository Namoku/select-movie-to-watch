import { component$, useSignal, useTask$ } from '@builder.io/qwik'
import Search from '~/components/Search'
import getMovies from '~/services/getMovies'
import type { Movie } from '~/types'

export default component$(() => {
  const movies = useSignal<Movie[]>([])

  useTask$(async () => {
    const data = await getMovies({ search: 'avengers' })
    movies.value = data
  })

  return (
    <div class="page">
      <header>
        <h1>Search movies</h1>
        <Search />
      </header>
      <main>
        <ul>
          {movies.value.map((movie) => (
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
