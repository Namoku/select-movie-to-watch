import { component$, useSignal, useTask$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import Search from '~/components/Search'
import getMovies from '~/services/getMovies'
import type { Movie } from '~/types'

const getAllMovies = server$(
  async (value: string) => await getMovies({ search: value })
)

export default component$(() => {
  const movies = useSignal<Movie[]>([])
  const search = useSignal('')

  useTask$(async ({ track, cleanup }) => {
    track(() => search.value)
    const debounce = setTimeout(async () => {
      const data = await getAllMovies(search.value)
      movies.value = data
    }, 300)
    cleanup(() => clearTimeout(debounce))
  })

  return (
    <div class="page">
      <header>
        <h1>Search movies</h1>
        <Search search={search} />
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
