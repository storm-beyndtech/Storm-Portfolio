"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement
    const syncTheme = () => setTheme(root.dataset.theme === "dark" ? "dark" : "light")
    const frame = window.requestAnimationFrame(syncTheme)
    const observer = new MutationObserver(syncTheme)
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  function toggleTheme() {
    const root = document.documentElement
    const current = root.dataset.theme === "light" ? "light" : "dark"
    const next = current === "dark" ? "light" : "dark"
    root.dataset.theme = next
    root.style.colorScheme = next
    localStorage.setItem("storm-theme", next)
    setTheme(next)
  }

  const label = theme === "light" ? "Switch to dark mode" : "Switch to light mode"

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.25" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
      </svg>
      <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 15.6A8.3 8.3 0 0 1 8.4 4 8.3 8.3 0 1 0 20 15.6Z" />
      </svg>
    </button>
  )
}
