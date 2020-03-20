import { storiesOf } from '@storybook/html'
import { Liquid } from 'liquidjs'
var engine = new Liquid()

storiesOf(`Buttons`, module)
	.addParameters({
		styles: {
			height: `100vh`,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `center`,
		},
	})
	.add(`Liquid`, () => {
		const el = document.createElement(`div`)

		engine
			.parseAndRender(`{{name | capitalize}}`, { name: `alice` })
			.then(res => {
				console.log(res)
				el.innerHTML = res
			})

		return el
	})
	.add(`Default`, () => `
		<button class='button'>Submit</button>
	`)