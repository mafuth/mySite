<script>
    export let data;
    let info = data.info;
</script>
<svelte:head>
	<title>Mafuth - Photos From {info.title.en}</title>
	<meta name="description" content="Photos From {info.title.en} - {info.description}" />
</svelte:head>
<div class="w-100">
    <img class="absolute w-screen h-screen object-cover z-[1]" src="/{info.background}" alt="{info.title.en}"/>
	<div class="backdrop-blur-[1.5px] relative w-100 h-screen z-[2] grid content-center justify-items-center bg-black bg-opacity-80">
		<div class="text-center">
			<h1 class="text-white font-extrabold lg:text-8xl text-6xl font-[Fredoka] animate__animated animate__fadeInUp hero glitch layers" data-text="{info.title.en}">{info.title.en}</h1>
			<h1 class="text-white font-extrabold lg:text-6xl text-2xl font-[MageyHuseynu] mt-10 animate__animated animate__fadeInUp hero glitch layers" data-text="{info.title.mv}">{info.title.mv}</h1>
		</div>
	</div>
</div>
<div class="w-100 lg:bg-zinc-900 min-h-screen p-10 lg:mx-10 rounded-lg mt-10">
	<div class="text-center mb-10">
		<h1 class="text-white font-extrabold lg:text-4xl text-xl font-[Fredoka] mb-4">{info.description}</h1>
        <a class="lg:bg-black bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="/#gallery">
            Back to Home
        </a>
	</div>
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-3 content-center justify-items-center">
        {#each info.images as image}
            <div class="group">
                <img class="rounded-lg border-none w-[350px] object-cover h-[250px]" src="/places/{info.folder}/{image}" alt="{image}"/>
            </div>
        {/each}
    </div>
</div>