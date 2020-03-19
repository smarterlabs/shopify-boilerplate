import { withStyles } from 'storybook-addon-styles/html'
import { addParameters, addDecorator } from '@storybook/html'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
})

addDecorator(withStyles)