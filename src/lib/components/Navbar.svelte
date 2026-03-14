<script lang="ts">
	import { onMount } from "svelte";
	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 flex transition-all duration-700 cubic-bezier-liquid {scrolled
		? 'justify-center px-6'
		: 'justify-center'}"
>
	<div
		class="flex items-center transition-all duration-700 cubic-bezier-liquid cursor-default
		{scrolled
			? 'gap-6 rounded-b-2xl border-x border-b border-white/40 bg-white/60 backdrop-blur-xl px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:gap-10 md:px-12 md:py-4 scale-100'
			: 'w-full gap-8 bg-transparent px-6 py-4 border-b border-transparent sm:px-12 sm:py-6'}"
	>
		<!-- Brand -->
		<a href="#top" class="flex items-center gap-2 group shrink-0">
			<img
				src="/images/icon.png"
				alt="Mafuth Icon"
				class="h-6 w-6 transition-transform group-hover:rotate-12 md:h-8 md:w-8"
			/>
			<span
				class="font-pixel text-xl font-black tracking-tighter text-slate-900 uppercase italic md:text-2xl transition-all group-hover:tracking-tight"
				>Mafuth</span
			>
		</a>

		{#if !scrolled}
			<div class="flex-1"></div>
		{:else}
			<div class="h-5 w-px bg-slate-200"></div>
		{/if}

		<!-- Links (Desktop) -->
		<div class="hidden gap-8 md:flex">
			<a
				href="#top"
				class="font-pixel text-[12px] font-black uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-slate-900 hover:scale-110 active:scale-95 italic"
				>Home</a
			>
			<a
				href="#skills"
				class="font-pixel text-[12px] font-black uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-slate-900 hover:scale-110 active:scale-95 italic"
				>Skills</a
			>
			<a
				href="#gallery"
				class="font-pixel text-[12px] font-black uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-slate-900 hover:scale-110 active:scale-95 italic"
				>Gallery</a
			>
			<a
				href="#contact"
				class="font-pixel text-[12px] font-black uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-slate-900 hover:scale-110 active:scale-95 italic"
				>Contact</a
			>
		</div>

		<div class="hidden h-5 w-px bg-slate-200 md:block"></div>

		<!-- Hire Me -->
		<a
			href="#contact"
			class="font-pixel flex h-10 items-center justify-center rounded-lg bg-slate-950 px-6 text-[12px] font-black uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-95 shrink-0 italic"
		>
			Hire Me
		</a>
	</div>
</nav>

<style>
	/* Custom liquid easing for ultra-smooth transitions */
	.cubic-bezier-liquid {
		transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
	}
</style>
