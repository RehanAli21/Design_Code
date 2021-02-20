import React, { useState, useContext } from 'react'
import { PageContext } from './Contexts/PageContext'

const Propertiesbar = () => {
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})

	const { pages, setPages, activePage, activeElement } = useContext(
		PageContext
	)

	const showProperties = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				alert('found in property')
			} else if (e[2].length > 0) {
				showProperties(e[2], id)
			}
		})
	}

	return (
		<div className='propertybar'>
			<p>Properties</p>
			{showProperties(pages[activePage], activeElement)}
		</div>
	)
}

export default Propertiesbar
