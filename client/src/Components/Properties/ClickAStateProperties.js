import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { PageContext } from '../Contexts/PageContext'
import ClickAdvOne from './PropertiesComponenets/ClickAdvOne'
import ClickAdvAppearance from './PropertiesComponenets/ClickAdvAppearance'
import ClickAdvExtra from './PropertiesComponenets/ClickAdvExtra'
import Tip from './PropertiesComponenets/Tip'

const ClickAStateProperties = () => {
	const { setClickTarget, clickTargetName, setClickTargetName } = useContext(PropertiesContext)
	const { width, pages, activePage, activeElement } = useContext(PageContext)

	const [name, setName] = useState('')
	const [showProperties, setShowProperties] = useState(false)

	useEffect(() => {
		const nameInput = document.getElementById('clickadv-name-input')

		if (nameInput) {
			nameInput.value = clickTargetName
		}

		if (clickTargetName !== '') setShowProperties(true)
		else if (clickTargetName === '') setShowProperties(false)
	}, [activeElement, width, clickTargetName])

	useEffect(() => {
		if (name !== '') {
			const nameFound = NameFinder(pages[activePage])

			if (nameFound) {
				setShowProperties(true)
				setClickTargetName(name)
			} else if (!nameFound) {
				setShowProperties(false)
				setClickTarget('')
				setClickTargetName('')
			}
		}
	}, [name])

	const NameFinder = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name && arr[i][1].id !== activeElement) {
				if (arr[i][0] !== 'option') {
					setClickTarget(arr[i][1].id)
					return true
				}
			} else if (arr[i][2]) {
				if (NameFinder(arr[i][2])) return true
			}
		}
	}

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement ? 'block' : 'none' }}>
			<p className='second-heading'>
				<Tip
					msg={[
						'These properties will apply on the selected element, when this element is clicked',
						"Element can be selected by it's name",
						'Note: you can not select elements own name',
					]}
				/>
				CLICK ELEMENT PROPERTIES
			</p>
			<div className='two'>
				<label>Element Name</label>
				<input type='text' placeholder='Ele name' id='clickadv-name-input' onChange={e => setName(e.target.value)} />
			</div>
			<div style={{ display: showProperties ? 'block' : 'none' }}>
				<ClickAdvOne />
				<ClickAdvAppearance />
				<ClickAdvExtra />
			</div>
		</div>
	)
}

export default ClickAStateProperties
