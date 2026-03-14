<script lang="ts">
	import "./layout.css";
	import "@fontsource/pixelify-sans";
	import "@fontsource/jersey-10";
	import Navbar from "$lib/components/Navbar.svelte";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/icon.png" />
	<title>Mafuth | Developer</title>
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
