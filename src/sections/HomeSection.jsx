import Button from '../components/Button'
import Section from '../components/Section'
import { links } from '../data/links'
import { profile } from '../data/profile'
import styles from './HomeSection.module.css'

export default function HomeSection() {
  return (
    <Section id="home" className={styles.section}>
      <p className={styles.kicker}>Hello, I am</p>
      <h1 className={styles.title}>
        {profile.name} — {profile.role}
      </h1>
      <p className={styles.lead}>{profile.headline}</p>
      <p className={styles.summary}>{profile.summary}</p>
      <div className={styles.actions}>
        <Button href="#projects">View Projects</Button>
        <Button href="#contact" variant="ghost">
          Contact Me
        </Button>
      </div>
      <div className={styles.meta}>
        <span>{profile.location}</span>
        <span>•</span>
        <a href={`mailto:${links.email}`}>{links.email}</a>
      </div>
    </Section>
  )
}
