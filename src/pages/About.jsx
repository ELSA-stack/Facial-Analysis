import CTASection from '../components/about/CTASection'
import Disclaimer from '../components/about/Disclaimer'
import Features from '../components/about/Features'
import HeroSection from '../components/about/HeroSection'
import HowItWorks from '../components/about/HowItWorks'
import TeamSection from '../components/about/TeamSection'
import TechStack from '../components/about/TechStack'

// This page assembles the reusable about sections into a polished, premium experience.
function About() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_55%,_#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        {/* The hero section introduces the product and sets the visual tone for the page. */}
        <HeroSection />

        {/* The workflow section demonstrates the product in a simple, elegant three-step journey. */}
        <HowItWorks />

        {/* The technology stack section highlights the modern tools behind the application. */}
        <TechStack />

        {/* The team section adds personality and credibility to the product story. */}
        <TeamSection />

        {/* Feature highlights give visitors a quick overview of the core capabilities. */}
        <Features />

        {/* The disclaimer card clearly communicates the educational and demo-oriented nature of the app. */}
        <Disclaimer />

        {/* The call-to-action section encourages the user to begin the experience. */}
        <CTASection />
      </div>
    </main>
  )
}

export default About
