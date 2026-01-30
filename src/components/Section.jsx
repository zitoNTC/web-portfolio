import styles from './Section.module.css'

export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
}) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={`${styles.container} ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
