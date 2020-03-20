import { storiesOf } from '@storybook/html'
import { Liquid } from 'liquidjs'
var engine = new Liquid()

import button from '@theme/theme/src/snippets/button.liquid'

storiesOf(`Buttons`, module)
	.addParameters({
		styles: {
			height: `100vh`,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `center`,
		},
	})
	.add(`Default`, () => {
		const el = document.createElement(`div`)

		engine
			.parseAndRender(button, { text: `Click me` })
			.then(res => {
				console.log(res)
				el.innerHTML = res
			})

		return el
	})