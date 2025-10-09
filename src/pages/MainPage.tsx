import { useEffect } from 'react'
import HeroSection from '../components/hero-section'
import AboutSection from '../components/about-section'
import SkillsSection from '../components/skills-section'
import ProjectsSection from '../components/projects-section'
import CertificationsSection from '../components/certifications-section'
import EducationSection from '../components/education-section'
import Footer from '../components/footer'

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <Footer />
    </div>
  )
}
