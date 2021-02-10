import React, { useState } from 'react'
import Nav from './Components/Nav'

const App = () => {
	const [layout, setLayout] = useState('X-large')

	return (
		<div>
			<Nav layout={layout} setLayout={setLayout} />
			<div id='create' className='create'>
				&#43;
			</div>
			<div id='create-options' className='create-options'>
				<div className='slider-up' id='slider_up'>
					&#10095; &#10094; &#9650;
				</div>
				<div className='options'>
					<div className='option'>Navbar</div>
					<div className='option'>Row</div>
					<div className='option'>Col</div>
					<div className='option'>Form</div>
					<div className='option'>Inputs</div>
					<div className='option'>Buttons</div>
					<div className='option'>Image</div>
					<div className='option'>Tables</div>
					<div className='option'>lists</div>
				</div>
				<div className='slider-down' id='slider_up'>
					&#9660;
				</div>
			</div>
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
				}}></main>
		</div>
	)
}

export default App
