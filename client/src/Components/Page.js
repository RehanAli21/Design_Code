import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

//This compoenent controls page.
const Page = () => {
	const { pages } = useContext(PageContext)
	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			{pages.map(page => (
				<div key={page}>
					<p>{toCapitalize(page)}</p>
					<div className='medium pages-div' id={page}></div>
				</div>
			))}
		</div>
	)
}

export default Page
