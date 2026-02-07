"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const designs = [
	{
		id: 1,
		title: "Rasman",
		category: "Music Portfolio",
		description: "Audio-led layout with harmonic pacing and responsive emphasis.",
		year: "2025",
		tools: ["Next.js", "Web Audio", "Motion"],
		visual: "wave",
		caseStudy: "/case-studies/rasman",
	},
	{
		id: 2,
		title: "Nakupenda",
		category: "Design Exploration",
		description: "Emotional UI tuned for calm, intimacy, and restraint.",
		year: "2026",
		tools: ["Typography", "Story Rhythm", "System Tone"],
		visual: "pulse",
		caseStudy: "/case-studies/nakupenda",
	},
	{
		id: 4,
		title: "Sleep Surveillance",
		category: "Bio Signal System",
		description: "Dream-state telemetry with consent-first monitoring.",
		year: "2026",
		tools: ["Signal Design", "Ethical Telemetry", "Temporal UI"],
		visual: "sleep",
		caseStudy: "/case-studies/sleep-surveillance",
	},
];

function SystemPreview({ variant }: { variant: string }) {
	if (variant === "pulse") {
		return (
			<div className="relative h-48 md:h-56 overflow-hidden border border-bone/10 bg-ink/70">
				<motion.div
					className="absolute inset-0"
					animate={{ opacity: [0.2, 0.35, 0.2] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
					style={{
						background: "radial-gradient(circle at 30% 30%, rgba(244,244,240,0.12) 0%, transparent 60%)",
					}}
				/>
				<motion.div
					className="absolute inset-0"
					animate={{ opacity: [0.1, 0.3, 0.1] }}
					transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
					style={{
						background: "radial-gradient(circle at 70% 60%, rgba(139,0,0,0.2) 0%, transparent 55%)",
					}}
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<motion.div
						className="w-20 h-20 rounded-full border border-bone/30"
						animate={{ scale: [0.85, 1.1, 0.9], opacity: [0.6, 1, 0.7] }}
						transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.div
						className="absolute w-36 h-36 rounded-full border border-accent/20"
						animate={{ scale: [0.7, 1.15, 0.8], opacity: [0.2, 0.6, 0.25] }}
						transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
					/>
					<motion.div
						className="absolute w-52 h-52 rounded-full border border-bone/10"
						animate={{ scale: [0.6, 1.2, 0.7], opacity: [0.15, 0.4, 0.2] }}
						transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
					/>
				</div>
				<svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220">
					<motion.path
						d="M0 110 C 80 70, 140 150, 220 110 C 280 90, 340 140, 400 100"
						stroke="rgba(244,244,240,0.2)"
						strokeWidth="1.2"
						fill="none"
						animate={{ pathLength: [0.3, 1, 0.5] }}
						transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
					/>
				</svg>
			</div>
		);
	}

	if (variant === "wave") {
		return (
			<div className="relative h-48 md:h-56 overflow-hidden border border-bone/10 bg-ink/70">
				<svg viewBox="0 0 600 200" className="absolute inset-0 w-full h-full">
					<motion.path
						d="M0 120 C 80 60, 160 180, 240 120 C 320 60, 400 180, 480 120 C 520 90, 560 100, 600 120"
						stroke="rgba(244,244,240,0.25)"
						strokeWidth="2"
						fill="none"
						animate={{ pathLength: [0.4, 1, 0.6] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.path
						d="M0 90 C 80 140, 160 30, 240 90 C 320 140, 400 30, 480 90 C 520 120, 560 110, 600 90"
						stroke="rgba(139,0,0,0.3)"
						strokeWidth="1.5"
						fill="none"
						animate={{ pathLength: [0.6, 1, 0.8] }}
						transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
					/>
					<motion.path
						d="M0 140 C 100 110, 200 170, 300 130 C 400 90, 500 150, 600 120"
						stroke="rgba(244,244,240,0.18)"
						strokeWidth="1"
						fill="none"
						animate={{ pathLength: [0.2, 1, 0.4] }}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
					/>
				</svg>
				<div className="absolute bottom-4 left-4 text-xs font-grotesk text-bone/40 uppercase tracking-[0.3em]">
					Audio Trace
				</div>
				<motion.div
					className="absolute right-4 top-4 text-[10px] font-mono text-bone/30 tracking-[0.4em]"
					animate={{ opacity: [0.2, 0.6, 0.25] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
				>
					Hz/Δ
				</motion.div>
			</div>
		);
	}

	if (variant === "sleep") {
		return (
			<div className="relative h-48 md:h-56 overflow-hidden border border-bone/10 bg-ink/70">
				<img
					src="/signals/Dreamlike Forest Rest.jpg"
					alt="Sleep surveillance signal"
					className="w-full h-auto object-cover opacity-70"
					loading="lazy"
					decoding="async"
				/>
				<motion.div
					className="absolute inset-0"
					animate={{ opacity: [0.2, 0.45, 0.25] }}
					transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
					style={{
						background: "radial-gradient(circle at 50% 40%, rgba(244,244,240,0.18) 0%, transparent 60%)",
					}}
				/>
				<motion.div
					className="absolute inset-0"
					animate={{ opacity: [0.1, 0.28, 0.12] }}
					transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
					style={{
						background: "radial-gradient(circle at 70% 65%, rgba(139,0,0,0.2) 0%, transparent 55%)",
					}}
				/>
				<motion.div
					className="absolute left-4 right-4 top-6 h-px bg-bone/30"
					animate={{ scaleX: [0.2, 1, 0.4] }}
					transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
					style={{ transformOrigin: "left" }}
				/>
				<motion.div
					className="absolute inset-0"
					animate={{ opacity: [0.05, 0.18, 0.08] }}
					transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
					style={{
						background: "linear-gradient(90deg, transparent, rgba(244,244,240,0.12), transparent)",
					}}
				/>
				<div className="absolute bottom-3 left-4 text-xs font-grotesk text-bone/50 uppercase tracking-[0.3em]">
					Dream Trace
				</div>
			</div>
		);
	}

	return (
		<div className="relative h-48 md:h-56 overflow-hidden border border-bone/10 bg-ink/70">
			<div className="absolute inset-0 grid grid-cols-8 gap-px">
				{Array.from({ length: 64 }).map((_, idx) => (
					<motion.div
						key={idx}
						className="bg-bone/5"
						animate={{ opacity: [0.2, 0.7, 0.35] }}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.03 }}
					/>
				))}
			</div>
			<motion.div
				className="absolute inset-5 border border-bone/25"
				animate={{ opacity: [0.3, 0.8, 0.4] }}
				transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute inset-10 border border-accent/20"
				animate={{ opacity: [0.2, 0.6, 0.3] }}
				transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute inset-0"
				animate={{ opacity: [0.1, 0.3, 0.15] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				style={{
					background: "radial-gradient(circle at 40% 40%, rgba(139,0,0,0.2) 0%, transparent 60%)",
				}}
			/>
		</div>
	);
}

function DesignCard({ design, index }: { design: (typeof designs)[0]; index: number }) {
	const cardRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

	return (
		<motion.div
			ref={cardRef}
			style={{ y, opacity, scale }}
			className={`group relative ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
		>
			<div className="relative overflow-hidden glass-heavy p-8 md:p-12 border border-bone/10 group-hover:border-bone/20 transition-colors duration-700">
				{/* Subtle scan line on hover */}
				<motion.div
					className="absolute inset-x-0 h-px bg-accent/10"
					initial={{ y: 0, opacity: 0 }}
					whileHover={{ opacity: 1 }}
					animate={{ y: ["0%", "100%"] }}
					transition={{
						y: { duration: 2, repeat: Infinity, ease: "linear" },
						opacity: { duration: 0.3 },
					}}
				/>

				{/* Content */}
				<div className="relative z-10 space-y-6">
					{/* Header */}
					<div className="flex items-start justify-between gap-4">
						<div className="space-y-2 flex-1">
							<span className="font-distorted text-xs tracking-[0.3em] text-accent opacity-60">
								{String(design.id).padStart(2, "0")} / {design.category}
							</span>
							<h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone group-hover:text-bone/90 transition-colors duration-500">
								{design.title}
							</h3>
						</div>
						<span className="font-grotesk text-sm text-bone/40">{design.year}</span>
					</div>

					{/* Description */}
					<p className="font-grotesk text-base md:text-lg text-bone/70 leading-relaxed max-w-2xl">
						{design.description}
					</p>

					{/* Tools */}
					<div className="flex flex-wrap gap-2 pt-4">
						{design.tools.map((tool) => (
							<span
								key={tool}
								className="px-3 py-1 text-xs font-grotesk text-bone/50 border border-bone/10 bg-charcoal/30 backdrop-blur-sm"
							>
								{tool}
							</span>
						))}
					</div>

					{design.caseStudy ? (
						<div className="pt-2">
							<a
								href={design.caseStudy}
								className="font-grotesk text-xs uppercase tracking-[0.3em] text-bone/50 hover:text-bone transition-colors"
							>
								Open Case Study
							</a>
						</div>
					) : null}

					{/* System preview */}
					<div className="mt-8">
						<SystemPreview variant={design.visual} />
					</div>
				</div>

				{/* Corner accents */}
				<div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-bone/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
				<div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-bone/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
			</div>

			{/* Connecting line */}
			<motion.div
				className={`absolute ${index % 2 === 0 ? "right-0" : "left-0"} top-1/2 w-12 h-px bg-bone/10`}
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.2, duration: 0.8 }}
			/>
		</motion.div>
	);
}

export default function DesignShowcase() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

	return (
		<section id="designs" ref={sectionRef} className="section-spacing px-6 md:px-12 lg:px-24 relative grain">
			{/* Section title */}
			<motion.div style={{ y: titleY, opacity: titleOpacity }} className="mb-24 md:mb-32 max-w-5xl">
				<h2 className="font-distorted text-xs tracking-[0.3em] text-accent mb-4 opacity-60">SYSTEM LAB</h2>
				<p className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-bone/90 leading-tight">
					Interfaces as instruments.
					<br />
					<span className="text-bone/40">Experimental systems, not portfolio tiles.</span>
				</p>
			</motion.div>

			{/* Design cards */}
			<div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
				{designs.map((design, index) => (
					<DesignCard key={design.id} design={design} index={index} />
				))}
			</div>
		</section>
	);
}
