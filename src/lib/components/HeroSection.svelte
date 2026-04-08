<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	const skills = [
		"DOCKER",
		"SVELTE",
		"NEXTJS",
		"LARAVEL",
		"KUBERNETES",
		"PROXMOX",
		"MYSQL",
		"JAVA",
		"MARIA_DB",
		"CENTOS",
		"Python",
		"GIT",
		"CLOUD_ARCH",
		"WIRE_GUARD",
		"FLUTTER",
		"TRAEFIK",
		"PHP",
		"SQL",
		"REDIS",
		"NGINX",
		"LINUX",
		"ZERO_TRUST",
		"EXIT_NODES",
		"MESH_NET",
		"HA_CLUSTER",
		"AZURE",
		"GOOGLE_CLOUD",
		"FIREBASE",
		"MONGODB",
		"TYPESCRIPT",
		"JAVASCRIPT",
		"GO_LANG",
		"C_SHARP",
	];

	let canvas: HTMLCanvasElement;
	let mouse = { x: 0, y: 0, active: false };

	class Particle {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		text: string;
		opacity: number;
		blur: number;
		baseX: number;
		baseY: number;

		constructor(canvasWidth: number, canvasHeight: number, text: string) {
			this.x = Math.random() * canvasWidth;
			this.y = Math.random() * canvasHeight;
			this.baseX = this.x;
			this.baseY = this.y;
			this.vx = (Math.random() - 0.5) * 0.5;
			this.vy = (Math.random() - 0.5) * 0.5;
			this.text = text;

			// Depth layers
			const depth = Math.random();
			if (depth > 0.8) {
				this.size = 14;
				this.opacity = 0.15;
				this.blur = 0;
			} else if (depth > 0.4) {
				this.size = 12;
				this.opacity = 0.1;
				this.blur = 1;
			} else {
				this.size = 10;
				this.opacity = 0.05;
				this.blur = 3;
			}
		}

		update(width: number, height: number) {
			// Slow rhythmic oscillation around the base point
			const time = Date.now() * 0.001;
			const oscX = Math.sin(time + this.baseX) * 10;
			const oscY = Math.cos(time + this.baseY) * 10;

			let targetX = this.baseX + oscX;
			let targetY = this.baseY + oscY;

			// Mouse interaction: Pushes particles away
			if (mouse.active) {
				const dx = mouse.x - targetX;
				const dy = mouse.y - targetY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < 250) {
					const force = (250 - dist) / 250;
					targetX -= dx * force * 0.3;
					targetY -= dy * force * 0.3;
				}
			}

			// Smoothly move towards the target position
			this.x += (targetX - this.x) * 0.05;
			this.y += (targetY - this.y) * 0.05;
		}

		draw(ctx: CanvasRenderingContext2D) {
			ctx.save();
			if (this.blur > 0) ctx.filter = `blur(${this.blur}px)`;
			ctx.globalAlpha = this.opacity;
			ctx.font = `italic bold ${this.size}px "Pixelify Sans"`;
			ctx.fillStyle = "#0f172a";
			ctx.strokeStyle = "#0f172a";
			ctx.lineWidth = 1;

			// Draw Tag Box
			const textWidth = ctx.measureText(this.text).width;
			ctx.strokeRect(
				this.x - 5,
				this.y - this.size,
				textWidth + 10,
				this.size + 6,
			);
			ctx.fillText(this.text, this.x, this.y);
			ctx.restore();
		}
	}

	onMount(() => {
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let particles: Particle[] = [];
		let animationFrame: number;

		const init = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			particles = skills.map(
				(skill) => new Particle(canvas.width, canvas.height, skill),
			);
			// Add some extra points for denser network
			for (let i = 0; i < 30; i++) {
				particles.push(new Particle(canvas.width, canvas.height, ""));
			}
		};

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw Connections
			ctx.strokeStyle = "rgba(15, 23, 42, 0.03)";
			ctx.lineWidth = 1;
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < 200) {
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}

			particles.forEach((p) => {
				p.update(canvas.width, canvas.height);
				p.draw(ctx);
			});

			animationFrame = requestAnimationFrame(animate);
		};

		init();
		animate();

		window.addEventListener("resize", init);
		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener("resize", init);
		};
	});

	function handleMouseMove(e: MouseEvent) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
		mouse.active = true;
	}

	function handleMouseLeave() {
		mouse.active = false;
	}
