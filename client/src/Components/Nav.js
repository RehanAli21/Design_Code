import React, { useState } from 'react'

const Nav = ({ layout, setLayout }) => {
	const [showNav, setShowNav] = useState(false)

	return (
		<React.Fragment>
			<nav style={{ transform: `scaleY(${showNav ? 1 : 0})` }}>
				<ul>
					<li>Layouts: </li>
					<li
						onClick={e => setLayout(e.target.innerText)}
						className={`nav-btn ${
							layout === 'Small' ? 'green' : ''
						}`}>
						Small
					</li>
					<li
						onClick={e => setLayout(e.target.innerText)}
						className={`nav-btn ${
							layout === 'Medium' ? 'green' : ''
						}`}>
						Medium
					</li>
					<li
						onClick={e => setLayout(e.target.innerText)}
						className={`nav-btn ${
							layout === 'Large' ? 'green' : ''
						}`}>
						Large
					</li>
					<li
						onClick={e => setLayout(e.target.innerText)}
						className={`nav-btn ${
							layout === 'X-large' ? 'green' : ''
						}`}>
						X-large
					</li>
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
