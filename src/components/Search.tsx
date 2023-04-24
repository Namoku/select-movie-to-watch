import type { Signal } from '@builder.io/qwik'
import { component$ } from '@builder.io/qwik'
import styles from './Search.module.css'

export default component$(({ search }: { search: Signal<string> }) => {
  return (
    <form class={styles.container}>
      <input
        id="search"
        placeholder="The Matrix, Pulp Fiction..."
        bind:value={search}
      />
      <button>Search</button>
    </form>
  )
})
