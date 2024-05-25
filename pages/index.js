
import Head from 'next/head'
import styles from '../styles/home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{"Diego Pérez"}</title>
      </Head>
      <section className={styles.cont}>
        <br /><br /><br />
        <img src='/images/profile.jpg' />
        <h2>Diego A. Pérez Parés</h2>
        <p>Hi! Welcome to my website! I still need to work on it 😅.</p>
        <p>
          But for know, you can see my resume <a target='blank' href='/web-resume-2024.pdf'>here</a>.
        </p>
        <div className={styles.social}>
          <a target='blank' href='https://github.com/diegodevelops'><li><FontAwesomeIcon icon={faGithub} /></li></a>
          <a target='blank' href='https://www.linkedin.com/in/diego-perez-961bb4115/'><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
        </div>
      </section>
    </>
  )
}
