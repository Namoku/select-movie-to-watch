import type { Movie } from '~/types'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY ?? ''

export default async function getMovies({ search }: { search: string }) {
  const url = new URL('https://www.omdbapi.com/')
  url.searchParams.set('apikey', API_KEY)
  url.searchParams.set('s', search)

  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)

  const movies = data.Search.map((movie: any) => ({
    id: movie.imdbID,
    poster: movie.Poster,
    type: movie.Type,
    title: movie.Title,
    year: movie.Year,
  }))
  return movies as Movie[]
}
