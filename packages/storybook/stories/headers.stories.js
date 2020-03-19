import { storiesOf } from '@storybook/html'

storiesOf(`Headers`, module)
	.addParameters({
		styles: {
			height: `100vh`,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `center`,
		},
	})
	.add(`Header1`, () => `
		<h1>Header 1</h1>
	`)
	.add(`Header2`, () => `
		<h1>Header 2</h1>
	`)
	.add(`Header3`, () => `
		<h1>Header 3</h1>
	`)
	.add(`Header4`, () => `
		<h1>Header 4</h1>
	`)