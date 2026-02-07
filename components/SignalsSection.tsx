"use client";

import { motion, useInView, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const PRIMARY_SIGNAL = {
	title: "Sleep Was Rehearsal",
	image: "/signals/Dream.jpg",
	lines: [
		"Sleep wasn’t rest.",
		"It was rehearsal.",
		"The body learned stillness.",
		"The mind learned compliance.",
		"Nothing was forced.",
		"Nothing was asked.",
		"The system only needed repetition.",
	],
};

const CORRUPTED_SIGNAL = {
	title: "Lifeless Edge",
	subtitle: "The body didn’t fall. It peeled.",
	image: "/signals/Lifeless-Edge.jpg",
	lines: [
		"No rupture was recorded.",
		"Integrity failed in layers.",
		"The surface detached first.",
		"What remained stayed functional.",
		"The body didn’t fall.",
		"It peeled.",
	],
};

function PrimarySignal({ progress }: { progress: MotionValue<number> }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const lineBase = useMemo(
		() => PRIMARY_SIGNAL.lines.map((_, index) => index / (PRIMARY_SIGNAL.lines.length - 1)),
		[],
	);

	useEffect(() => {
		const media = window.matchMedia("(max-width: 768px)");
		const update = () => setIsMobile(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);

	useEffect(() => {
		if (!containerRef.current || !isMobile) {
			setIsInView(false);
			return;
		}
		const observer = new IntersectionObserver(
			([entry]) => setIsInView(entry.isIntersecting),
			{ threshold: 0.45 },
		);
		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [isMobile]);

	return (
		<div
			ref={containerRef}
			className="space-y-6 group/signal min-h-[520px] md:min-h-[620px]"
		>
			<motion.h3
				style={{
					opacity: useTransform(progress, [0.02, 0.35], [0, 1]),
					y: useTransform(progress, [0.02, 0.35], [10, 0]),
				}}
				className="font-serif text-3xl md:text-5xl text-bone/90 tracking-tight"
			>
				{PRIMARY_SIGNAL.title}
			</motion.h3>
			<motion.div
				style={{
					opacity: useTransform(progress, [0.1, 0.6], [0, 1]),
					y: useTransform(progress, [0.1, 0.6], [12, 0]),
				}}
				className="relative w-full max-w-sm overflow-hidden border border-bone/10 bg-ink/40"
			>
				<img
					src={PRIMARY_SIGNAL.image}
					alt=""
					className={`w-full h-auto grayscale brightness-75 contrast-110 transition-all duration-700 group-hover/signal:grayscale-0 group-hover/signal:brightness-100 ${
						isMobile && isInView ? "grayscale-0 brightness-100" : ""
					}`}
					loading="lazy"
					decoding="async"
				/>
			</motion.div>
			<div className="space-y-2">
				{PRIMARY_SIGNAL.lines.map((line, index) => {
					const start = Math.max(0, lineBase[index] - 0.1);
					const end = Math.min(1, lineBase[index] + 0.25);
					const opacity = useTransform(progress, [start, end], [0, 1]);
					const y = useTransform(progress, [start, end], [12, 0]);

					return (
						<motion.p
							key={line}
							style={{ opacity, y }}
							className="font-grotesk text-sm md:text-base text-bone/70 leading-tight"
						>
							{line}
						</motion.p>
					);
				})}
			</div>
			<details className="group/details max-w-md">
				<summary className="cursor-pointer list-none font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40 hover:text-bone/60 transition-colors">
					Glimpse
				</summary>
				<div className="mt-3 space-y-2 text-sm text-bone/60">
					<p className="font-grotesk leading-relaxed">
						System state recorded during low activity. Response amplitude falls within baseline.
					</p>
				</div>
			</details>
		</div>
	);
}

function CorruptedSignal({ progress }: { progress: MotionValue<number> }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);
	const inView = useInView(containerRef, { amount: 0.5, once: true });
	const [isMobile, setIsMobile] = useState(false);
	const [isInView, setIsInView] = useState(false);

	const lineOffsets = useMemo(
		() =>
			CORRUPTED_SIGNAL.lines.map((_, index) => ({
				x: index % 2 === 0 ? -3 : 4,
				y: index % 3 === 0 ? 2 : -2,
			})),
		[],
	);

	const opacity = useTransform(progress, [0.05, 0.4], [0, 1]);

	const hoverShift = useSpring(hovered ? 1 : 0, {
		stiffness: 80,
		damping: 18,
		mass: 1.2,
	});

	useEffect(() => {
		const media = window.matchMedia("(max-width: 768px)");
		const update = () => setIsMobile(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);

	useEffect(() => {
		if (!containerRef.current || !isMobile) {
			setIsInView(false);
			return;
		}
		const observer = new IntersectionObserver(
			([entry]) => setIsInView(entry.isIntersecting),
			{ threshold: 0.45 },
		);
		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [isMobile]);

	useEffect(() => {
		if (!inView || !containerRef.current) return;
		// Subtle first-reveal flicker without abrupt jumps.
		containerRef.current.animate([{ opacity: 0.85 }, { opacity: 1 }, { opacity: 0.92 }, { opacity: 1 }], {
			duration: 1200,
			easing: "ease-in-out",
		});
	}, [inView]);

	return (
		<motion.div
			ref={containerRef}
			style={{ opacity }}
			className="space-y-4 group/signal min-h-[520px] md:min-h-[620px]"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<motion.h3
				style={{
					opacity: useTransform(progress, [0.02, 0.45], [0, 1]),
					y: useTransform(progress, [0.02, 0.45], [10, 0]),
				}}
				className="font-serif text-3xl md:text-5xl text-bone/90 tracking-tight"
			>
				{CORRUPTED_SIGNAL.title}
			</motion.h3>
			<motion.p
				style={{
					opacity: useTransform(progress, [0.06, 0.5], [0, 1]),
					y: useTransform(progress, [0.06, 0.5], [8, 0]),
				}}
				className="font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40"
			>
				{CORRUPTED_SIGNAL.subtitle}
			</motion.p>
			<motion.div
				style={{
					opacity: useTransform(progress, [0.12, 0.62], [0, 1]),
					y: useTransform(progress, [0.12, 0.62], [12, 0]),
				}}
				className="relative w-full max-w-sm overflow-hidden border border-bone/10 bg-ink/40"
			>
				<motion.img
					src={CORRUPTED_SIGNAL.image}
					alt=""
					className={`w-full h-auto grayscale brightness-70 contrast-125 transition-all duration-700 group-hover/signal:grayscale-0 group-hover/signal:brightness-100 ${
						isMobile && isInView ? "grayscale-0 brightness-100" : ""
					}`}
					style={{
						x: useTransform(hoverShift, [0, 1], [0, 2]),
						opacity: useTransform(hoverShift, [0, 1], [1, 0.92]),
					}}
					loading="lazy"
					decoding="async"
				/>
			</motion.div>

			<div className="space-y-2">
				{CORRUPTED_SIGNAL.lines.map((line, index) => {
					const start = Math.max(0, index / (CORRUPTED_SIGNAL.lines.length + 2));
					const end = Math.min(1, start + 0.35);
					const lineOpacity = useTransform(progress, [start, end], [0, 1]);
					const lineY = useTransform(progress, [start, end], [12, 0]);
					const offsetY = lineOffsets[index]?.y ?? 0;
					const y = useTransform(lineY, (value) => value + offsetY);
					const flicker = useTransform(hoverShift, [0, 1], [0, index % 2 === 0 ? 0.15 : -0.1]);
					const offsetX = lineOffsets[index]?.x ?? 0;
					const x = useTransform(flicker, (value) => value + offsetX);
					const words = line.split(" ");
					return (
						<motion.p
							key={line}
							style={{
								opacity: lineOpacity,
								x,
								y,
							}}
							className="font-grotesk text-sm md:text-base text-bone/65 leading-tight"
						>
							{words.map((word, wordIndex) => {
								const shouldShift = wordIndex === 1 || wordIndex === words.length - 2;
								return (
									<motion.span
										key={`${word}-${wordIndex}`}
										style={{
											display: "inline-block",
											x: shouldShift
												? useTransform(hoverShift, [0, 1], [0, wordIndex % 2 === 0 ? 4 : -4])
												: 0,
											opacity: shouldShift ? useTransform(hoverShift, [0, 1], [1, 0.7]) : 1,
										}}
									>
										{word}
										{wordIndex < words.length - 1 ? "\u00A0" : ""}
									</motion.span>
								);
							})}
						</motion.p>
					);
				})}
			</div>
			<details className="group/details max-w-md">
				<summary className="cursor-pointer list-none font-grotesk text-xs uppercase tracking-[0.3em] text-bone/40 hover:text-bone/60 transition-colors">
					Glimpse
				</summary>
				<div className="mt-3 space-y-2 text-sm text-bone/60">
					<p className="font-grotesk leading-relaxed">
						Integrity scan flagged partial detachment. Recovery state unknown.
					</p>
				</div>
			</details>
		</motion.div>
	);
}

export default function SignalsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 30,
		damping: 20,
		mass: 1.4,
	});
	const primaryOpacity = useTransform(smoothProgress, [0, 0.08, 0.6, 0.82], [0, 1, 1, 0]);
	const corruptedOpacity = useTransform(smoothProgress, [0.45, 0.72, 1], [0, 1, 1]);
	const corruptedRise = useTransform(smoothProgress, [0.42, 0.72], [44, 0]);
	const ambientY = useSpring(useTransform(smoothProgress, [0, 1], [6, -6]), {
		stiffness: 40,
		damping: 20,
		mass: 1.4,
	});
	const corruptedY = useTransform([ambientY, corruptedRise], ([ambient, rise]) => {
		const a = ambient as number;
		const r = rise as number;
		return a * -0.6 + r;
	});

	return (
		<section
			id="signals"
			ref={sectionRef}
			className="relative h-[150vh] px-6 md:px-12 lg:px-24 section-spacing overflow-hidden"
		>
			<div className="sticky top-5 md:top-10 min-h-[70vh] flex items-center">
				<div className="grid md:grid-cols-2 gap-10 w-full items-center">
					<motion.div style={{ opacity: primaryOpacity, y: ambientY }} className="max-w-xl">
						<PrimarySignal progress={useTransform(smoothProgress, [0, 0.5], [0, 1])} />
					</motion.div>

					<motion.div
						style={{
							opacity: corruptedOpacity,
							y: corruptedY,
						}}
						className="max-w-xl md:mt-[400px]"
					>
						<CorruptedSignal progress={useTransform(smoothProgress, [0.4, 1], [0, 1])} />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
