'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isFocused, setIsFocused] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const marsY = useTransform(scrollYProgress, [0, 1], [200, -200])
  const mercuryY = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-spacing px-6 md:px-12 lg:px-24 relative overflow-hidden grain"
    >
      {/* Mars - aggressive red, descending */}
      <motion.div
        style={{ y: marsY }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: marsY }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-600 rounded-full opacity-10 blur-2xl pointer-events-none"
      />

      {/* Mercury - calm silver/blue, rising */}
      <motion.div
        style={{ y: mercuryY }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-900 rounded-full opacity-15 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: mercuryY }}
        className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-slate-500 rounded-full opacity-10 blur-2xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header - the clash point */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">
            TRANSMISSION
          </h2>
          <div className="space-y-4">
            <p className="font-serif text-4xl md:text-6xl tracking-tight text-bone/90 leading-tight">
              Contact is inevitable.
            </p>
            <p className="font-serif text-2xl md:text-3xl tracking-tight text-bone/40 leading-tight">
              The channel opens. The signal awaits.
            </p>
          </div>
        </motion.div>

        {/* Form - where Mars meets Mercury */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative space-y-8"
        >
          {/* Glass container with clash effect */}
          <div className="glass-heavy p-8 md:p-12 border border-bone/10 relative overflow-hidden">
            {/* Internal clash gradient */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(139, 0, 0, 0.2) 0%, transparent 50%, rgba(30, 58, 138, 0.2) 100%)',
              }}
            />

            <div className="relative z-10 space-y-8">
              {/* Name field */}
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="block font-grotesk text-sm text-bone/60 tracking-wide"
                >
                  Identifier
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('name')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full bg-charcoal/50 border border-bone/10 px-6 py-4 font-grotesk text-bone text-lg focus:border-accent/50 focus:outline-none transition-all duration-500 backdrop-blur-sm"
                  animate={{
                    borderColor:
                      isFocused === 'name'
                        ? 'rgba(139, 0, 0, 0.5)'
                        : 'rgba(244, 244, 240, 0.1)',
                  }}
                />
              </div>

              {/* Email field */}
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="block font-grotesk text-sm text-bone/60 tracking-wide"
                >
                  Transmission Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full bg-charcoal/50 border border-bone/10 px-6 py-4 font-grotesk text-bone text-lg focus:border-accent/50 focus:outline-none transition-all duration-500 backdrop-blur-sm"
                  animate={{
                    borderColor:
                      isFocused === 'email'
                        ? 'rgba(139, 0, 0, 0.5)'
                        : 'rgba(244, 244, 240, 0.1)',
                  }}
                />
              </div>

              {/* Message field */}
              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="block font-grotesk text-sm text-bone/60 tracking-wide"
                >
                  Encoded Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('message')}
                  onBlur={() => setIsFocused(null)}
                  required
                  rows={6}
                  className="w-full bg-charcoal/50 border border-bone/10 px-6 py-4 font-grotesk text-bone text-lg focus:border-accent/50 focus:outline-none transition-all duration-500 resize-none backdrop-blur-sm"
                  animate={{
                    borderColor:
                      isFocused === 'message'
                        ? 'rgba(139, 0, 0, 0.5)'
                        : 'rgba(244, 244, 240, 0.1)',
                  }}
                />
              </div>

              {/* Submit button - Mars energy */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full md:w-auto px-12 py-5 bg-accent border border-accent text-bone font-grotesk text-lg tracking-wide overflow-hidden"
              >
                <span className="relative z-10">Transmit Signal</span>

                {/* Aggressive energy pulse */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-900 to-accent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Corner markers - clash indicators */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-accent opacity-30" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-blue-800 opacity-30" />
        </motion.form>

        {/* Subtitle - the aftermath */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 text-center font-serif text-lg text-bone/40 italic"
        >
          All transmissions are monitored. Response time varies.
        </motion.p>
      </div>
    </section>
  )
}
