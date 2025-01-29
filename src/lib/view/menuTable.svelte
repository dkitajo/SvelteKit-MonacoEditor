<script>
	import { apiList } from '$lib/data/apiList';
	import { mcStore } from '$lib/data/store.svelte';
	import { editorStore } from '$lib/data/store.svelte';

	const tryAPI = (endpoint) => {
		console.log(`Trying API: ${endpoint}`);
		editorStore.setEditorData(endpoint);
	};

	// Function to replace {{variables}} with user input
	function populateAPI(api) {
		// Clone the API object to prevent modifying the original
		let populatedAPI = { ...api };

		// Get user-inputted data from mcStore
		let userData = mcStore.mcData;

		// Replace placeholders in the endpoint
		populatedAPI.endpoint = populatedAPI.endpoint.replace(/{{(.*?)}}/g, (_, key) => userData[key] || '');

		// If there's a request body, replace placeholders in JSON
		if (populatedAPI.requestBody) {
			populatedAPI.requestBody = JSON.parse(
				JSON.stringify(populatedAPI.requestBody).replace(/{{(.*?)}}/g, (_, key) => userData[key] || '')
			);
		}

		return populatedAPI;
	}

	// Example Usage
	let testAPI = populateAPI(apiList[0]); // Testing with the first API


</script>

<div class="w-full overflow-x-auto">
	<table class="table w-full min-w-full border rounded-lg table-auto">
		<!-- Table Head -->
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
			{#each apiList as api}
				<tr>
					<th>{api.id}</th>
					<td class="font-semibold">{api.name}</td>
					<td>{api.function}</td>
					<td><span class="badge badge-primary">{api.method}</span></td>
					<td><code class="text-sm">{api.endpoint}</code></td>
					<td>
						<a href={api.doc} target="_blank" class="btn btn-outline btn-xs">Docs</a>
					</td>
					<td>
						<button class="btn btn-primary btn-xs" on:click={() => tryAPI(api.endpoint)}>
							Try This
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
