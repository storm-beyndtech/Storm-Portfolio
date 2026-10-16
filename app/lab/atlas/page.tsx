import type { Metadata } from "next"
import Link from "next/link"
import { Azeret_Mono, Fraunces } from "next/font/google"
import { profile } from "@/content/profile"
import styles from "./atlas.module.css"

const atlasDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-atlas-display",
  display: "swap",
  style: ["normal", "italic"],
})

const atlasMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-atlas-mono",
  display: "swap",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Unfinished Atlas — composition study",
  description: "An isolated composition study for the next Storm portfolio direction.",
  robots: { index: false, follow: false },
}

function SeametryFigure() {
  return (
    <svg className={styles.figure} viewBox="0 0 700 470" role="img" aria-label="Seametry Formula, Hall, Alloy, Melt and independent claim delivery">
      <g className={styles.guide}>
        <path d="M72 78H610M350 20V432" />
        <path d="M116 113L350 195L584 113" />
        <path d="M116 113V62M272 113V62M428 113V62M584 113V62" />
        <path d="M178 309H522M218 350H482" />
      </g>

      <g className={styles.formula}>
        <polygon points="78,66 126,42 166,59 118,84" />
        <polygon points="234,66 282,42 322,59 274,84" />
        <polygon points="390,66 438,42 478,59 430,84" />
        <polygon points="546,66 594,42 634,59 586,84" />
        <path d="M118 84V108L166 83V59M274 84V108L322 83V59M430 84V108L478 83V59M586 84V108L634 83V59" />
      </g>

      <g className={styles.hallFigure}>
        <ellipse cx="350" cy="205" rx="132" ry="55" />
        <ellipse cx="350" cy="190" rx="132" ry="55" />
        <path d="M218 190V226M482 190V226" />
        <path d="M218 226C248 270 452 270 482 226" />
        <path d="M268 170L268 239M310 153L310 250M390 153L390 250M432 170L432 239" />
      </g>

      <g className={styles.primaryLine}>
        <path d="M118 108L292 174M274 108L326 159M430 108L374 159M586 108L408 174" />
        <path d="M350 260V306" />
        <path d="M350 320C315 342 275 361 224 388M350 320C385 342 425 361 476 388" />
      </g>

      <circle className={styles.meltNode} cx="350" cy="313" r="8" />

      <g className={styles.claimWire}>
        <path className={styles.claimRestricted} d="M179 367L224 344L269 367L269 417L224 440L179 417Z" />
        <path className={styles.claimRestricted} d="M179 367L224 390L269 367M224 390V440" />
        <path className={styles.claimDelivered} d="M431 367L476 344L521 367L521 417L476 440L431 417Z" />
        <path className={styles.claimDelivered} d="M431 367L476 390L521 367M476 390V440" />
      </g>

      <path className={styles.authorityLine} d="M86 392H176" />
      <path className={styles.authorityMark} d="M141 376L158 392L141 408" />

      <text x="78" y="31">FORMULA / FOUR LEGS</text>
      <text x="510" y="186">HALL</text>
      <text x="510" y="201">ALLOY / FUNGIBLE SHARE</text>
      <text x="369" y="304">MELT</text>
      <text x="166" y="462">CLAIM A / RESTRICTED</text>
      <text x="414" y="462">CLAIM B / DELIVERED</text>
    </svg>
  )
}

