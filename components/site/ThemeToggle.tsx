"use client"

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement
    const current = root.dataset.theme === "light" ? "light" : "dark"
    const next = current === "dark" ? "light" : "dark"
    root.dataset.theme = next
    root.style.colorScheme = next
    localStorage.setItem("storm-theme", next)
  }

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label="Toggle color theme"
      title="Toggle color theme"
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
