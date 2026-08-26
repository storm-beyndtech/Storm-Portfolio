"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { flagshipProjects } from "@/content/projects"
import { profile } from "@/content/profile"
import ArrowIcon from "@/components/site/ArrowIcon"

export default function HeroPanel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % flagshipProjects.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <aside
      className="hero-panel"
      aria-label="Portrait and selected project carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <figure className="hero-portrait">
        <Image
          src="/Avatar.jpeg"
          alt="Victor Nwachukwu in front of a cockatoo painting"
          width={729}
          height={900}
          priority
          sizes="(max-width: 1024px) 82vw, 34vw"
        />
        <figcaption>
          <span>{profile.name}</span>
          <span>Port Harcourt · Remote</span>
        </figcaption>
      </figure>

      <div className="hero-carousel" aria-roledescription="carousel" aria-label="Selected work">
        <div className="hero-carousel-head">
          <span>Selected systems</span>
          <span>{String(active + 1).padStart(2, "0")} / {String(flagshipProjects.length).padStart(2, "0")}</span>
        </div>
        <div className="hero-carousel-window" aria-live="off">
          <div className="hero-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {flagshipProjects.map((project) => (
              <article key={project.id} className="hero-carousel-slide" aria-hidden={project.index !== flagshipProjects[active].index}>
                <div>
                  <p>{project.status}</p>
                  <h2>{project.displayName}</h2>
                  <span>{project.category}</span>
                </div>
                <Link href={project.href} tabIndex={project.index === flagshipProjects[active].index ? 0 : -1} aria-label={`Read the ${project.name} case study`}>
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="hero-carousel-controls" aria-label="Choose a project">
          {flagshipProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Show ${project.name}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
