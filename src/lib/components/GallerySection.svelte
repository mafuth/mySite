<script lang="ts">
	// Using the provided pixelated and high-res images for the gallery as well
	const galleryImages = [
		{ src: "/images/IMG_3644.JPEG" },
		{ src: "/images/IMG_3433.JPEG" },
		{ src: "/images/IMG_3342.JPEG" },
	];

	function handleMouseMove(e: MouseEvent) {
		const card = e.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = (y - centerY) / 15;
		const rotateY = (centerX - x) / 15;

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

<section id="gallery" class="relative bg-orange-50 px-6 py-32 lg:px-20 overflow-hidden">
	<!-- Top Fade Bridge from Skills (Slate-50 to Orange-50) -->
	<div class="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-slate-50 to-orange-50"></div>
	
	<!-- Sunset Decorative Orbs -->
	<div class="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[100px] animate-pulse pointer-events-none"></div>
	<div class="absolute bottom-1/4 -left-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-[100px] animate-pulse pointer-events-none" style="animation-delay: 1s;"></div>

	<div class="mx-auto max-w-7xl">
		<div class="mb-24 text-center">
			<h2
				class="font-pixel mb-6 text-5xl font-black tracking-tighter text-slate-900 sm:text-7xl uppercase italic"
			>
				Photography - Hobby
			</h2>
			<p
				class="mx-auto max-w-2xl text-lg font-bold uppercase tracking-[0.2em] text-slate-400"
			>
				A collection of my favorite captures.
			</p>
			<div class="mx-auto mt-8 h-1 w-24 bg-slate-900"></div>
		</div>

		<div
			class="grid gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16 grid-cols-2 lg:grid-cols-3"
		>
			{#each galleryImages as item, i}
				<div
					class="group relative aspect-4/5 perspective-1000 float-animation {i %
						2 !==
					0
						? 'lg:mt-6'
						: ''} {i % 2 === 0 ? 'lg:-mt-6' : ''}"
					style="animation-delay: {i * 0.2}s"
					onmousemove={handleMouseMove}
					onmouseleave={handleMouseLeave}
					role="presentation"
				>
					<div
						class="relative h-full w-full rounded-xl border border-slate-200 bg-white transition-transform duration-300 ease-out preserve-3d shadow-sm group-hover:shadow-2xl group-hover:border-slate-300"
						style="transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))"
					>
						<!-- Image Container -->
						<div
							class="absolute inset-2 overflow-hidden rounded-lg bg-slate-100"
						>
							<img
								src={item.src}
								alt="Gallery piece"
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<!-- Retro Scanline Overlay on Hover -->
							<div
								class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"
							></div>

							<!-- Overlay Shade -->
							<div
								class="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</div>

						<!-- Glow effect -->
						<div
							class="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.15),transparent)]"
						></div>
					</div>
				</div>
			{/each}
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

	.float-animation {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	/* Stepped retro feel variant if needed, but smooth is nicer for deck */
</style>
