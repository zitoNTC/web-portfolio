import Section from '../components/Section'
import { profile } from '../data/profile'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <Section id="about">
      <div className={styles.header}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>
          A quick overview of how I work and what I enjoy building.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p>
            I am a frontend developer focused on creating fast, accessible
            interfaces. I enjoy turning product ideas into reliable UI that
            scales as teams and features grow.
          </p>
          <p>
            I care about clean architecture, consistent component libraries, and
            shipping with quality. When I am not coding, I explore design
            systems, micro-interactions, and performance optimizations.
          </p>
        </div>
        <ul className={styles.highlights}>
          {profile.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
