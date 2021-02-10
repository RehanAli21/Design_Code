import React from 'react'

const Slider = ({ visible }) => {
	return (
		<div
<<<<<<< HEAD
			style={{ transform: `scaleY(${visible ? 1 : 0})` }}
=======
			style={{ display: visible ? 'block' : 'none' }}
>>>>>>> 43c296e8500b5a4a7bf0e29cc0778ee0737035f9
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
