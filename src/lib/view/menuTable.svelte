<script>
	import { mcStore } from '$lib/data/store.svelte';
	import { editorStore } from '$lib/data/store.svelte';

	const tryAPI = (id) => {
		const api = mcStore.apiList.find(a => a.id === id);
		editorStore.setEditorData(JSON.stringify(api.requestBody, null, 2)); // Updates Monaco Editor with formatted JSON
		editorStore.setURLData(api.endpoint); // Updates URL display
	};
</script>

<div class="w-full overflow-x-auto">
	<table class="table w-full min-w-full border rounded-lg table-auto">
		<thead>
			<tr class="bg-base-200">
				<th>#</th>
				<th>Name</th>
				<th>Function</th>
				<th>HTTP Method</th>
				<th>Endpoint</th>
				<th>Doc</th>
				<th>Try This</th>
			</tr>
		</thead>
		<tbody>
			{#each mcStore.apiList as api}
				<tr>
					<th>{api.id}</th>
					<td class="font-semibold">{api.name}</td>
					<td>{api.function}</td>
					<td><span class="badge badge-primary">{api.method}</span></td>
					<td><code class="text-sm break-all">{api.endpoint}</code></td>
					<td>
						<a href={api.doc} target="_blank" class="btn btn-outline btn-xs">Docs</a>
					</td>
					<td>
						<button class="btn btn-primary btn-xs" on:click={() => tryAPI(api.id)}>
							Try This
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
