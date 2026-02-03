import Section from '../components/Section'
import { profile } from '../data/profile'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <Section id="about">
      <div className={styles.header}>
        <h2 className={styles.title}>{profile.about.title}</h2>
        <p className={styles.subtitle}>{profile.about.subtitle}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          {profile.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className={styles.highlights}>
          {profile.about.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
