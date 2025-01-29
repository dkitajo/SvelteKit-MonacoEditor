<script>
	import MonacoEditor from '$lib/components/MonacoEditor.svelte';
	import MenuTable from '$lib/view/menuTable.svelte';
	import InfoForm from '$lib/view/infoForm.svelte';
	import { editorStore } from '$lib/data/store.svelte';




</script>
{editorStore.editorData}
<h1 class="text-3xl font-bold">MC_API</h1>
<div class="flex justify-center w-full">
	<div class="grid grid-cols-12 gap-4 w-full">
		<div class="col-span-12 w-full">
			<MenuTable class="w-full" />
		</div>

		<div class="col-span-12 md:col-span-6">
			<InfoForm />
		</div>

		<div class="col-span-12 md:col-span-6">
			<label class="input w-full mb-2">
				URL
				<input type="text" class="grow" placeholder="https://" bind:value={editorStore.urlDisplay}/>
				<!-- <span class="badge badge-neutral badge-xs">Optional</span> -->
			  </label>
			<MonacoEditor   />
		</div>

		<div class="col-span-12 md:col-span-6">
			<!-- <MonacoEditor  on:change={handleChange} /> -->
		</div>
	</div>
</div>
