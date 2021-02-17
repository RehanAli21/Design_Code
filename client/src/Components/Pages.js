import React from 'react'

//This compoenent controls page.
const Pages = () => {
	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			<div></div>
		</div>
	)
}

export default Pages
