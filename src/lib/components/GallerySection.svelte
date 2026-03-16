<script lang="ts">
	const galleryImages = [
		{
			src: "/images/IMG_3644.jpeg",
			title: "Lunar Phase",
			location: "",
			rotation: "-2deg",
			offset: "-15px",
		},
		{
			src: "/images/IMG_3433.jpeg",
			title: "Golden Hour",
			location: "",
			rotation: "3deg",
			offset: "15px",
		},
		{
			src: "/images/IMG_3342.jpeg",
			title: "Deep Night",
			location: "",
			rotation: "-1.5deg",
			offset: "-10px",
		},
		{
			src: "/images/IMG_3352.jpeg",
			title: "Moonlit Tower",
			location: "",
			rotation: "-2deg",
			offset: "0",
		},
		{
			src: "/images/IMG_3891.jpeg",
			title: "Lunar Drones",
			location: "",
			rotation: "3deg",
			offset: "0",
		},
		{
			src: "/images/IMG_3453.jpeg",
			title: "Industrial Sunset",
			location: "",
			rotation: "-1deg",
			offset: "0",
		},
	];

	function handleMouseMove(e: MouseEvent) {
		const card = e.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = (y - centerY) / 10;
		const rotateY = (centerX - x) / 10;

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
	id="gallery"
	class="relative bg-orange-50 px-6 py-24 lg:px-20 overflow-hidden"
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

	<!-- Enhanced Decorative Orbs -->
	<div
		class="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/20 blur-[120px] animate-pulse pointer-events-none"
	></div>
	<div
		class="absolute bottom-1/4 -left-40 h-[400px] w-[400px] rounded-full bg-yellow-400/20 blur-[100px] animate-pulse pointer-events-none"
		style="animation-delay: 1.5s;"
	></div>

	<div class="mx-auto max-w-7xl relative z-10">
		<div
			class="mb-20 text-center lg:text-left lg:flex lg:items-end lg:justify-between"
		>
			<div class="max-w-2xl">
				<h2
					class="font-pixel mb-6 text-6xl font-black tracking-tighter text-slate-900 sm:text-8xl uppercase italic leading-none"
				>
					Archive.<br /><span class="text-orange-600/20 outline-text"
						>Capture</span
					>
				</h2>
				<p
					class="text-lg font-bold uppercase tracking-[0.3em] text-slate-500/80 mix-blend-multiply"
				>
					Visual fragments of a journey.
				</p>
			</div>
			<div
				class="hidden lg:block h-px flex-1 mx-12 bg-slate-200/50 mb-4"
			></div>
		</div>

		<div
			class="flex flex-col gap-24 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-32"
		>
			{#each galleryImages as item, i}
				<div
					class="gallery-item-container flex justify-center {i % 2 !==
					0
						? 'md:mt-16'
						: ''}"
					style="--item-offset: {item.offset}; --item-rotation: {item.rotation}; animation-delay: {i *
						0.2}s;"
				>
					<div
						class="group relative perspective-1000 w-full max-w-[340px]"
						onmousemove={handleMouseMove}
						onmouseleave={handleMouseLeave}
						role="presentation"
					>
						<!-- Polaroid Card Interior -->
						<div
							class="polaroid-card relative aspect-[4/5.2] w-full bg-white p-3 pb-14 shadow-xl transition-all duration-500 ease-out preserve-3d group-hover:shadow-2xl group-hover:scale-[1.02]"
							style="transform: translate(var(--item-offset), 0) rotate(var(--item-rotation)) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))"
						>
							<!-- Image Container -->
							<div
								class="relative h-full w-full overflow-hidden bg-slate-100 ring-1 ring-slate-900/5"
							>
								<img
									src={item.src}
									alt={item.title}
									class="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
								/>

								<!-- Light Leak Overlay -->
								<div
									class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-40 bg-[radial-gradient(circle_at_0%_0%,rgba(255,150,50,0.4),transparent_70%)]"
								></div>
							</div>

							<!-- Polaroid Metadata Tags -->
							<div
								class="absolute bottom-4 left-4 right-4 flex justify-between items-end border-t border-slate-50 pt-2"
							>
								<div class="flex flex-col">
									<span
										class="font-pixel text-[10px] uppercase text-slate-400 tracking-tighter"
										>Title</span
									>
									<span
										class="font-jersey text-lg leading-none text-slate-800"
										>{item.title}</span
									>
								</div>
								<div class="flex flex-col items-end">
									<span
										class="font-pixel text-[10px] uppercase text-slate-400 tracking-tighter"
										>Loc</span
									>
									<span
										class="font-jersey text-lg leading-none text-slate-800"
										>{item.location}</span
									>
								</div>
							</div>

							<!-- Glow effect for 3D TILT -->
							<div
								class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.4),transparent_60%)]"
							></div>
						</div>

						<!-- Decorative "Tape" (Only visible on desktop or subtly on mobile) -->
						<div
							class="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-slate-900/5 backdrop-blur-sm border border-white/20 rotate-1 shadow-sm opacity-50 z-20 pointer-events-none"
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

	.outline-text {
		-webkit-text-stroke: 1px rgba(15, 23, 42, 0.1);
	}

	.polaroid-card {
		will-change: transform;
	}

	.gallery-item-container {
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

	@media (max-width: 768px) {
		.gallery-item-container {
			/* On mobile, we emphasize the staggered feel by alternating offsets */
			margin-left: var(--item-offset);
		}

		.polaroid-card {
			/* Force smaller rotation logic on mobile */
			transform: rotate(calc(var(--item-rotation) * 0.5)) !important;
		}
	}
</style>
