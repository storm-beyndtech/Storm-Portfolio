import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import styles from "./atlas.module.css"

export const metadata: Metadata = {
  title: "Unfinished Atlas — composition study",
  description: "An isolated composition study for the next Storm portfolio direction.",
  robots: { index: false, follow: false },
}

function SeametryFigure() {
  return (
    <svg className={styles.figure} viewBox="0 0 620 430" role="img" aria-label="Seametry Formula, Alloy, Melt and independent claim delivery">
      <g className={styles.guide}>
        <path d="M90 60H520M310 20V390" />
        <path d="M128 104L310 176L492 104" />
        <path d="M128 104V62M249 104V62M371 104V62M492 104V62" />
      </g>
      <g className={styles.formula}>
        <rect x="96" y="44" width="64" height="30" />
        <rect x="217" y="44" width="64" height="30" />
        <rect x="339" y="44" width="64" height="30" />
        <rect x="460" y="44" width="64" height="30" />
      </g>
      <path className={styles.primaryLine} d="M128 74L310 150M249 74L310 150M371 74L310 150M492 74L310 150" />
      <ellipse className={styles.alloy} cx="310" cy="181" rx="112" ry="48" />
      <ellipse className={styles.alloyGhost} cx="310" cy="173" rx="112" ry="48" />
      <path className={styles.primaryLine} d="M310 229V274" />
      <circle className={styles.meltNode} cx="310" cy="282" r="7" />
      <path className={styles.primaryLine} d="M310 289L188 342M310 289L432 342" />
      <rect className={styles.claimRestricted} x="151" y="337" width="74" height="56" />
      <rect className={styles.claimDelivered} x="395" y="337" width="74" height="56" />
      <path className={styles.authorityLine} d="M88 365H151" />
      <path className={styles.authorityMark} d="M117 351L129 365L117 379" />
      <text x="104" y="29">FORMULA</text>
      <text x="431" y="169">ALLOY</text>
      <text x="326" y="268">MELT</text>
      <text x="148" y="415">CLAIM A / PENDING</text>
      <text x="386" y="415">CLAIM B / DELIVERED</text>
    </svg>
  )
}

