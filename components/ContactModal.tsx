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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Handle form submission here
    onClose()
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-charcoal border border-accent/40 text-bone font-grotesk text-sm tracking-wider uppercase hover:bg-accent/10 transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Transmit
                      <span className="font-distorted text-accent">→</span>
                    </span>
                  </motion.button>
                </form>

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
