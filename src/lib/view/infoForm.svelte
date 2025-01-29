<script>
	import { mcStore } from '$lib/data/store.svelte'; // Import global store

	const handleSubmit = () => {
		console.log("Submitting:", mcStore.mcData);
	};

	const handleReset = () => {
		mcStore.resetMCData(); // Reset data using store function
	};
</script>

<!-- ✅ Display Updated API List -->
<p class="text-sm text-gray-500">API Endpoint: {mcStore.apiList[0].endpoint}</p>

<div class="overflow-x-auto">
	<table class="table w-full border rounded-lg">
		<thead>
			<tr class="bg-base-200">
				<th class="p-3">Field</th>
				<th class="p-3">Value</th>
			</tr>
		</thead>
		<tbody>
			<!-- ✅ Bound All Fields to mcStore.mcData -->
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
			<tr>
				<td class="font-semibold">MC Subdomain</td>
				<td><input type="text" bind:value={mcStore.mcData.et_subdomain} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">MC Client ID</td>
				<td><input type="text" bind:value={mcStore.mcData.et_clientId} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">MC Client Secret</td>
				<td><input type="password" bind:value={mcStore.mcData.et_clientSecret} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">MC Account ID</td>
				<td><input type="text" bind:value={mcStore.mcData.et_mid} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">First Name</td>
				<td><input type="text" bind:value={mcStore.mcData.firstName} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Last Name</td>
				<td><input type="text" bind:value={mcStore.mcData.lastName} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Email</td>
				<td><input type="email" bind:value={mcStore.mcData.email} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Order ID</td>
				<td><input type="text" bind:value={mcStore.mcData.orderId} class="input input-bordered w-full" /></td>
			</tr>
			<tr>
				<td class="font-semibold">Product Name</td>
				<td><input type="text" bind:value={mcStore.mcData.productName} class="input input-bordered w-full" /></td>
			</tr>
		</tbody>
	</table>

	<!-- ✅ Submit & Reset Buttons -->
	<div class="flex justify-end gap-2 mt-4">
		<button class="btn btn-primary" on:click={handleSubmit}>Save</button>
		<button class="btn btn-secondary" on:click={handleReset}>Reset</button>
	</div>
</div>
