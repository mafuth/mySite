<script>
	import "../app.pcss";
</script>
<div class="bg-black min-h-screen">
	<main class="lg:pb-[30px] pb-[100px]">
		<slot></slot>
	</main>
	<div class="hidden lg:block">
        <footer class="footer items-center p-5 text-[#e98f44]">
            <div class="flex items-center grid-flow-col">
                <img src="./icon.png" class="h-[20px]"/>
                <p class="text-white font-[Fredoka] ms-2">Copyright © 2024 - All right reserved</p>
            </div> 
        </footer>
    </div>
</div>
