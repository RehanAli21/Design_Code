import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import ClickAdvOne from './PropertiesComponenets/ClickAdvOne'

const ClickAStateProperties = ({ state }) => {
	const { pages, activePage, activeElement } = useContext(PageContext)

	const [name, setName] = useState('')
	const [showProperties, setShowProperties] = useState(false)

	useEffect(() => {
		if (name !== '') {
			const nameFound = NameFinder(pages[activePage])

			if (nameFound) {
				setShowProperties(true)
			} else if (!nameFound) {
				setShowProperties(false)
			}
		}
	}, [name])

	const NameFinder = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name) {
				return true
			} else if (arr[i][2]) {
				if (NameFinder(arr[i][2])) return true
			}
		}
	}

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement && state === 'clickjs' ? 'block' : 'none' }}>
			<p className='second-heading'>CLICK(ADVANCE) PROPERTIES</p>
			<div className='two'>
				<label>Element Name</label>
				<input type='text' placeholder='Ele name' id='clickjs-name-input' onChange={e => setName(e.target.value)} />
			</div>
			<div style={{ display: showProperties ? 'block' : 'none' }}>
				<ClickAdvOne />
			</div>
		</div>
	)
}

export default ClickAStateProperties
