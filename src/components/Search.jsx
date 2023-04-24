import { component$ } from '@builder.io/qwik'
import styles from './Search.module.css'

export default component$(() => {
  return (
    <form class={styles.container}>
      <input id="search" placeholder="The Matrix, Pulp Fiction..." />
      <button>Search</button>
    </form>
  )
})
