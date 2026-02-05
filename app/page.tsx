'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import TechniquesSection from '@/components/TechniquesSection'
import AboutSection from '@/components/AboutSection'
import QuickActions from '@/components/QuickActions'
import WritingFragment from '@/components/WritingFragment'
import Navigation from '@/components/Navigation'
import Threshold from '@/components/Threshold'
import ArtGallery from '@/components/ArtGallery'
import DesignShowcase from '@/components/DesignShowcase'
import FloatingContact from '@/components/FloatingContact'
import ContactModal from '@/components/ContactModal'

const AtmosphericBackground = dynamic(
  () => import('@/components/AtmosphericBackground'),
  { ssr: false }
)

const SymbioteCursor = dynamic(
  () => import('@/components/SymbioteCursor'),
  { ssr: false }
)

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <main className="relative min-h-screen bg-ink">
      <Threshold />

      <SymbioteCursor />

      <AtmosphericBackground />

      <Navigation />

      <FloatingContact onMailClick={() => setIsContactModalOpen(true)} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <Hero />

      <WritingFragment
        text="The first rule was simple: observe without interference."
        align="left"
        size="md"
      />

      <ProjectsSection />

      <WritingFragment
        text="Art as evidence. Memory as archive."
        align="right"
        size="sm"
      />

      <ArtGallery />

      <WritingFragment
        text="Systems remember what you forget."
        align="center"
        size="sm"
      />

      <DesignShowcase />

      <WritingFragment
        text="Sleep was rehearsal. Morning was performance."
        align="left"
        size="md"
      />

      <TechniquesSection />

      <WritingFragment
        text="Every signal carries weight. Every transmission leaves a mark."
        align="right"
        size="sm"
      />

      <AboutSection />

      <QuickActions />

      <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-bone/5 grain">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <p className="font-grotesk text-sm text-bone/40">
                Storm — Product Designer × Software Engineer × Dystopian Horror Writer
              </p>
              <p className="font-grotesk text-xs text-bone/30">
                Nothing here is accidental.
              </p>
            </div>

            <div className="font-grotesk text-xs text-bone/30">
              <p>Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
