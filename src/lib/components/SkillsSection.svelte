<script lang="ts">
	const skills = [
		{
			category: "Development",
			description: "Building robust applications with modern stacks.",
			items: [
				"PHP", "Laravel", "NodeJS", "React", "NextJS", "Svelte", 
				"Vue", "Flutter", "SQL", "Mysql", "MariaDB", "Oracle",
				"Python", "Java", "GO", "C++", "C#"
			],
			rotation: "-1deg"
		},
		{
			category: "Infrastructure",
			description: "Orchestrating scalable and secure systems.",
			items: [
				"Docker", "Kubernetes", "Linux", "Proxmox", "Clustering",
				"Wireguard", "Cloudflare", "Traefik", "Load Balancing"
			],
			rotation: "1.5deg"
		},
		{
			category: "Workflows",
			description: "Streamlining dev cycles and collaboration.",
			items: ["Github", "Gitea", "Gitlab", "CI/CD"],
			rotation: "-2deg"
		},
	];

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
	id="skills"
	class="relative bg-slate-50 px-6 py-24 lg:px-20 overflow-hidden"
>
	<!-- Noise Texture -->
	<div class="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay">
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<filter id="noiseFilter">
				<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
			</filter>
			<rect width="100%" height="100%" filter="url(#noiseFilter)" />
		</svg>
	</div>

	<!-- Background Decorative Grid -->
	<div
		class="absolute inset-0 pointer-events-none opacity-[0.05]"
		style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 32px 32px;"
	></div>
	
	<!-- Top Fade Bridge -->
	<div class="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white to-slate-50"></div>

	<div class="relative z-10 mx-auto max-w-7xl">
		<div class="mb-24 lg:flex lg:items-end lg:justify-between">
			<div class="max-w-2xl">
				<h2
					class="font-pixel mb-6 text-6xl font-black tracking-tighter text-slate-900 sm:text-8xl uppercase italic leading-none"
				>
					Tech.<br/><span class="text-slate-200 outline-text">Stack</span>
				</h2>
				<p
					class="text-lg font-bold uppercase tracking-[0.3em] text-slate-400 mix-blend-multiply"
				>
					A comprehensive technical inventory.
				</p>
			</div>
			<div class="hidden lg:block h-px flex-1 mx-12 bg-slate-200/60 mb-4"></div>
			<div class="mt-8 lg:mt-0 lg:mb-4">
				<span class="font-pixel text-xl text-slate-300">SYSTEM.LOG v2.4</span>
			</div>
		</div>

		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
			{#each skills as section, i}
				<div
					class="skill-card-container"
					style="animation-delay: {i * 0.1}s; --base-rotation: {section.rotation}"
				>
					<div
						class="group relative perspective-1000 bg-white border border-slate-200 p-8 shadow-xl transition-all duration-500 ease-out preserve-3d h-full hover:shadow-2xl hover:border-slate-300"
						onmousemove={handleMouseMove}
						onmouseleave={handleMouseLeave}
						role="presentation"
						style="transform: rotate(var(--base-rotation)) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))"
					>
						<!-- Decorative corner accent -->
						<div class="absolute top-0 right-0 w-12 h-12 bg-blue-600 transition-colors flex items-center justify-center border-b border-l border-white/20">
							<span class="font-pixel text-[10px] text-white">0{i+1}</span>
						</div>

						<h3
							class="font-pixel mb-2 text-3xl font-black text-slate-900 uppercase italic tracking-tight"
						>
							{section.category}
						</h3>
						<p class="font-jersey text-md text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-50 pb-4">
							{section.description}
						</p>

						<div class="flex flex-wrap gap-2">
							{#each section.items as item}
								<span
									class="font-jersey inline-flex items-center bg-slate-50 border border-slate-100 px-3 py-1 text-sm font-black uppercase tracking-wider text-slate-600 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:scale-110"
								>
									{item}
								</span>
							{/each}
						</div>

						<!-- Gloss effect -->
						<div
							class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(15,23,42,0.03),transparent_70%)]"
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

	.skill-card-container {
		opacity: 0;
		transform: translateY(30px);
		animation: reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	@keyframes reveal {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

