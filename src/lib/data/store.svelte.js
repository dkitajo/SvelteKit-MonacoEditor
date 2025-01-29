function createMCData() {
	// Global state for MC API form data
	let mcData = $state({
		mcEndpoint: '',
		mid: '',
		subscriberKey: '',
		emailJob: '',
		sendProfile: '',
		authToken: '',
		clientId: '',
		clientSecret: '',
		restBaseUrl: '',
		et_subdomain: '', // New: MC Subdomain
		et_clientId: '', // New: Client ID
		et_clientSecret: '', // New: Client Secret
		et_mid: '', // New: Account ID
		firstName: '', // New: First Name (For Personalization)
		lastName: '', // New: Last Name (For Personalization)
		email: '', // New: Email Address
		orderId: '', // New: Order ID (For Transactional Messages)
		productName: '' // New: Product Name (For Transactional Messages)
	});

	return {
		// Getter for mcData
		get mcData() {
			return mcData;
		},

		// Setter to update form fields
		setMCData(newData) {
			Object.assign(mcData, newData); // Merge new data into the state
		},

		// Reset function to clear all form fields
		resetMCData() {
			Object.assign(mcData, {
				mcEndpoint: '',
				mid: '',
				subscriberKey: '',
				emailJob: '',
				sendProfile: '',
				authToken: '',
				clientId: '',
				clientSecret: '',
				restBaseUrl: '',
				et_subdomain: '',
				et_clientId: '',
				et_clientSecret: '',
				et_mid: '',
				firstName: '',
				lastName: '',
				email: '',
				orderId: '',
				productName: ''
			});
		}
	};
}

export const mcStore = createMCData();

/* Monaco Editor */

export function createEditorData() {
	let editorData = $state('Hello'); // Reactive state for editor data

	return {
		get editorData() {
			return editorData;
		},

		// Setter to update editor content
		setEditorData(newData) {
			editorData = newData; // Directly assign new value
		},

		// Reset function to clear the editor
		resetEditor() {
			editorData = ''; // Reset to an empty string
		}
	};
}

export const editorStore = createEditorData();
