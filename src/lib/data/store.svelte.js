function createMCData() {
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

	// ✅ `apiList` is reactive because it references `mcData`
	let apiList = $state([
		{
			id: 1,
			name: "Authentication",
			function: "Get OAuth token",
			method: "POST",
			get endpoint() { return `https://${mcData.et_subdomain}.auth.marketingcloudapis.com/v2/token`; },
			doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/authenticate.html",
			get requestBody() {
				return {
					grant_type: "authorization_code",
					code: "",
					client_id: mcData.et_clientId,
					client_secret: mcData.et_clientSecret,
					account_id: mcData.et_mid
				};
			}
		},
		{
			id: 2,
			name: "Send Email",
			function: "Trigger an email send",
			method: "POST",
			get endpoint() { return `https://${mcData.et_subdomain}.rest.marketingcloudapis.com/messaging/v1/messageDefinitionSends/key:{key}/send`; },
			doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/messageDefinitionSends.html",
			get requestBody() {
				return {
					definitionKey: "{key}",
					recipients: [
						{
							contactKey: mcData.subscriberKey,
							to: mcData.email,
							attributes: {
								FirstName: mcData.firstName,
								LastName: mcData.lastName
							}
						}
					]
				};
			}
		},
		{
			id: 3,
			name: "Retrieve Subscribers",
			function: "Get subscriber details",
			method: "GET",
			get endpoint() { return `https://${mcData.et_subdomain}.rest.marketingcloudapis.com/contacts/v1/contacts`; },
			doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/contact-apis.html",
			requestBody: null
		},
		{
			id: 4,
			name: "Transactional Messaging",
			function: "Send transactional email",
			method: "POST",
			get endpoint() { return `https://${mcData.et_subdomain}.rest.marketingcloudapis.com/messaging/v1/email/messages`; },
			doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/transactional-messaging.html",
			get requestBody() {
				return {
					definitionKey: "{transactionalKey}",
					recipients: [
						{
							contactKey: mcData.subscriberKey,
							to: mcData.email,
							attributes: {
								OrderID: mcData.orderId,
								ProductName: mcData.productName
							}
						}
					]
				};
			}
		},
		{
			id: 5,
			name: "Get Data Extensions",
			function: "Retrieve Data Extensions",
			method: "GET",
			get endpoint() { return `https://${mcData.et_subdomain}.rest.marketingcloudapis.com/data/v1/customobjectdata/key/{key}/rowset`; },
			doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/data-extension-retrieve.html",
			requestBody: null
		}
	]);

	return {
		// Getter for mcData
		get mcData() {
			return mcData;
		},

		// Setter to update form fields
		setMCData(newData) {
			Object.assign(mcData, newData);
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
		},

		// ✅ Ensure API list updates dynamically
		get apiList() {
			return apiList.map(api => ({
				...api,
				endpoint: api.endpoint,
				requestBody: api.requestBody
			}));
		}
	};
}

export const mcStore = createMCData();


/* Monaco Editor */

export function createEditorData() {
	let editorData = $state('Hello'); // Reactive state for editor data
	let setValueCallback = null; // Function reference for setValue()
	let urlDisplay = $state(''); 

	return {
		get editorData() {
			return editorData;
		},

		// Setter to update editor content
		setEditorData(newData) {
			editorData = newData; // Directly assign new value
			if (setValueCallback) {
				setValueCallback(newData); // 🔥 Invoke the callback when data is set
			}
		},

		// Reset function to clear the editor
		resetEditor() {
			editorData = ''; // Reset to an empty string
			if (setValueCallback) {
				setValueCallback(''); // 🔥 Reset Monaco Editor
			}
		},

		// Register `setValue()` callback from Monaco Editor
		registerSetValueCallback(callback) {
			setValueCallback = callback; // Store reference to Monaco's setValue
		},

		//URL
		get urlDisplay() {
			return urlDisplay;
		},

		setURLData(newURL) {
			urlDisplay = newURL; // Directly assign new value

		},

	};
}

export const editorStore = createEditorData();
