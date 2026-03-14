<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	const images = [
		"/images/Gemini_Generated_Image_3zjqhr3zjqhr3zjq.png",
		"/images/Gemini_Generated_Image_hthyjrhthyjrhthy.png",
		"/images/Gemini_Generated_Image_r6e2uzr6e2uzr6e2.png",
	];

	let currentIndex = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
		}, 3000);
		return () => clearInterval(interval);
	});
</script>

<section
	id="top"
	class="relative flex h-screen flex-col items-center justify-between overflow-hidden bg-white px-4 pb-0 pt-24 sm:px-6 sm:pt-32"
>
	<!-- Background Decorative Elements -->
	<div
		class="absolute inset-0 pointer-events-none opacity-[0.03]"
		style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 24px 24px;"
	></div>
	<div
		class="absolute top-1/4 left-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl sm:hidden"
	></div>
	<div
		class="absolute bottom-1/4 right-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl sm:hidden"
	></div>

	<div class="relative z-20 flex flex-col items-center text-center">
		<h1
			class="font-pixelify text-7xl font-black tracking-tighter text-slate-900 sm:text-8xl lg:text-[10rem] mb-4 leading-[0.9] mt-6 sm:mt-12 drop-shadow-sm"
		>
			Mohamed <span
				class="bg-linear-to-br from-primary to-blue-900 bg-clip-text text-transparent"
				>Mafaaz</span
			>
		</h1>

		<p
			class="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] text-slate-400"
		>
			Developer • Architect • Designer
		</p>
	</div>

	<!-- Centralized & Faded Image Coming Out from Bottom -->
	<div class="relative mt-auto w-full max-w-5xl overflow-visible px-4">
		<div
			class="relative mx-auto flex h-[50vh] sm:h-[55vh] w-full items-end justify-center"
		>
			<div
				class="animate-retro-float relative w-full h-full flex items-end justify-center"
			>
				<img
					src="/images/Gemini_Generated_Image_3zjqhr3zjqhr3zjq.png"
					alt="Pixel Master"
					class="h-full w-auto max-w-none object-contain object-bottom scale-[1.05] sm:scale-100 transition-transform duration-700 brightness-[1.02]"
				/>
			</div>

			<!-- Deep Gradient Fade at the Bottom -->
			<div
				class="absolute inset-x-0 bottom-[-2px] h-32 sm:h-48 bg-linear-to-t from-white via-white/95 to-transparent z-10"
			></div>
		</div>
	</div>
</section>

<style>
	@keyframes retro-float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-30px);
		}
	}
	.animate-retro-float {
		/* More steps for smoother but still retro feel */
		animation: retro-float 6s infinite steps(24);
	}
</style>
