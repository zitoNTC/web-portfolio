import Button from '../components/Button'
import Section from '../components/Section'
import { profile } from '../data/profile'
import styles from './HomeSection.module.css'

export default function HomeSection() {
  return (
    <Section id="home" className={styles.section}>
      <h1 className={styles.title}>{profile.home.title}</h1>
      <p className={styles.lead}>{profile.home.lead}</p>
      <p className={styles.summary}>{profile.home.summary}</p>
      <div className={styles.actions}>
        {profile.home.actions.map((action) => (
          <Button
            key={`${action.href}-${action.label}`}
            href={action.href}
            variant={action.variant}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </Section>
  )
}
