<script lang="ts">
	import { onMount } from "svelte";
	let scrolled = $state(false);
	let randomRotation = $state(0);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener("scroll", handleScroll);

		// Random rotation for mobile
		let timeoutId: number;
		const rotateLogo = () => {
			if (window.innerWidth < 768) {
				randomRotation += 360;
			} else {
				randomRotation = 0;
			}
			timeoutId = window.setTimeout(
				rotateLogo,
				3000 + Math.random() * 4000,
			);
		};
		rotateLogo();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timeoutId);
		};
	});
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 flex transition-all duration-700 ease-in-out {scrolled
		? 'justify-center px-4 pt-4'
		: 'justify-center'}"
>
	<div
		class="relative flex items-center transition-all duration-700 cubic-bezier-liquid overflow-hidden
		{scrolled
			? 'gap-6 rounded-xl border border-slate-200/50 bg-white/80 backdrop-blur-md px-6 py-2 shadow-2xl scale-100'
			: 'w-full gap-8 bg-transparent px-8 py-6 border-b border-transparent sm:px-16 sm:py-8'}"
	>
		<!-- Noise Texture Overlay (Visible when scrolled) -->
		{#if scrolled}
			<div
				class="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
			>
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<filter id="navNoise">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.65"
							numOctaves="3"
							stitchTiles="stitch"
						/>
					</filter>
					<rect width="100%" height="100%" filter="url(#navNoise)" />
				</svg>
			</div>
		{/if}

		<!-- Brand -->
		<a
			href="#top"
			class="relative z-10 flex items-center gap-3 group shrink-0"
		>
			<div class="relative">
				<img
					src="/images/icon.png"
					alt="Mafuth Icon"
					class="h-7 w-7 rounded-full object-cover border border-slate-200 shadow-sm transition-transform duration-1000 ease-in-out md:group-hover:rotate-360 md:h-9 md:w-9"
					style="transform: rotate({randomRotation}deg)"
				/>
				<div
					class="absolute -inset-1 bg-slate-900/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
				></div>
			</div>
			<div class="flex flex-col">
				<span
					class="font-pixel text-xl font-black tracking-tighter text-slate-900 uppercase italic md:text-2xl leading-none"
					>Mafuth</span
				>
				{#if !scrolled}
					<span
						class="font-jersey text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-1 leading-none"
						>Portfolio</span
					>
				{/if}
			</div>
		</a>

		<div class="flex-1"></div>

		<!-- Links (Desktop) -->
		<div class="hidden items-center gap-1 md:flex relative z-10">
			{#each ["Home", "About", "Skills", "Gallery", "Contact"] as link}
				<a
					href="#{link.toLowerCase() === 'home'
						? 'top'
						: link.toLowerCase()}"
					class="relative px-4 py-2 font-pixel text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 transition-all duration-300 hover:text-slate-900 group italic"
				>
					{link}
					<span
						class="absolute bottom-1 left-4 right-4 h-0.5 bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
					></span>
				</a>
			{/each}
		</div>

		{#if scrolled}
			<div class="h-4 w-px bg-slate-200 mx-2"></div>
		{/if}

		<!-- Status / Hire Me -->
		<a href="#contact" class="relative group z-10">
			<div
				class="relative overflow-hidden font-pixel flex h-10 items-center justify-center bg-slate-950 px-6 text-[11px] font-black uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-slate-800 active:scale-95 italic"
			>
				Hire Me
				<!-- Highlight reflection -->
				<div
					class="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
				></div>
			</div>
			<!-- Subtle drop shadow offset for "physical" feel -->
			<div
				class="absolute -bottom-1 -right-1 inset-0 bg-slate-900/10 -z-10 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
			></div>
		</a>
	</div>
</nav>

<style>
	.cubic-bezier-liquid {
		transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
	}

	:global(html) {
		scroll-behavior: smooth;
	}
</style>
