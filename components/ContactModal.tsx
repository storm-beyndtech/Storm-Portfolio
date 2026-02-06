'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isFocused, setIsFocused] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormState({ name: '', email: '', message: '' })

      // Close modal after showing success
      setTimeout(() => {
        onClose()
        setSubmitStatus('idle')
      }, 2000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/80 backdrop-blur-md z-50 grain"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="relative w-full max-w-2xl pointer-events-auto">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-4 -right-4 w-10 h-10 glass-heavy border border-bone/20 flex items-center justify-center text-bone/60 hover:text-accent z-10"
              >
                <span className="font-distorted text-xl">×</span>
              </motion.button>

              {/* Form container */}
              <div className="glass-heavy border border-bone/20 p-8 md:p-12 relative overflow-hidden">
                {/* Corner tech markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-accent/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-accent/40" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent/40" />

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-x-0 h-px bg-accent/20"
                  animate={{ y: [0, 400, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Header */}
                <div className="mb-8 space-y-2">
                  <h3 className="font-distorted text-xs tracking-[0.3em] text-accent opacity-60">
                    TRANSMISSION
                  </h3>
                  <p className="font-serif text-3xl md:text-4xl tracking-tight text-bone">
                    Initiate contact protocol
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block font-grotesk text-xs text-bone/40 tracking-wider uppercase"
                    >
                      Identifier
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('name')}
                      onBlur={() => setIsFocused(null)}
                      required
                      className="w-full bg-charcoal/30 border border-bone/10 px-4 py-3 font-grotesk text-bone focus:border-accent/40 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      style={{
                        borderColor:
                          isFocused === 'name'
                            ? 'rgba(139, 0, 0, 0.4)'
                            : 'rgba(244, 244, 240, 0.1)',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-grotesk text-xs text-bone/40 tracking-wider uppercase"
                    >
                      Transmission Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused(null)}
                      required
                      className="w-full bg-charcoal/30 border border-bone/10 px-4 py-3 font-grotesk text-bone focus:border-accent/40 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      style={{
                        borderColor:
                          isFocused === 'email'
                            ? 'rgba(139, 0, 0, 0.4)'
                            : 'rgba(244, 244, 240, 0.1)',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block font-grotesk text-xs text-bone/40 tracking-wider uppercase"
                    >
                      Encoded Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused(null)}
                      required
                      rows={5}
                      className="w-full bg-charcoal/30 border border-bone/10 px-4 py-3 font-grotesk text-bone focus:border-accent/40 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                      style={{
                        borderColor:
                          isFocused === 'message'
                            ? 'rgba(139, 0, 0, 0.4)'
                            : 'rgba(244, 244, 240, 0.1)',
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full px-8 py-4 bg-charcoal border border-accent/40 text-bone font-grotesk text-sm tracking-wider uppercase hover:bg-accent/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          Transmitting
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="inline-block"
                          >
                            ⟳
                          </motion.span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          Transmitted
                          <span className="text-accent">✓</span>
                        </>
                      ) : (
                        <>
                          Transmit
                          <span className="font-distorted text-accent">→</span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Status messages */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center font-grotesk text-sm text-accent"
                      >
                        Message sent successfully. Closing...
                      </motion.p>
                    )}
                    {submitStatus === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center font-grotesk text-sm text-accent"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>

                {/* Social links - Quick contact alternatives */}
                <div className="mt-8 pt-6 border-t border-bone/10">
                  <p className="text-center font-grotesk text-xs text-bone/40 mb-4 uppercase tracking-wider">
                    Or reach out directly
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <motion.a
                      href={process.env.NEXT_PUBLIC_BEHANCE_URL || 'https://behance.net'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass border border-bone/10 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/40 transition-colors duration-300"
                      title="Behance"
                    >
                      <span className="font-grotesk font-bold text-sm">Bē</span>
                    </motion.a>

                    <motion.a
                      href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass border border-bone/10 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/40 transition-colors duration-300"
                      title="GitHub"
                    >
                      <span className="font-grotesk font-bold text-sm">Gh</span>
                    </motion.a>

                    <motion.a
                      href={process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/1234567890'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass border border-bone/10 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/40 transition-colors duration-300"
                      title="WhatsApp"
                    >
                      <span className="font-grotesk font-bold text-sm">Wa</span>
                    </motion.a>

                    <motion.a
                      href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass border border-bone/10 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/40 transition-colors duration-300"
                      title="Twitter/X"
                    >
                      <span className="font-grotesk font-bold text-sm">𝕏</span>
                    </motion.a>

                    <motion.a
                      href={process.env.NEXT_PUBLIC_BLOG_URL || 'https://medium.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 glass border border-bone/10 flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/40 transition-colors duration-300"
                      title="Blog"
                    >
                      <span className="font-grotesk font-bold text-sm">Bl</span>
                    </motion.a>
                  </div>
                </div>

                {/* Footer note */}
                <p className="mt-6 text-center font-grotesk text-xs text-bone/30">
                  All transmissions monitored. Response time varies.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