function RugburnFigure() {
  const nodes = [
    [84, 110, 8], [139, 65, 5], [178, 129, 11], [221, 82, 6], [264, 136, 9],
    [113, 177, 7], [171, 193, 6], [229, 181, 13], [301, 186, 6], [337, 119, 8],
    [350, 216, 5], [276, 250, 7], [198, 263, 6], [126, 239, 5], [72, 222, 4],
  ]
  const edges = [[0,1],[0,2],[0,5],[1,3],[2,3],[2,6],[2,7],[3,4],[3,9],[4,7],[4,9],[5,6],[5,13],[6,7],[6,12],[7,8],[7,11],[7,12],[8,9],[8,10],[8,11],[10,11],[11,12],[12,13],[13,14]]
  return (
    <svg className={styles.figure} viewBox="0 0 410 310" role="img" aria-label="Rugburn observed evidence topology and uncertain attribution">
      <g className={styles.networkEdges}>
        {edges.map(([a,b]) => <line key={a + "-" + b} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}
      </g>
      <g>
        {nodes.map(([x,y,r], index) => <circle key={index} className={index === 7 ? styles.networkFocus : styles.networkNode} cx={x} cy={y} r={r} />)}
      </g>
      <path className={styles.inferenceLine} d="M229 181C278 142 314 92 368 72" />
      <circle className={styles.inferredNode} cx="369" cy="71" r="9" />
      <text x="15" y="289">OBSERVED</text>
      <text x="315" y="48">INFERRED?</text>
    </svg>
  )
}

function VoidFigure() {
  return (
    <svg className={styles.figure} viewBox="0 0 420 300" role="img" aria-label="VŒID ranked route set with preferred, fallback and unavailable paths">
      <g className={styles.routePlanes}>
        <path d="M75 67L250 35L342 76L167 111Z" />
        <path d="M75 137L250 105L342 146L167 181Z" />
        <path d="M75 207L250 175L342 216L167 251Z" />
      </g>
      <path className={styles.routeAxis} d="M208 20V276" />
      <circle className={styles.routePreferred} cx="208" cy="76" r="6" />
      <circle className={styles.routeFallback} cx="208" cy="146" r="6" />
      <circle className={styles.routeUnavailable} cx="208" cy="216" r="6" />
      <path className={styles.primaryLine} d="M214 76H390M214 146H374" />
      <path className={styles.guide} d="M214 216H354" />
      <text x="300" y="66">PREFERRED</text>
      <text x="300" y="136">FALLBACK</text>
      <text x="300" y="206">UNAVAILABLE</text>
    </svg>
  )
}

function NakupendaFigure() {
  return (
    <svg className={styles.figure} viewBox="0 0 520 250" role="img" aria-label="Nakupenda relationship-state transition from listener to speaker">
      <g className={styles.relationshipContours}>
        <ellipse cx="92" cy="125" rx="68" ry="78" />
        <ellipse cx="179" cy="125" rx="88" ry="58" />
        <ellipse cx="278" cy="125" rx="74" ry="44" />
        <ellipse cx="379" cy="125" rx="92" ry="64" />
        <ellipse cx="448" cy="125" rx="55" ry="74" />
      </g>
      <path className={styles.relationshipPath} d="M76 125C154 92 215 158 283 125S388 94 458 125" />
      <circle cx="76" cy="125" r="5" />
      <circle cx="258" cy="125" r="5" />
      <circle cx="458" cy="125" r="5" />
      <text x="38" y="221">LISTENER</text>
      <text x="213" y="221">REQUEST / APPROVAL</text>
      <text x="419" y="221">SPEAKER</text>
    </svg>
  )
}

const lenses = [
  ["Research", "Questions, evidence and unresolved boundaries."],
  ["Design", "How complexity becomes perceivable and usable."],
  ["Engineering", "Causal mechanisms, implementation and constraint."],
  ["Archive", "Iterations, experiments and what remains unfinished."],
] as const

export default function AtlasLabPage() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.labNote}>Composition study / V4 · isolated from production</div>

      <section className={styles.field} aria-labelledby="atlas-title">
        <header className={styles.intro}>
          <p className={styles.identity}>{profile.name} · Software Engineer × Product Designer</p>
          <h1 id="atlas-title" aria-label="Building high-trust systems under uncertainty.">
            <span className={styles.heroLine}>Building</span>
            <span className={styles.heroTension}>high-trust systems</span>
            <span className={styles.heroLine}>under uncertainty.</span>
          </h1>
          <p className={styles.introCopy}>
            Research, design and engineering for systems where authority, evidence or execution is incomplete.
          </p>
          <div className={styles.introActions}>
            <a href="#systems">Explore the work</a>
            <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
          </div>
        </header>

        <article className={`${styles.project} ${styles.seametry}`} id="systems">
          <div className={styles.projectHeader}>
            <span className={styles.index}>01</span>
            <div>
              <p className={styles.kicker}>Open-AP baskets on Solana</p>
              <h2>Seametry</h2>
              <p>Redemption remains open even when an issuer restricts a constituent.</p>
            </div>
            <Link href="/work/seametry">Open record</Link>
          </div>
          <SeametryFigure />
          <aside className={styles.externalAuthority}>
            <strong>External authority remains effective.</strong>
            <span>Restriction intersects delivery, not Melt.</span>
          </aside>
        </article>

        <div className={styles.lenses} aria-label="Ways to read the work">
          {lenses.map(([title, body], index) => (
            <div key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <article className={`${styles.project} ${styles.rugburn}`}>
          <div className={styles.projectHeader}>
            <span className={styles.index}>02</span>
            <div>
              <p className={styles.kicker}>Forensic intelligence</p>
              <h2>Rugburn</h2>
              <p>From observed behavior to inspectable attribution.</p>
            </div>
            <Link href="/work/rugburn">Open record</Link>
          </div>
          <RugburnFigure />
        </article>

        <article className={`${styles.project} ${styles.void}`}>
          <div className={styles.projectHeader}>
            <span className={styles.index}>03</span>
            <div>
              <p className={styles.kicker}>Execution infrastructure</p>
              <h2>VŒID</h2>
              <p>Find the next valid route when part of the system degrades.</p>
            </div>
            <Link href="/work/void">Open record</Link>
          </div>
          <VoidFigure />
        </article>

        <article className={`${styles.project} ${styles.nakupenda}`}>
          <div className={styles.projectHeader}>
            <span className={styles.index}>04</span>
            <div>
              <p className={styles.kicker}>Social systems</p>
              <h2>Nakupenda</h2>
              <p>Relationship state changes access before it changes interface chrome.</p>
            </div>
            <Link href="/work/nakupenda">Open record</Link>
          </div>
          <NakupendaFigure />
        </article>

        <footer className={styles.fieldFooter}>
          <span>Four systems.</span>
          <span>Many questions.</span>
          <strong>An unfinished record.</strong>
        </footer>
      </section>
    </main>
  )
}
