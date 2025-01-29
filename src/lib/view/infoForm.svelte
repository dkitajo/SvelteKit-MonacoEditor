<script>
	import { mcStore } from '$lib/data/store.svelte'; // Import global store

	const handleSubmit = () => {
		console.log("Submitting:", mcStore.mcData);
	};

	const handleReset = () => {
		mcStore.resetMCData(); // Reset data using store function
	};
</script>

<div class="overflow-x-auto">
	<table class="table w-full border rounded-lg">
		<thead>
			<tr class="bg-base-200">
				<th class="p-3">Field</th>
				<th class="p-3">Value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="font-semibold">MC Endpoint</td>
				<td><input type="text" bind:value={mcStore.mcData.mcEndpoint} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">MID</td>
				<td><input type="text" bind:value={mcStore.mcData.mid} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Subscriber Key</td>
				<td><input type="text" bind:value={mcStore.mcData.subscriberKey} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Email Job</td>
				<td><input type="text" bind:value={mcStore.mcData.emailJob} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Send Profile</td>
				<td><input type="text" bind:value={mcStore.mcData.sendProfile} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Auth Token</td>
				<td><input type="password" bind:value={mcStore.mcData.authToken} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Client ID</td>
				<td><input type="text" bind:value={mcStore.mcData.clientId} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Client Secret</td>
				<td><input type="password" bind:value={mcStore.mcData.clientSecret} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">REST Base URL</td>
				<td><input type="text" bind:value={mcStore.mcData.restBaseUrl} class="input input-bordered w-full" /></td>
			</tr>
		</tbody>
	</table>

	<div class="flex justify-end gap-2 mt-4">
		<button class="btn btn-primary" on:click={handleSubmit}>Save</button>
		<button class="btn btn-secondary" on:click={handleReset}>Reset</button>
	</div>
</div>
