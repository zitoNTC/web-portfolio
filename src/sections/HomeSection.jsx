import Button from '../components/Button'
import Section from '../components/Section'
import styles from './HomeSection.module.css'

export default function HomeSection() {
  return (
    <Section id="home" className={styles.section}>
      <h1 className={styles.title}>Frontend developer portfolio</h1>
      <p className={styles.lead}>
        I build fast, accessible, and scalable interfaces using React and
        modern tooling.
      </p>
      <p className={styles.summary}>
        Explore my recent projects, core skills, and ways to reach me.
      </p>
      <div className={styles.actions}>
        <Button href="#projects">View Projects</Button>
        <Button href="#contact" variant="ghost">
          Contact Me
        </Button>
      </div>
    </Section>
  )
}
