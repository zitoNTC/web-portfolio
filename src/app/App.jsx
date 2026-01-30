import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import HomeSection from '../sections/HomeSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
