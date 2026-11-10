import { LandingHeader } from '@/components/landing-header'
import { RuralHero } from '@/components/rural-hero'
import { VideoPresentationSection } from '@/components/video-presentation-section'

export default function Page() {
  return (
    <main className="landing-page">
      <LandingHeader />
      <RuralHero />
      <VideoPresentationSection />
    </main>
  )
}

