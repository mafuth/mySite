<script>
	import "../app.pcss";
</script>
<div class="bg-black min-h-screen">
	<main class="pb-[20px]">
		<slot></slot>
	</main>
	<div class="lg:text-start text-center">
        <footer class="footer items-center p-5 text-[#e98f44]">
            <div class="flex items-center grid-flow-col">
                <img src="./icon.png" class="h-[20px]"/>
                <p class="text-white font-[Fredoka] ms-2">Copyright © 2024 - All right reserved</p>
            </div> 
        </footer>
    </div>
</div>
