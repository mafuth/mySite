<svelte:head>
	<title>Mafuth</title>
	<meta name="description" content="About mafuth" />
</svelte:head>

<div class="w-100">
	<video class="absolute w-screen h-screen object-cover z-[1]" playsinline muted loop autoplay src="./hero.mp4">
	</video>
	<div class="backdrop-blur-sm relative w-100 h-screen z-[2] grid content-center justify-items-center bg-black bg-opacity-80">
		<div class="text-center">
			<h1 class="text-white font-extrabold lg:text-8xl text-6xl font-[Fredoka] animate__animated animate__fadeInUp">Hello</h1>
			<h1 class="text-white font-extrabold lg:text-6xl text-4xl font-[MageyHuseynu] mt-10 animate__animated animate__fadeInUp">އައްސަލާމު އަލައިކުމް</h1>
		</div>
	</div>
</div>
<div class="w-100 bg-zinc min-h-screen">
	<div class="text-center pt-[100px]">
		<h1 class="text-white font-extrabold lg:text-6xl text-2xl font-[Fredoka]">A bit about me ...</h1>
		<div class="lg:mx-[200px] mx-3 mt-10 grid lg:grid-cols-2 grid-cols-1 gap-3 text-white">
			<div>
				<p class="rounded-md bg-zinc-900 p-3 font-[MageyHuseynu] text-center text-4xl mb-3">މަފުތް</p>
				<div class="grid grid-cols-2 gap-3">
					<p class="rounded-md bg-zinc-900 p-3 font-[Nerko] text-start text-2xl">Mohamed Mafaaz</p>
					<p class="rounded-md bg-zinc-900 p-3 font-[MageyHuseynu] text-end text-2xl">މުޙައްމަދު މަފާޒު</p>
				</div>
				<p class="rounded-md bg-zinc-900 p-3 font-[Fredoka] text-center text-2xl mt-3">MAFUTH</p>
			</div>
			<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0056.jpg)] bg-center bg-cover hover:bg-bottom ease-in-out duration-300">
				<div class="backdrop-blur-sm relative w-100 z-[2] bg-black bg-opacity-80 p-10">
					<h1 class="font-extrabold font-[Fredoka] text-2xl">Web Developer &  Data Analyst</h1>
					<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">Creating inovative soilutions to big problems using my skills.</p>
					<div class="pt-[20px] text-start">
						<a class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="https://github.com/mafuth">
							Check my Github
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:mx-[200px] mx-3 mt-3 grid grid-cols-1 gap-3 text-white group">
			<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0053.jpg)] bg-center bg-cover group-hover:bg-top ease-in-out duration-300">
				<div class="backdrop-blur-sm relative w-100 z-[2] grid content-center justify-items-center bg-black bg-opacity-80 p-10">
					<h1 class="font-extrabold font-[Fredoka] text-4xl">My Skills</h1>
					<div class="lg:mx-[200px] mx-3 mt-3 grid lg:grid-cols-2 grid-cols-1 gap-3 text-white">
						<div class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko] grid content-center justify-items-center">
							<h1 class="font-extrabold font-[Fredoka] text-2xl text-center">Development</h1>
						</div>
						<div class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko] text-start">
							<ul class="list-decimal ms-4">
								<li>
									PHP
									<ul class="list-disc ms-4">
										<li>Laravel</li>
										<li>PHP-CLI: (My own)</li>
									</ul>
								</li>
								<li>
									NodeJS
									<ul class="list-disc ms-4">
										<li>NextJS</li>
										<li>Svelte</li>
										<li>Vue</li>
									</ul>
								</li>
								<li>
									Flutter
								</li>
								<li>
									SQL
									<ul class="list-disc ms-4">
										<li>Mysql</li>
										<li>MariaDB</li>
										<li>Oracle</li>
										<li>Google Big Query</li>
									</ul>
								</li>
								<li>
									Python
								</li>
								<li>
									GO
								</li>
								<li>
									C++
								</li>
								<li>
									C#
								</li>
							</ul>
						</div>
						<div class="rounded-md bg-zinc-800 p-3 font-[Nerko] grid content-center justify-items-center">
							<h1 class="font-extrabold font-[Fredoka] text-2xl text-center">Server Side / Deployment</h1>
						</div>
						<div class="rounded-md bg-zinc-800 p-3 font-[Nerko] text-start">
							<ul class="list-decimal ms-4">
								<li>
									Docker
									<ul class="list-disc ms-4">
										<li>Creating full Virtual Machines</li>
										<li>Deploying apps to meet any custom requirment</li>
									</ul>
								</li>
								<li>Debian / Ubuntu</li>
								<li>CentOS</li>
								<li>Proxmox</li>
								<li>TrueNas</li>
								<li>VPN mesh networks using wireguard</li>
								<li>CLoudflare Zero trust</li>
								<li>Reverse Proxy</li>
								<li>Load balancing</li>
								<li>
									Workflows
									<ul class="list-disc ms-4">
										<li>Github</li>
										<li>Gitea</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="w-100 bg-zinc min-h-screen">
	<div class="text-center pt-[50px]">
		<h1 class="text-white font-extrabold lg:text-6xl text-2xl font-[Fredoka]">What am I up to?</h1>
	</div>
	<div class="lg:mx-[200px] mx-3 mt-10 grid lg:grid-cols-2 grid-cols-1 gap-3 text-white">
		<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/chronicalBot.jpg)] bg-center bg-cover hover:bg-left ease-in-out duration-300">
			<div class="backdrop-blur-sm relative w-100 h-full z-[2] bg-black bg-opacity-90 p-10">
				<h1 class="font-extrabold font-[Fredoka] text-2xl">Chronical BOT</h1>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">News scrapping summerization and adding the "ENGAGMENT" factor using a self trained local LLM.</p>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]"><b class="text-2xl font-[Fredoka] font-thin">Goal:</b> Train and fine tune a small LLM to learn how they work and the best ways to optimise.</p>
				<div class="pt-[20px]">
					<a class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="https://www.instagram.com/chronicalbot/">
						Check it out
					</a>
				</div>
			</div>
		</div>
		<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/chaosStream.png)] bg-center bg-cover hover:bg-right ease-in-out duration-300">
			<div class="backdrop-blur-sm relative w-100 h-full z-[2] bg-black bg-opacity-90 p-10">
				<h1 class="font-extrabold font-[Fredoka] text-2xl">Chaos Stream</h1>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">A fully automated streaming platform that can do video transcoding on the fly and automated torrent search and download for movies and shows, all inside Docker.</p>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]"><b class="text-2xl font-[Fredoka] font-thin">Goal:</b> Build a Netflix alternative that can be self hosted with one command ad to learn load blancing using Traefik, and How Cloudflare Zero trust work</p>
				<div class="pt-[20px]">
					<a class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="https://stream.chaosmv.com">
						Check it out
					</a>
				</div>
			</div>
		</div>
	</div>
</div>