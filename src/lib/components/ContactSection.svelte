<script lang="ts">
	import Mail from "lucide-svelte/icons/mail";
	import Github from "lucide-svelte/icons/github";
	import Linkedin from "lucide-svelte/icons/linkedin";
	import Instagram from "lucide-svelte/icons/instagram";
	import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
</script>

<section id="contact" class="bg-slate-50 px-6 py-32 lg:px-20 overflow-hidden">
	<div class="mx-auto max-w-4xl">
		<div class="mb-20 text-center">
			<h2 class="font-pixel text-4xl font-black tracking-tighter text-slate-900 sm:text-6xl uppercase italic">Let's Connect</h2>
			<p class="font-jersey mt-6 text-xl font-bold uppercase tracking-[0.2em] text-slate-400">
				Interested in working together or just want to say hello?
			</p>
			<div class="mx-auto mt-8 h-1 w-24 bg-slate-900"></div>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<!-- Contact Card -->
			<div class="float-animation flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300">
				<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg">
					<Mail class="h-5 w-5" />
				</div>
				<h3 class="font-pixel mb-2 text-2xl font-black text-slate-900 uppercase italic">Email</h3>
				<p class="font-jersey mb-8 text-lg font-black uppercase tracking-wider text-slate-400">Reach out for collaborations, inquiries, or just to chat.</p>
				<a 
					href="mailto:hello@mafuth.dev" 
					class="font-pixel mt-auto flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-slate-800 active:scale-95 shadow-md"
				>
					Send Email
					<ArrowUpRight class="h-4 w-4" />
				</a>
			</div>

			<!-- Socials Card -->
			<div class="float-animation flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300" style="animation-delay: 0.3s">
				<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 border border-slate-200">
					<Github class="h-5 w-5" />
				</div>
				<h3 class="font-pixel mb-2 text-2xl font-black text-slate-900 uppercase italic">Socials</h3>
				<p class="font-jersey mb-8 text-lg font-black uppercase tracking-wider text-slate-400">Find me across the web on these platforms.</p>
				
				<div class="mt-auto flex flex-wrap gap-4">
					<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:-translate-y-1 shadow-sm">
						<Github class="h-6 w-6" />
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:-translate-y-1 shadow-sm">
						<Linkedin class="h-6 w-6" />
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="inline-flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:-translate-y-1 shadow-sm">
						<Instagram class="h-6 w-6" />
					</a>
				</div>
			</div>
		</div>

		<!-- Simplified Footer -->
		<div class="mt-24 flex flex-col items-center justify-between gap-8 border-t border-slate-200 pt-12 md:flex-row">
			<div class="flex items-center gap-3">
				<img src="/images/icon.png" alt="Mafuth Icon" class="h-8 w-8" />
				<span class="font-pixel text-2xl font-black tracking-tight text-slate-900 uppercase italic">Mafuth</span>
			</div>
			<p class="font-jersey text-sm font-black uppercase tracking-[0.2em] text-slate-400">
				&copy; {new Date().getFullYear()} Mafuth. Built with passion.
			</p>
			<a href="#top" class="font-pixel text-sm font-black uppercase tracking-widest text-slate-900 transition-colors hover:text-slate-400 italic">
				Back to Top
			</a>
		</div>
	</div>
</section>

<style>
	.float-animation {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
</style>
