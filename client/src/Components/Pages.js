import React, { useContext } from 'react'
import { PagesContext } from './Contexts/PagesContext'

//This compoenent controls page.
const Pages = () => {
	const [
		pages,
		activePage,
		setActivePage,
		activePageWidth,
		setActivePageWidth
	] = useContext(PagesContext)

	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	console.log('Pages: ', activePageWidth)

	return (
		<div>
			<p>{toCapitalize(activePageWidth)}</p>
			<div className={activePageWidth.toLowerCase()}></div>
		</div>
	)
}

export default Pages
