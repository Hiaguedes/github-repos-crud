import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Search from '@src/screens/Search'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Search Github Repo</title>
        <meta name="search page" content="page" />
      </Head>

      <main className={styles.main}>
        <Search />
      </main>
    </div>
  )
}