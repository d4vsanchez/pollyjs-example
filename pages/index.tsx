import useSWR from 'swr'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Doggo } from './api/doggo'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Home: NextPage = () => {
  const { data, error } = useSWR<Doggo>('/api/doggo', fetcher)

  return (
    <div className={styles.container}>
      <Head>
        <title>Show a Doggo!</title>
        <meta name="description" content="Show a doggo!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Show a Doggo!
        </h1>

        <p>Look at this cutie!</p>

        {!data && <h2>Loading...</h2>}
        {error && <p>Could not load the cutie :(</p>}
        {data && (
          <figure className={styles.doggo}>
            <Image src={data.imageUrl} alt="" layout="fill" objectFit="contain" />
            <figcaption>{data.breed}</figcaption>
          </figure>
        )}
      </main>
    </div>
  )
}

export default Home
