import React, { useContext } from 'react'
import Resizable from 'react-resizable-box'
import { PageContext } from './Contexts/PageContext'
import uuid from 'react-uuid'

//This compoenent controls page.
const Page = () => {
	const { pages, activePage } = useContext(PageContext)
	const toCapitalize = s => s.charAt(0).toUpperCase() + s.slice(1, s.length)

	const showElements = arr => {
		const temp = []
		if (!arr) return null

		arr.forEach(e => {
			if (e[2].length > 0)
				temp.push(
					React.createElement(
						e[0],
						{ key: uuid() },
						showElements(e[2])
					)
				)

			temp.push(React.createElement(e[0], { key: uuid() }, null))
		})
		return temp
	}

	return (
		<div
			className='full-width'
			style={{ width: window.screen.width / 1.4 }}>
			<div>
				<Resizable className='pages-div' width={720} id={activePage}>
					{showElements(pages[activePage])}
				</Resizable>
			</div>
		</div>
	)
}

export default Page
