<svelte:head>
	<title>Mafuth</title>
	<meta name="description" content="About mafuth" />
</svelte:head>

<div class="w-100">
	<video class="absolute w-screen h-screen object-cover z-[1]" playsinline muted loop autoplay src="./hero.mp4">
	</video>
	<div class="backdrop-blur-[1.5px] relative w-100 h-screen z-[2] grid content-center justify-items-center bg-black bg-opacity-50">
		<div class="text-center">
			<h1 class="text-white font-extrabold lg:text-8xl text-6xl font-[Fredoka] animate__animated animate__fadeInUp hero glitch layers" data-text="Hello">Hello</h1>
			<h1 class="text-white font-extrabold lg:text-6xl text-2xl font-[MageyHuseynu] mt-10 animate__animated animate__fadeInUp hero glitch layers" data-text="އައްސަލާމު އަލައިކުމް">އައްސަލާމު އަލައިކުމް</h1>
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
					<p class="rounded-md bg-zinc-900 p-3 font-[Nerko] text-center text-2xl">Mohamed Mafaaz</p>
					<p class="rounded-md bg-zinc-900 p-3 font-[MageyHuseynu] text-center text-2xl">މުޙައްމަދު މަފާޒު</p>
				</div>
				<p class="rounded-md bg-zinc-900 p-3 font-[Fredoka] text-center text-2xl mt-3">MAFUTH</p>
			</div>
			<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0056.jpg)] bg-center bg-cover">
				<div class="backdrop-blur-sm relative w-100 z-[2] bg-black bg-opacity-80 p-10">
					<h1 class="font-extrabold font-[Fredoka] text-2xl">Web Developer &  Data Analyst</h1>
					<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">Creating inovative soilutions to big problems using my skills.</p>
					<div class="pt-[20px] text-start">
						<a target="_blank" class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="https://github.com/mafuth">
							Check my Github
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="lg:mx-[200px] mx-3 mt-3 grid grid-cols-1 gap-3 text-white">
			<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0053.jpg)] bg-center bg-cover">
				<div class="backdrop-blur-sm relative w-100 z-[2] grid content-center justify-items-center bg-black bg-opacity-80 py-10">
					<h1 class="font-extrabold font-[Fredoka] text-4xl">My Skills</h1>
					<div class="lg:mx-10 mx-2 mt-3 grid lg:grid-cols-2 grid-cols-1 gap-3 text-white">
						<div class="p-3 font-[Nerko] grid content-center justify-items-center">
							<h1 class="font-extrabold font-[Fredoka] text-2xl text-center">Development</h1>
						</div>
						<div class="rounded-md bg-zinc-800 p-5 mt-4 font-[Nerko] text-start bg-opacity-80">
							<ul class="list-decimal ms-5 text-2xl">
								<li class="mb-3">
									PHP
									<ul class="list-disc ms-4 text-sm">
										<li>Laravel</li>
										<li>PHP-CLI: (My own)</li>
									</ul>
								</li>
								<li class="mb-3">
									NodeJS
									<ul class="list-disc ms-4 text-sm">
										<li>React</li>
										<li>NextJS</li>
										<li>Svelte</li>
										<li>Vue</li>
									</ul>
								</li>
								<li class="mb-3">
									Flutter
								</li>
								<li class="mb-3">
									SQL
									<ul class="list-disc ms-4 text-sm">
										<li>Mysql</li>
										<li>MariaDB</li>
										<li>Oracle</li>
										<li>Microsoft Azure SQL Database</li>
										<li>Google Big Query</li>
									</ul>
								</li>
								<li class="mb-3">
									Python
								</li>
								<li class="mb-3">
									Java
								</li>
								<li class="mb-3">
									GO
								</li>
								<li class="mb-3">
									C++
								</li>
								<li>
									C#
								</li>
							</ul>
						</div>
						<div class="p-3 font-[Nerko] grid content-center justify-items-center">
							<h1 class="font-extrabold font-[Fredoka] text-2xl text-center">Server Side / Deployment</h1>
						</div>
						<div class="rounded-md bg-zinc-800 p-5 font-[Nerko] text-start bg-opacity-80">
							<ul class="list-decimal ms-5 text-2xl">
								<li class="mb-3">
									Docker
									<ul class="list-disc ms-4 text-sm">
										<li>Creating full GUI Virtual Machines</li>
										<li>Deploying apps to meet any custom requirment</li>
									</ul>
								</li>
								<li class="mb-3">Debian / Ubuntu</li>
								<li class="mb-3">CentOS</li>
								<li class="mb-3">
									Proxmox
									<ul class="list-disc ms-4 text-sm">
										<li>High Availability Clustering</li>
										<li>Email Gateway</li>
									</ul>
								</li>
								<li class="mb-3">TrueNas</li>
								<li class="mb-3">
									Wireguard
									<ul class="list-disc ms-4 text-sm">
										<li>Private Mesh networking</li>
										<li>Exit Nodes</li>
									</ul>
								</li>
								<li class="mb-3">CLoudflare Zero trust</li>
								<li class="mb-3">Reverse Proxy</li>
								<li class="mb-3">
									Load balancing
									<ul class="list-disc ms-4 text-sm">
										<li>Traefik</li>
										<li>Kubernetes</li>
									</ul></li>
								<li class="mb-3">
									Workflows
									<ul class="list-disc ms-4 text-sm">
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
<div class="w-100 bg-zinc">
	<div class="text-center pt-[50px]">
		<h1 class="text-white font-extrabold lg:text-6xl text-2xl font-[Fredoka]">My Services?</h1>
	</div>
	<div class="lg:mx-[200px] mx-3 mt-10 grid lg:grid-cols-2 grid-cols-1 gap-3 text-white">
		<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/abm.jpeg)] bg-center bg-cover ease-in-out duration-300">
			<div class="backdrop-blur-sm relative w-100 h-full z-[2] bg-black bg-opacity-90 p-10">
				<h1 class="font-extrabold font-[Fredoka] text-2xl">Apps By Mafuth</h1>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">A no code App builder designed for businesses.</p>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]"><b class="text-2xl font-[Fredoka] font-thin">Goal:</b> Reduce the business time and cost of building internal apps.</p>
				<div class="pt-[20px]">
					<a target="_blank" class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="https://apps.mafuth.online">
						Check it out
					</a>
				</div>
			</div>
		</div>
		<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/vpn.png)] bg-center bg-cover ease-in-out duration-300">
			<div class="backdrop-blur-sm relative w-100 h-full z-[2] bg-black bg-opacity-[50%] p-10">
				<h1 class="font-extrabold font-[Fredoka] text-2xl">Enterprise VPN</h1>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">Peer to Peer VPN with enterprise level access controls and Quantum resilence encryption.</p>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]"><b class="text-2xl font-[Fredoka] font-thin">Goal:</b> Make work from home more affordable to businesses.</p>
			</div>
		</div>
		<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/ai.png)] bg-center bg-cover ease-in-out duration-300">
			<div class="backdrop-blur-sm relative w-100 h-full z-[2] bg-black bg-opacity-[50%] p-10">
				<h1 class="font-extrabold font-[Fredoka] text-2xl">AI Bot builder</h1>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">Simple drag and drop AI as a service tool.</p>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]"><b class="text-2xl font-[Fredoka] font-thin">Goal:</b> Make AI services and automations available for everyone.</p>
			</div>
		</div>
		<div class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/nvr.png)] bg-center bg-cover ease-in-out duration-300">
			<div class="backdrop-blur-sm relative w-100 h-full z-[2] bg-black bg-opacity-[50%] p-10">
				<h1 class="font-extrabold font-[Fredoka] text-2xl">CCTV</h1>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]">AI powered enterprise level CCTV solution.</p>
				<p class="rounded-md bg-zinc-800 p-3 mt-4 font-[Nerko]"><b class="text-2xl font-[Fredoka] font-thin">Goal:</b> Make home and business security cheaper.</p>
			</div>
		</div>
	</div>
