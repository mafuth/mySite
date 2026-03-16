<script lang="ts">
	import Mail from "lucide-svelte/icons/mail";
	import Github from "lucide-svelte/icons/github";
	import Linkedin from "lucide-svelte/icons/linkedin";
	import Instagram from "lucide-svelte/icons/instagram";
	import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";

	function handleMouseMove(e: MouseEvent) {
		const card = e.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = (y - centerY) / 20;
		const rotateY = (centerX - x) / 20;

		card.style.setProperty("--rx", `${rotateX}deg`);
		card.style.setProperty("--ry", `${rotateY}deg`);
		card.style.setProperty("--x", `${(x / rect.width) * 100}%`);
		card.style.setProperty("--y", `${(y / rect.height) * 100}%`);
	}

	function handleMouseLeave(e: MouseEvent) {
		const card = e.currentTarget as HTMLElement;
		card.style.setProperty("--rx", "0deg");
		card.style.setProperty("--ry", "0deg");
	}
</script>

<section
	id="contact"
	class="relative bg-sky-50 px-6 py-24 lg:px-20 overflow-hidden"
>
	<!-- Noise Texture Overlay -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
	>
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<filter id="noiseFilter">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.65"
					numOctaves="3"
					stitchTiles="stitch"
				/>
			</filter>
			<rect width="100%" height="100%" filter="url(#noiseFilter)" />
		</svg>
	</div>

	<!-- Background Orbs -->
	<div
		class="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-sky-400/20 blur-[120px] animate-pulse pointer-events-none"
	></div>
	<div
		class="absolute bottom-0 -left-20 h-96 w-96 rounded-full bg-slate-400/10 blur-[100px] animate-pulse pointer-events-none"
	></div>

	<!-- Top Fade Bridge -->
	<div
		class="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-orange-50 to-sky-50"
	></div>

	<div class="relative z-10 mx-auto max-w-5xl">
		<div class="mb-24 text-center">
			<h2
				class="font-pixel mb-6 text-6xl font-black tracking-tighter text-slate-900 sm:text-8xl uppercase italic leading-none"
			>
				Reach.<br /><span class="text-sky-600/20 outline-text"
					>Network</span
				>
			</h2>
			<p
				class="text-lg font-bold uppercase tracking-[0.3em] text-slate-400"
			>
				Open for new opportunities and collaborations.
			</p>
			<div class="mx-auto mt-12 h-px w-32 bg-slate-200"></div>
		</div>

		<div class="grid gap-12 md:grid-cols-2">
			<!-- Contact Card -->
			<div class="contact-card-container" style="animation-delay: 0.1s;">
				<div
					class="group relative perspective-1000 bg-white p-8 pb-12 shadow-xl border border-slate-100 transition-all duration-500 ease-out preserve-3d group-hover:shadow-2xl -rotate-1"
					onmousemove={handleMouseMove}
					onmouseleave={handleMouseLeave}
					role="presentation"
					style="transform: rotate(-1deg) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))"
				>
					<div
						class="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-6"
					>
						<Mail class="h-6 w-6" />
					</div>
					<h3
						class="font-pixel mb-2 text-3xl font-black text-slate-900 uppercase italic tracking-tight"
					>
						Direct Link
					</h3>
					<p
						class="font-jersey mb-12 text-lg text-slate-400 uppercase tracking-widest leading-tight"
					>
						Standard protocols.
					</p>

					<a
						href="mailto:hello@mafuth.online"
						class="absolute bottom-0 left-0 right-0 font-pixel flex items-center justify-center gap-2 bg-slate-900 px-6 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-slate-800 active:scale-95"
					>
						Initialize Connection
						<ArrowUpRight class="h-4 w-4" />
					</a>
				</div>
			</div>

			<!-- Socials Card -->
			<div class="contact-card-container" style="animation-delay: 0.3s;">
				<div
					class="group relative perspective-1000 bg-white p-8 pb-12 shadow-xl border border-slate-100 transition-all duration-500 ease-out preserve-3d group-hover:shadow-2xl rotate-2"
					onmousemove={handleMouseMove}
					onmouseleave={handleMouseLeave}
					role="presentation"
					style="transform: rotate(2deg) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))"
				>
					<div
						class="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 border border-slate-100 text-slate-900 transition-transform group-hover:scale-110 group-hover:-rotate-6"
					>
						<Github class="h-6 w-6" />
					</div>
					<h3
						class="font-pixel mb-2 text-3xl font-black text-slate-900 uppercase italic tracking-tight"
					>
						Social Grid
					</h3>
					<p
						class="font-jersey mb-12 text-lg text-slate-400 uppercase tracking-widest leading-tight"
					>
						Active across nodes. <br />Follow for updates.
					</p>

					<div class="flex flex-wrap gap-4">
						<a
							href="https://github.com/mafuth"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-12 w-12 items-center justify-center bg-slate-50 border border-slate-100 text-slate-500 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:-translate-y-2"
						>
							<Github class="h-6 w-6" />
						</a>
						<a
							href="https://www.linkedin.com/in/mohamed-mafaaz-630387193"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-12 w-12 items-center justify-center bg-slate-50 border border-slate-100 text-slate-500 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:-translate-y-2"
						>
							<Linkedin class="h-6 w-6" />
						</a>
						<a
							href="https://www.instagram.com/m.a.f.u.t.h_mv"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-12 w-12 items-center justify-center bg-slate-50 border border-slate-100 text-slate-500 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:-translate-y-2"
						>
							<Instagram class="h-6 w-6" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Simplified Footer -->
		<div
			class="mt-32 flex flex-col items-center justify-between gap-12 border-t border-slate-200/50 pt-16 md:flex-row"
		>
			<div class="flex items-center gap-4 group">
				<img
					src="/images/icon.png"
					alt="Mafuth Icon"
					class="h-10 w-10 rounded-full object-cover border border-slate-200 shadow-sm transition-transform group-hover:rotate-12"
				/>
				<span
					class="font-pixel text-3xl font-black tracking-tight text-slate-900 uppercase italic"
					>Mafuth</span
				>
			</div>

			<div class="flex flex-col items-center md:items-end gap-2">
				<p
					class="font-jersey text-md font-black uppercase tracking-[0.3em] text-slate-400"
				>
					&copy; {new Date().getFullYear()} — Designed for the web.
				</p>
				<a
					href="#top"
					class="font-pixel text-xs font-black uppercase tracking-widest text-slate-300 transition-colors hover:text-slate-900 italic"
				>
					Return to top
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.perspective-1000 {
		perspective: 1000px;
	}
	.preserve-3d {
		transform-style: preserve-3d;
	}

	.outline-text {
		-webkit-text-stroke: 1px rgba(15, 23, 42, 0.1);
	}

	.contact-card-container {
		opacity: 0;
		transform: translateY(40px);
		animation: reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	@keyframes reveal {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
