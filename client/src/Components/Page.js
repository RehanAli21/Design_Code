import React, { useContext } from 'react'
import Resizable from 'react-resizable-box'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

//This compoenent controls page.
const Page = () => {
	const { pages, activePage } = useContext(PageContext)
	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			<div>
				<Resizable
					className='pages-div'
					width={720}
					id={uuid()}></Resizable>
			</div>
		</div>
	)
}

export default Page
