import React, { useContext } from 'react'
import { PagesContext } from './Contexts/PagesContext'

//This compoenent controls page.
const Pages = () => {
	const { activePageWidth } = useContext(PagesContext)

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			<p>{toCapitalize(activePageWidth)}</p>
			<div className={activePageWidth.toLowerCase() + ' pages-div'}></div>
		</div>
	)
}

export default Pages
