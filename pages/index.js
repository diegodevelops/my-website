
import Head from 'next/head'
import styles from '../styles/home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{"Diego Pérez"}</title>
      </Head>
      <section className={styles.cont}>
        <br /><br /><br />
        <img src='/images/profile.jpg' />
        <h2>Diego Dev</h2>
        <h3>Hi! My name is Diego Pérez...</h3>
        <p>
          I'm a software developer from Puerto Rico 🇵🇷 with over 8+ years of experience building applications and solving technical problems. I've worked across different industries and tech stacks, and I know what it takes to turn ideas into working software.
        </p>
        <p>
          Whether you're a startup getting your product off the ground or an established company tackling a specific project, I'm here to help get it done.
        </p>
        <p>
          Looking for a developer who can jump in and contribute? Let's talk about your project. Please fill free to email me any time at <a href='mailto:diegodevelops@gmail.com'>diegodevelops@gmail.com</a>.
        </p>
        <div className={styles.social}>
          <a target='blank' href='https://github.com/diegodevelops'><li><FontAwesomeIcon icon={faGithub} /></li></a>
          <a target='blank' href='https://www.linkedin.com/in/diego-perez-961bb4115/'><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
        </div>
        <div>
          <FontAwesomeIcon  icon={faCopyright} /> 2025, DIEGO DEV LLC
        </div>
      </section>
    </>
  )
}
