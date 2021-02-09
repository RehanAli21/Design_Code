import React, { useState } from 'react'
import Nav from './Components/Nav'

const App = () => {
	const [layout, setLayout] = useState('X-large')
	const width =
		layout === 'Small'
			? '540px'
			: layout === 'Medium'
			? '720px'
			: layout === 'Large'
			? '960px'
			: '100%'
	const border =
		layout === 'Small'
			? '2px solid black'
			: layout === 'Medium'
			? '2px solid black'
			: layout === 'Large'
			? '2px solid black'
			: 'none'

	return (
		<div>
			<Nav layout={layout} setLayout={setLayout} />
			<main
				style={{
					width: width,
					borderLeft: border,
					borderRight: border
				}}>
				<h1>asdasd</h1>
				<h1>asdasd</h1>
				<h1>asdasd</h1>
				<h1>asdasd</h1>
				<h1>asdasd</h1>
			</main>
		</div>
	)
}

export default App
