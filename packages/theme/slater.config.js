module.exports = {
	themes: {
		development: {
			id: process.env.SHOPIFY_THEME_ID,
			password: process.env.SHOPIFY_APP_PASSWORD,
			store: process.env.SHOPIFY_STORE_URL,
			ignore: [
				`settings_data.json`, // leave this here to avoid overriding theme settings on sync
			],
		},
	},
}
