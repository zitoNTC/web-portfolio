import Button from './Button'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
      <div className={styles.stack}>
        {project.stack.map((item) => (
          <span key={item} className={styles.tag}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        <Button href={project.githubUrl} variant="ghost" target="_blank" rel="noreferrer">
          GitHub
        </Button>
        <Button href={project.liveUrl} variant="primary" target="_blank" rel="noreferrer">
          Live Demo
        </Button>
      </div>
    </article>
  )
}
