export const apiList = [
    {
        id: 1,
        name: "Authentication",
        function: "Get OAuth token",
        method: "POST",
        endpoint: "https://{{et_subdomain}}.auth.marketingcloudapis.com/v2/token",
        doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/authenticate.html",
        requestBody: {
            grant_type: "authorization_code",
            code: "",
            client_id: "{{et_clientId}}",
            client_secret: "{{et_clientSecret}}",
            account_id: "{{et_mid}}"
        }
    },
    {
        id: 2,
        name: "Send Email",
        function: "Trigger an email send",
        method: "POST",
        endpoint: "https://{{et_subdomain}}.rest.marketingcloudapis.com/messaging/v1/messageDefinitionSends/key:{key}/send",
        doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/messageDefinitionSends.html",
        requestBody: {
            definitionKey: "{key}",
            recipients: [
                {
                    contactKey: "{{subscriberKey}}",
                    to: "{{email}}",
                    attributes: {
                        FirstName: "{{firstName}}",
                        LastName: "{{lastName}}"
                    }
                }
            ]
        }
    },
    {
        id: 3,
        name: "Retrieve Subscribers",
        function: "Get subscriber details",
        method: "GET",
        endpoint: "https://{{et_subdomain}}.rest.marketingcloudapis.com/contacts/v1/contacts",
        doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/contact-apis.html",
        requestBody: null // GET requests don't require a body
    },
    {
        id: 4,
        name: "Transactional Messaging",
        function: "Send transactional email",
        method: "POST",
        endpoint: "https://{{et_subdomain}}.rest.marketingcloudapis.com/messaging/v1/email/messages",
        doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/transactional-messaging.html",
        requestBody: {
            definitionKey: "{transactionalKey}",
            recipients: [
                {
                    contactKey: "{{subscriberKey}}",
                    to: "{{email}}",
                    attributes: {
                        OrderID: "{{orderId}}",
                        ProductName: "{{productName}}"
                    }
                }
            ]
        }
    },
    {
        id: 5,
        name: "Get Data Extensions",
        function: "Retrieve Data Extensions",
        method: "GET",
        endpoint: "https://{{et_subdomain}}.rest.marketingcloudapis.com/data/v1/customobjectdata/key/{key}/rowset",
        doc: "https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/data-extension-retrieve.html",
        requestBody: null // GET requests don't require a body
    }
];
