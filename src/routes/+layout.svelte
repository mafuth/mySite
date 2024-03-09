<script>
	import "../app.pcss";
</script>
<div class="bg-black min-h-screen">
	<main class="pb-[20px] max-w-100">
		<slot></slot>
	</main>
	<div class="lg:text-start text-start">
        <footer class="footer items-center p-5 text-[#e98f44]">
            <div class="flex items-center grid-flow-col">
                <img src="/icon.png" class="h-[20px]" alt="logo"/>
                <p class="text-white font-[Fredoka] ms-2">Copyright © 2024</p>
                <a class="ms-4 bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="/">Home Page</a>
                <a class="ms-4 lg:block hidden bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg font-[Fredoka]" href="https://github.com/mafuth/mySite" target="_blank">view Source Code</a>
            </div> 
        </footer>
    </div>
</div>