</script>

<section
	id="top"
	class="relative flex min-h-[130vh] flex-col items-center justify-between overflow-hidden bg-white px-4 pb-0 pt-24 sm:px-6 sm:pt-32"
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
>
	<!-- Background Ooredoo HQ (Very Back)
	<div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
		<img
			src="/images/ooredoo_hq.png"
			alt="Ooredoo HQ"
			class="animate-retro-float-slow h-full w-full object-cover object-top opacity-[0.2] scale-[1.8] origin-top md:scale-110 blur-[2px]"
		/>
	</div>  -->
	<!-- Neural Network Canvas -->
	<canvas bind:this={canvas} class="absolute inset-0 pointer-events-none z-10"
	></canvas>

	<!-- Background Decorative Elements -->
	<div
		class="absolute inset-0 pointer-events-none opacity-[0.03]"
		style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 24px 24px;"
	></div>

	<!-- Glowing Background Orbs -->
	<div
		class="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse pointer-events-none"
	></div>
	<div
		class="absolute bottom-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse pointer-events-none"
		style="animation-delay: 2s;"
	></div>

	<div
		class="relative z-30 flex flex-col items-center text-center px-4 w-full"
	>
		<h1
			class="animate-shine font-pixelify text-6xl font-black tracking-tighter bg-[linear-gradient(110deg,var(--color-primary),45%,#fff,55%,var(--color-primary))] bg-size-[200%_100%] bg-clip-text text-transparent sm:text-8xl lg:text-[10rem] mb-2 sm:mb-4 leading-[1.1] sm:leading-[0.9] mt-10 sm:mt-12 drop-shadow-sm"
		>
			Mohamed <br class="sm:hidden" /> Mafaaz
		</h1>

		<p
			class="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] text-slate-400"
		>
			Developer • Architect • Designer
		</p>
	</div>

	<div class="relative mt-auto w-full max-w-5xl overflow-visible px-4 z-20">
		<div
			class="relative mx-auto flex h-[80vh] sm:h-[85vh] w-full items-end justify-center"
		>
			<div
				class="animate-retro-float relative w-full h-full flex items-end justify-center"
			>
				<img
					src="/images/me.png"
					alt="Pixel Master"
					class="hero-mask h-full w-auto max-w-none object-contain object-bottom scale-[1.25] sm:scale-[1.15] translate-y-8 sm:translate-y-12 transition-transform duration-700 brightness-[1.02]"
				/>
			</div>
		</div>
	</div>

	<!-- Seamless Concave U-Curve Bottom Fade -->
	<div
		class="absolute inset-x-0 bottom-0 h-[60vh] sm:h-[80vh] z-40 pointer-events-none"
		style="background: radial-gradient(ellipse 150% 100% at 50% -10%, transparent 30%, white 95%);"
	></div>
</section>

<style>
	.hero-mask {
		mask-image: radial-gradient(
			ellipse 70% 100% at 50% 0%,
			black 30%,
			transparent 90%
		);
		-webkit-mask-image: radial-gradient(
			ellipse 70% 100% at 50% 0%,
			black 30%,
			transparent 90%
		);
	}

	@keyframes shine {
		to {
			background-position-x: -200%;
		}
	}

	.animate-shine {
		animation: shine 3s linear infinite;
	}

	@keyframes float-hero {
		0%,
		100% {
			transform: translateY(0) rotate(var(--rotate, 0deg));
		}
		50% {
			transform: translateY(-25px) rotate(var(--rotate, 0deg));
		}
	}

	.animate-float-slow {
		--rotate: 12deg;
		animation: float-hero 8s ease-in-out infinite;
	}
	.animate-float-medium {
		--rotate: -6deg;
		animation: float-hero 6s ease-in-out infinite;
	}
	.animate-float-fast {
		--rotate: 3deg;
		animation: float-hero 5s ease-in-out infinite;
	}

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

	@keyframes retro-float-slow {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
	.animate-retro-float-slow {
		animation: retro-float-slow 12s infinite ease-in-out;
	}
</style>