</div>
<div class="w-100 bg-zinc min-h-screen mt-[100px] lg:block hidden">
	<video class="absolute w-screen h-full object-cover z-[1]" playsinline muted loop autoplay src="./hobby.mp4">
	</video>
	<div class="backdrop-blur-[0.5px] relative w-100 min-h-screen z-[2] grid content-center justify-items-center bg-black bg-opacity-80">
		<div class="text-center">
			<h1 class="text-white font-extrabold lg:text-8xl text-2xl font-[MageyHuseynu] hero glitch layers" data-text="ޑުރޯން ފޮޓޯގުރަފީ">ޑުރޯން ފޮޓޯގުރަފީ</h1>
			<h1 class="text-white font-extrabold lg:text-3xl text-sm font-[Fredoka] mt-10 hero glitch layers" data-text="Drone Photography">Drone Photography</h1>
		</div>
	</div>
</div>
<div class="w-100 bg-zinc mb-5 lg:hidden block">
	<div class="text-center pt-[100px]">
		<h1 class="text-white font-extrabold lg:text-4xl text-4xl font-[MageyHuseynu]">ޑުރޯން ފޮޓޯގުރަފީ</h1>
		<h1 class="text-white font-extrabold lg:text-2xl text-xl font-[Fredoka] mt-10">Drone Photography</h1>
	</div>