function RugburnFigure() {
  const nodes = [
    [58, 142, 5], [96, 84, 4], [117, 174, 7], [151, 111, 5], [174, 206, 4],
    [203, 73, 6], [220, 150, 11], [248, 211, 5], [272, 104, 6], [302, 165, 8],
    [329, 74, 4], [348, 132, 5], [371, 201, 4], [184, 258, 5], [286, 252, 6],
    [96, 244, 4], [392, 102, 4], [420, 171, 5], [346, 268, 4],
  ]
  const edges = [
    [0,1],[0,2],[0,15],[1,3],[2,3],[2,4],[2,6],[3,5],[3,6],[4,6],[4,13],
    [5,6],[5,8],[5,10],[6,7],[6,8],[6,9],[6,13],[7,9],[7,14],[8,9],[8,10],
    [9,11],[9,12],[9,14],[10,11],[10,16],[11,16],[11,17],[12,17],[12,18],[13,15],[14,18]
  ]
  return (
    <svg className={styles.figure} viewBox="0 0 460 320" role="img" aria-label="Rugburn evidence topology separating observed structure from uncertain attribution">
      <g className={styles.networkOrbit}>
        <ellipse cx="220" cy="157" rx="180" ry="116" />
        <ellipse cx="220" cy="157" rx="126" ry="82" />
        <path d="M42 229C111 302 320 302 426 205" />
      </g>
      <g className={styles.networkEdges}>
        {edges.map(([a,b]) => <line key={a + "-" + b} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}
      </g>
      <g>
        {nodes.map(([x,y,rad], index) => (
          <circle key={index} className={index === 6 || index === 9 ? styles.networkFocus : styles.networkNode} cx={x} cy={y} r={rad} />
        ))}
      </g>
      <path className={styles.inferenceLine} d="M220 150C265 92 329 50 412 45" />
      <circle className={styles.inferredNode} cx="414" cy="45" r="10" />
      <path className={styles.inferenceLine} d="M302 165C338 180 382 226 430 250" />
      <circle className={styles.inferredNode} cx="431" cy="250" r="7" />
      <text x="26" y="302">OBSERVED / TRANSACTIONS</text>
      <text x="348" y="25">ATTRIBUTION?</text>
      <text x="349" y="286">COUNTER-HYPOTHESIS</text>
    </svg>
  )
}

function VoidFigure() {
  return (
    <svg className={styles.figure} viewBox="0 0 450 330" role="img" aria-label="VŒID route field with preferred, fallback and degraded paths">
      <g className={styles.routePlanes}>
        <path d="M58 71L231 28L368 74L194 119Z" />
        <path d="M75 145L247 102L384 148L210 193Z" />
        <path d="M91 219L264 176L401 222L226 267Z" />
      </g>
      <g className={styles.routeGrid}>
        <path d="M102 60L236 96M161 45L295 82M221 31L355 67" />
        <path d="M118 134L252 170M178 119L312 156M237 105L371 141" />
        <path d="M135 208L269 244M194 193L328 230M254 179L388 215" />
      </g>
      <path className={styles.routeAxis} d="M229 8V303" />
      <path className={styles.routePathPrimary} d="M28 92C94 76 148 86 229 73C302 61 354 59 428 72" />
      <path className={styles.routePathFallback} d="M28 168C109 145 158 166 229 148C296 131 347 147 422 145" />
      <path className={styles.routePathUnavailable} d="M28 244C104 218 158 236 229 222C300 208 353 222 414 221" />
      <circle className={styles.routePreferred} cx="229" cy="73" r="6" />
      <circle className={styles.routeFallback} cx="229" cy="148" r="6" />
      <circle className={styles.routeUnavailable} cx="229" cy="222" r="6" />
      <text x="315" y="48">PREFERRED</text>
      <text x="315" y="126">FALLBACK</text>
      <text x="315" y="202">DEGRADED</text>
      <text x="28" y="318">RANKED AGAINST THE SAME REQUEST</text>
    </svg>
  )
}

function NakupendaFigure() {
  return (
    <svg className={styles.figure} viewBox="0 0 600 280" role="img" aria-label="Nakupenda relationship field showing role and access changing over time">
      <g className={styles.relationshipContours}>
        <path d="M34 145C76 59 149 40 211 112C249 156 273 189 316 142C365 88 422 63 478 106C521 139 548 194 575 147" />
        <path d="M34 159C82 91 146 72 202 127C249 174 278 196 323 151C365 109 418 89 471 122C514 149 548 186 575 160" />
        <path d="M34 129C77 28 158 16 222 96C263 148 278 174 312 128C356 69 426 34 489 90C536 132 558 206 575 130" />
        <path d="M34 176C91 121 147 106 196 141C246 177 282 211 332 165C372 127 420 116 465 137C508 156 543 177 575 174" />
      </g>
      <g className={styles.relationshipFields}>
        <ellipse cx="95" cy="145" rx="67" ry="82" />
        <ellipse cx="302" cy="145" rx="64" ry="55" />
        <ellipse cx="510" cy="145" rx="68" ry="82" />
      </g>
      <path className={styles.relationshipPath} d="M95 145C168 108 231 182 302 145S435 109 510 145" />
      <circle cx="95" cy="145" r="6" />
      <circle cx="302" cy="145" r="6" />
      <circle cx="510" cy="145" r="6" />
      <path className={styles.relationshipGate} d="M260 90V200M344 90V200" />
      <text x="52" y="258">LISTENER</text>
      <text x="246" y="258">REQUEST → APPROVAL</text>
      <text x="468" y="258">SPEAKER</text>
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
    <main id="main-content" className={`${styles.page} ${atlasDisplay.variable} ${atlasMono.variable}`}>
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
