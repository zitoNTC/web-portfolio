import { profile } from '../data/profile'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className={styles.meta}>Built with React + Vite.</p>
      </div>
    </footer>
  )
}
