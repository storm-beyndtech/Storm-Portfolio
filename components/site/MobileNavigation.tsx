"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { navigation, profile } from "@/content/profile"
import ArrowIcon from "@/components/site/ArrowIcon"

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div className="mobile-navigation">
      <button
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span className="menu-glyph" aria-hidden="true">{open ? <FiX /> : <FiMenu />}</span>
      </button>
      {open ? (
        <div id="mobile-menu" className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Résumé <ArrowIcon />
            </a>
            <Link className="mobile-contact" href="/contact?intent=role" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
