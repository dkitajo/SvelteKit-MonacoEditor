<script>
	import MonacoEditor from '$lib/components/MonacoEditor.svelte';

	let inputValue = $state("console.log('HELLO')");

	const handleChange = (event) => {
		inputValue = event.detail; // 子から渡された変更内容を反映
		console.log('Parent received:', inputValue);
	};
</script>

{inputValue}
<MonacoEditor {inputValue} on:change={handleChange}/>
