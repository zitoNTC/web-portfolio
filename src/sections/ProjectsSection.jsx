import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'
import { projects } from '../data/projects'
import styles from './ProjectsSection.module.css'

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          A selection of recent work. Each project includes the stack and
          links.
        </p>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
