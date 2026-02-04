import Button from '../components/Button'
import Section from '../components/Section'
import { links } from '../data/links'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <Section id="contact" className={styles.section} containerClassName={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.subtitle}>
       Open to freelance projects and job opportunities. Feel free to get in touch.
      </p>
      <div className={styles.actions}>
        <Button href={`mailto:${links.email}`}>{links.email}</Button>
        <Button href={links.linkedin} variant="ghost" target="_blank" rel="noreferrer">
          LinkedIn
        </Button>
        <Button href={links.github} variant="ghost" target="_blank" rel="noreferrer">
          GitHub
        </Button>
      </div>
    </Section>
  )
}
