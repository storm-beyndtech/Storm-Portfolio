"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const onboardingScreens = [
	"/case-studies/nakupenda/Login-Screen-Dark.jpg",
	"/case-studies/nakupenda/Login-Screen.jpg",
	"/case-studies/nakupenda/Onboarding-Screen-dark-4.png",
	"/case-studies/nakupenda/Onboarding-Screen-Dark-1.jpg",
	"/case-studies/nakupenda/Onboarding-Screen-Currents.jpg",
];

const whisperScreens = [
	{ label: "Host State", src: "/case-studies/nakupenda/Whisper-Snippet.jpg" },
	{ label: "Moments Modal", src: "/case-studies/nakupenda/Whisper.jpg" },
	{ label: "Listener State", src: "/case-studies/nakupenda/Post-and-Comments.jpg" },
];

const coreScreens = [
	{ label: "TEXTin — Chat A", src: "/case-studies/nakupenda/Chat-Welcome.jpg" },
	{ label: "Blog", src: "/case-studies/nakupenda/Blog-Locked.jpg" },
	{ label: "Feed", src: "/case-studies/nakupenda/Post-and-Comments.jpg" },
	{ label: "TEXTin — Chat B", src: "/case-studies/nakupenda/Biz-Profile.jpg" },
];

export default function NakupendaCaseStudy() {
	return (
		<main className="min-h-screen bg-black text-bone relative overflow-hidden">
			<div
				className="absolute inset-0 pointer-events-none opacity-10"
				style={{
					backgroundImage:
						"linear-gradient(transparent 92%, rgba(244,244,240,0.08) 100%), linear-gradient(90deg, transparent 92%, rgba(244,244,240,0.08) 100%)",
					backgroundSize: "30px 30px, 30px 30px",
				}}
			/>
			<section className="px-6 md:px-12 lg:px-24 pt-16 pb-16 relative">
				<Link
					href="/"
					className="inline-block font-grotesk text-xs uppercase tracking-[0.3em] text-bone/50 hover:text-bone transition-colors mb-10"
				>
					← Back
				</Link>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
					className="max-w-5xl"
				>
					<p className="font-distorted text-xs tracking-[0.4em] text-bone/40">SYSTEM CASE STUDY</p>
					<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 mt-4">
						NAKUPENDA
					</h1>
					<p className="font-grotesk text-lg md:text-xl text-bone/60 mt-6 max-w-3xl">
						Human-first social infrastructure built for presence, boundaries, and intentional connection.
					</p>
				</motion.div>
			</section>

			<section className="px-6 md:px-12 lg:px-24 pb-20 relative">
				<div className="grid md:grid-cols-2 gap-10 items-start">
					<div className="space-y-6">
						<h2 className="font-serif text-2xl md:text-3xl text-bone/90">System Summary</h2>
						<p className="font-grotesk text-bone/60 leading-relaxed">
							Nakupenda reverses the failures of modern social media. It rejects extraction, noise addiction,
							and algorithmic manipulation. The system is built around Currents, Community Control, Whispers,
							Blogs, and TEXTin — each reinforcing the same emotional contract.
						</p>
						<ul className="space-y-2 text-sm text-bone/50 font-grotesk">
							<li>Currents filter attention before harm begins.</li>
							<li>Community Control replaces opaque moderation.</li>
							<li>TEXTin turns messaging into emotional infrastructure.</li>
							<li>Whispers prioritize voice over virality.</li>
						</ul>
					</div>
					<div className="border border-bone/10 bg-ink/40">
						<img
							src="/case-studies/nakupenda/Onboarding-Screen-Dark-2.jpg"
							alt="Nakupenda system mood"
							className="w-full h-auto"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</div>
			</section>

			<section className="px-6 md:px-12 lg:px-24 pb-20 relative">
				<div className="flex items-center justify-between mb-6">
					<h2 className="font-serif text-2xl md:text-3xl text-bone/90">Onboarding Sequence</h2>
					<span className="font-grotesk text-xs text-bone/40 tracking-[0.3em] uppercase">Carousel</span>
				</div>
				<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
					{onboardingScreens.map((src) => (
						<div key={src} className="min-w-[70%] md:min-w-[40%] snap-start border border-bone/10 bg-ink/40">
							<img
								src={src}
								alt="Nakupenda onboarding"
								className="w-full h-auto"
								loading="lazy"
								decoding="async"
							/>
						</div>
					))}
				</div>
			</section>

			<section className="px-6 md:px-12 lg:px-24 pb-20 relative">
				<h2 className="font-serif text-2xl md:text-3xl text-bone/90 mb-6">Whispers — Voice Rooms</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{whisperScreens.map((screen) => (
						<div key={screen.label} className="border border-bone/10 bg-ink/40">
							<img
								src={screen.src}
								alt={screen.label}
								className="w-full h-auto"
								loading="lazy"
								decoding="async"
							/>
							<div className="p-3 text-xs font-grotesk text-bone/50 uppercase tracking-wider">
								{screen.label}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="px-6 md:px-12 lg:px-24 pb-24 relative">
				<h2 className="font-serif text-2xl md:text-3xl text-bone/90 mb-6">Core Interfaces</h2>
				<div className="grid md:grid-cols-2 gap-6">
					{coreScreens.map((screen) => (
						<div key={screen.label} className="border border-bone/10 bg-ink/40">
							<img
								src={screen.src}
								alt={screen.label}
								className="w-full h-auto"
								loading="lazy"
								decoding="async"
							/>
							<div className="p-3 text-xs font-grotesk text-bone/50 uppercase tracking-wider">
								{screen.label}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="px-6 md:px-12 lg:px-24 pb-24">
				<div className="max-w-4xl border-t border-bone/10 pt-8">
					<h3 className="font-serif text-xl text-bone/80">External Archive</h3>
					<p className="font-grotesk text-sm text-bone/50 mt-2">Additional artifacts live on Behance.</p>
					<a
						href="https://www.behance.net/gallery/243708621/Nakupenda"
						target="_blank"
						rel="noreferrer"
						className="inline-block mt-4 font-grotesk text-xs uppercase tracking-[0.3em] text-bone/60 hover:text-bone"
					>
						Open Behance
					</a>
				</div>
			</section>
		</main>
	);
}
