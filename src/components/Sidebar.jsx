import { links } from '../data/links'
import { profile } from '../data/profile'
import styles from './Sidebar.module.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <p className={styles.kicker}>Hello, I am</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.role}</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.links}>
        <a href={`mailto:${links.email}`}>{links.email}</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </aside>
  )
}
