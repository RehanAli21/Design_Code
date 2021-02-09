import React, { useState } from 'react'

const Nav = () => {
	const [showNav, setShowNav] = useState(false)

	return (
		<React.Fragment>
			<nav style={{ display: showNav ? 'block' : 'none' }}>
				<ul>
					<li>Layouts: </li>
					<li className='nav-btn'>Small</li>
					<li className='nav-btn'>Medium</li>
					<li className='nav-btn'>Large</li>
					<li className='nav-btn'>X-large</li>
				</ul>
			</nav>
			<div
				onClick={() => setShowNav(!showNav)}
				className='create'
				id='create'>
				&#8801;
			</div>
		</React.Fragment>
	)
}

export default Nav
