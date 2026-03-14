<script lang="ts">
	const skills = [
		{
			category: "Development",
			items: [
				"PHP",
				"Laravel",
				"PHP-CLI (My own)",
				"NodeJS",
				"React",
				"NextJS",
				"Svelte",
				"Vue",
				"Flutter",
				"SQL",
				"Mysql",
				"MariaDB",
				"Oracle",
				"Microsoft Azure SQL Database",
				"Google Big Query",
				"Python",
				"Java",
				"GO",
				"C++",
				"C#",
			],
		},
		{
			category: "Server Side / Deployment",
			items: [
				"Docker",
				"GUI Virtual Machines",
				"Custom Custom Deployment",
				"Debian / Ubuntu",
				"CentOS",
				"Proxmox",
				"High Availability Clustering",
				"Email Gateway",
				"TrueNas",
				"Wireguard",
				"Private Mesh Networking",
				"Exit Nodes",
				"Cloudflare Zero Trust",
				"Reverse Proxy",
				"Load Balancing",
				"Traefik",
				"Kubernetes",
			],
		},
		{
			category: "Workflows",
			items: ["Github", "Gitea", "Gitlab"],
		},
	];
</script>

<section
	id="skills"
	class="relative bg-slate-50 px-6 py-32 lg:px-20 overflow-hidden"
>
	<!-- Top Fade Bridge from Hero (White) -->
	<div class="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white to-slate-50"></div>
	
	<!-- Background Decorative Elements (Seamless from Hero) -->
	<div
		class="absolute inset-0 pointer-events-none opacity-[0.03]"
		style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 24px 24px;"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl">
		<div class="mb-20 text-center">
			<h2
				class="font-pixel mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl uppercase italic"
			>
				What I Know
			</h2>
			<p
				class="mx-auto max-w-2xl text-lg font-bold uppercase tracking-widest text-slate-400"
			>
				A comprehensive overview of my technical expertise across
				development, infrastructure, and workflows.
			</p>
			<div class="mx-auto mt-8 h-1 w-24 bg-slate-900"></div>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each skills as section, i}
				<div
					class="float-animation flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
					style="animation-delay: {i * 0.2}s"
				>
					<h3
						class="font-pixel mb-6 text-2xl font-black text-slate-900 uppercase italic"
					>
						{section.category}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each section.items as item}
							<span
								class="font-jersey inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-black uppercase tracking-wider text-slate-600 transition-colors hover:bg-slate-900 hover:text-white"
							>
								{item}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
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
</style>
