import React from 'react'

const Slider = ({ visible }) => {
	return (
		<div
			style={{ display: visible ? 'block' : 'none' }}
			className='slider-container'>
			<ul>
				<li>Navbar</li>
				<li>Row</li>
				<li>Col</li>
				<li>Form</li>
				<li>Input</li>
				<li>Button</li>
				<li>Image</li>
				<li>Table</li>
				<li>Lists</li>
				<li>Slider</li>
				<li>Carousal</li>
			</ul>
		</div>
	)
}

export default Slider
