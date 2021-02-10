import React, { useState } from 'react'
import Nav from './Components/Nav'
import Slider from './Components/Slider'

const App = () => {
	const [layout, setLayout] = useState('X-large')
	const [addBarVisible, setAddBarVisible] = useState(false)

	return (
		<div>
			<Nav layout={layout} setLayout={setLayout} />
			<div
				onClick={() => setAddBarVisible(!addBarVisible)}
				id='create'
				className='create'>
				&#43;
			</div>
			<Slider visible={addBarVisible} />
			<main
				style={{
					width:
						layout === 'Small'
							? '540px'
							: layout === 'Medium'
							? '720px'
							: layout === 'Large'
							? '960px'
							: '100%',
					boxShadow: layout !== 'X-large' ? '2px 2px 20px grey' : ''
				}}>
				<h1>Hello Rehan!</h1>
				<h1>Hello Rehan!</h1>
				<h1>Hello Rehan!</h1>
				<h1>Hello Rehan!</h1>
			</main>
		</div>
	)
}

export default App
