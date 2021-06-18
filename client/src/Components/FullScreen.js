import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

const FullScreen = ({ showElements }) => {
	const { activePage, pages, pageBC } = useContext(PageContext)

	return (
		<div style={{ backgroundColor: pageBC }} className='fullScreenPage'>
			{showElements(pages[activePage])}
		</div>
	)
}

export default FullScreen
