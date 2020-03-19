import { storiesOf } from '@storybook/html'

storiesOf(`Buttons`, module)
	.addParameters({
		styles: {
			height: `100vh`,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `center`,
		},
	})
	.add(`Default`, () => `
		<button class='button'>Submit</button>
	`)