import styles from './SkillPill.module.css'

export default function SkillPill({ label }) {
  return <span className={styles.pill}>{label}</span>
}
