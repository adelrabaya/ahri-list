import Head from 'next/head'
import Footer from '../comps/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahri List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
          <h1 className={styles.title}>Homepage</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto unde quisquam necessitatibus quas ut aut molestiae. Maxime laborum, natus eos laudantium, mollitia sequi iusto, soluta cumque reprehenderit ipsa asperiores eum necessitatibus, voluptatibus sunt fugit tenetur accusantium et officiis sit eos alias.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto unde quisquam necessitatibus quas ut aut molestiae. Maxime laborum, natus eos laudantium, mollitia sequi iusto, soluta cumque reprehenderit ipsa asperiores eum necessitatibus, voluptatibus sunt fugit tenetur accusantium et officiis sit eos alias.</p>
          <Link href="/ninjas">
          <a>See Ninja Listing</a>
          </Link>
      </div>
    </>
  )
}
