import Button from './Button'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const hasGithubUrl = Boolean(project.githubUrl?.trim())
  const hasLiveUrl = Boolean(project.liveUrl?.trim())

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
        {hasGithubUrl && (
          <Button href={project.githubUrl} variant="primary" target="_blank" rel="noreferrer">
            GitHub
          </Button>
        )}
        {hasLiveUrl && (
          <Button href={project.liveUrl} variant="ghost" target="_blank" rel="noreferrer">
            Live Demo
          </Button>
        )}
      </div>
    </article>
  )
}
