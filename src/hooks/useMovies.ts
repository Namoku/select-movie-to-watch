import { useSignal, useTask$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import getMovies from '~/services/getMovies'
import type { Movie } from '~/types'

const getAllMovies = server$(
  async (value: string) => await getMovies({ search: value })
)

export default function useMovies() {
  const search = useSignal('')
  const movies = useSignal<Movie[]>([])
  const loading = useSignal<boolean>(false)

  useTask$(async ({ track, cleanup }) => {
    track(() => search.value)
    const debounce = setTimeout(async () => {
      loading.value = true
      const data = await getAllMovies(search.value)
      loading.value = false
      movies.value = data
    }, 300)
    cleanup(() => clearTimeout(debounce))
  })

  return { movies: movies.value, loading: loading.value, search }
}
