module.exports = {
	addons: ['@storybook/addon-viewport/register'],
	stories: ['../stories/**/*.stories.js'],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.liquid$/i,
			use: 'raw-loader',
		})
		return config
	},
}