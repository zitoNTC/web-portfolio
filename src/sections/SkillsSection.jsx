import Section from '../components/Section'
import SkillPill from '../components/SkillPill'
import { skills } from '../data/skills'
import styles from './SkillsSection.module.css'

export default function SkillsSection() {
  return (
    <Section id="skills">
      <div className={styles.header}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>
          A snapshot of the tools and technologies I work with.
        </p>
      </div>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.group} className={styles.card}>
            <h3>{group.group}</h3>
            <div className={styles.list}>
              {group.items.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
