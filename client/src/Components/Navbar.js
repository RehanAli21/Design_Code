import React from 'react'

const Navbar = () => {
	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	return (
		<nav>
			<h1>{'<'}</h1>
			<div>
				<select>
					<option>Home</option>
				</select>
			</div>
			<div className='addpage-div'>
				<input
					id='addpage-input'
					type='text'
					placeholder='Add Page...'
				/>
				<button>ADD</button>
			</div>
		</nav>
	)
}

export default Navbar
