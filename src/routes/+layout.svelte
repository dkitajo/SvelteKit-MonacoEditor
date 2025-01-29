<script>
	let { children } = $props();
	import '../app.css';
</script>

<div class=" mx-auto flex flex-col items-center justify-center p-2 max-w-screen-xl">
	{@render children()}
</div>
