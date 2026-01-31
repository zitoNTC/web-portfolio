import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import HomeSection from '../sections/HomeSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.content}>
        <main className={styles.main}>
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
