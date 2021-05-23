import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { PageContext } from '../Contexts/PageContext'
import HoverAdvOne from './PropertiesComponenets/HoverAdvOne'
import HoverAdvAppearance from './PropertiesComponenets/HoverAdvAppearance'
import HoverAdvExtra from './PropertiesComponenets/HoverAdvExtra'

const HoverAStateProperties = () => {
	const { setHoverTarget, hoverTargetName, setHoverTargetName } = useContext(PropertiesContext)
	const { width, pages, activePage, activeElement } = useContext(PageContext)

	const [name, setName] = useState('')
	const [showProperties, setShowProperties] = useState(false)

	useEffect(() => {
		const nameInput = document.getElementById('hoveradv-name-input')

		if (nameInput) {
			nameInput.value = hoverTargetName
		}

		if (hoverTargetName !== '') setShowProperties(true)
		else if (hoverTargetName === '') setShowProperties(false)
	}, [activeElement, width, hoverTargetName])

	useEffect(() => {
		if (name !== '') {
			const nameFound = NameFinder(pages[activePage])

			if (nameFound) {
				setShowProperties(true)
				setHoverTargetName(name)
			} else if (!nameFound) {
				setShowProperties(false)
				setHoverTarget('')
				setHoverTargetName('')
			}
		}
	}, [name])

	const NameFinder = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name) {
				if (arr[i][0] !== 'option') {
					setHoverTarget(arr[i][1].id)
					return true
				}
			} else if (arr[i][2]) {
				if (NameFinder(arr[i][2])) return true
			}
		}
	}

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement ? 'block' : 'none' }}>
			<p className='second-heading'>HOVER(ADVANCE) PROPERTIES</p>
			<div className='two'>
				<label>Element Name</label>
				<input type='text' placeholder='Ele name' id='hoveradv-name-input' onChange={e => setName(e.target.value)} />
			</div>
			<div style={{ display: showProperties ? 'block' : 'none' }}>
				<HoverAdvOne />
				<HoverAdvAppearance />
				<HoverAdvExtra />
			</div>
		</div>
	)
}

export default HoverAStateProperties