</div>
<div class="w-100 bg-zinc min-h-screen grid lg:grid-cols-3 grid-cols-1 gap-3 p-10" id="gallery">
	<a href="/gallery/male" class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0627.jpg)] bg-center bg-cover group">
		<div class="backdrop-blur-sm group-hover:bg-opacity-50 group-hover:backdrop-blur-[0.5px] relative w-100 z-[2] bg-black bg-opacity-80 py-[100px] p-10 h-full grid content-center justify-items-center ease-in-out duration-300">
			<h1 class="font-extrabold font-[Fredoka] text-4xl text-white group-hover:hidden ease-in-out duration-300">K.Male'</h1>
			<h1 class="font-extrabold font-[MageyHuseynu] text-4xl text-white group-hover:block hidden ease-in-out duration-300">މާލެ</h1>
		</div>
	</a>
	<a href="/gallery/kendhoo" class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0044.jpg)] bg-center bg-cover group">
		<div class="backdrop-blur-sm group-hover:bg-opacity-50 group-hover:backdrop-blur-[0.5px] relative w-100 z-[2] bg-black bg-opacity-80 py-[100px] p-10 h-full grid content-center justify-items-center ease-in-out duration-300">
			<h1 class="font-extrabold font-[Fredoka] text-4xl text-white group-hover:hidden ease-in-out duration-300">B.Kendhoo</h1>
			<h1 class="font-extrabold font-[MageyHuseynu] text-4xl text-white group-hover:block hidden ease-in-out duration-300">ކެންދޫ</h1>
		</div>
	</a>
	<a href="/gallery/hulhumale" class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0513.jpg)] bg-center bg-cover group">
		<div class="backdrop-blur-sm group-hover:bg-opacity-50 group-hover:backdrop-blur-[0.5px] relative w-100 z-[2] bg-black bg-opacity-80 py-[100px] p-10 h-full grid content-center justify-items-center ease-in-out duration-300">
			<h1 class="font-extrabold font-[Fredoka] text-4xl text-white group-hover:hidden ease-in-out duration-300">K.Hulhumale'</h1>
			<h1 class="font-extrabold font-[MageyHuseynu] text-4xl text-white group-hover:block hidden ease-in-out duration-300">ހުޅުމާލެ</h1>
		</div>
	</a>
	<a href="/gallery/villingili" class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0173.jpg)] bg-center bg-cover group">
		<div class="backdrop-blur-sm group-hover:bg-opacity-50 group-hover:backdrop-blur-[0.5px] relative w-100 z-[2] bg-black bg-opacity-80 py-[100px] p-10 h-full grid content-center justify-items-center ease-in-out duration-300">
			<h1 class="font-extrabold font-[Fredoka] text-4xl text-white group-hover:hidden ease-in-out duration-300">K.Villingili</h1>
			<h1 class="font-extrabold font-[MageyHuseynu] text-4xl text-white group-hover:block hidden ease-in-out duration-300">ވިލިގިލި</h1>
		</div>
	</a>
	<a href="/gallery/hithaadhoo" class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0043.jpg)] bg-center bg-cover group">
		<div class="backdrop-blur-sm group-hover:bg-opacity-50 group-hover:backdrop-blur-[0.5px] relative w-100 z-[2] bg-black bg-opacity-80 py-[100px] p-10 h-full grid content-center justify-items-center ease-in-out duration-300">
			<h1 class="font-extrabold font-[Fredoka] text-4xl text-white group-hover:hidden ease-in-out duration-300">B.Hithaadhoo</h1>
			<h1 class="font-extrabold font-[MageyHuseynu] text-4xl text-white group-hover:block hidden ease-in-out duration-300">ހިތާދޫ</h1>
		</div>
	</a>
	<a href="/gallery/furanafushi" class="rounded-lg border-none bg-[url(https://raw.githubusercontent.com/mafuth/mySite/main/static/DJI_0150.jpg)] bg-center bg-cover group">
		<div class="backdrop-blur-sm group-hover:bg-opacity-50 group-hover:backdrop-blur-[0.5px] relative w-100 z-[2] bg-black bg-opacity-80 py-[100px] p-10 h-full grid content-center justify-items-center ease-in-out duration-300">
			<h1 class="font-extrabold font-[Fredoka] text-4xl text-white group-hover:hidden ease-in-out duration-300">K.Furanafushi</h1>
			<h1 class="font-extrabold font-[MageyHuseynu] text-4xl text-white group-hover:block hidden ease-in-out duration-300">ފުރަނަފުޝި</h1>
		</div>
	</a>
</div>