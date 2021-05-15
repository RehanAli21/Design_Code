import React, { useContext, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import ClickAdvOne from './PropertiesComponenets/ClickAdvOne'

const ClickAStateProperties = ({ state }) => {
	const { pages, activePage, activeElement, setPages } = useContext(PageContext)

	const [name, setName] = useState('')
	const [duration, setDuration] = useState('')
	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [fontSize, setFontSize] = useState('')
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	const ApplyStyle = () => {
		if (name !== '') {
			if (!helperFunction(pages[activePage])) {
				alert('element name is incorrect, no matching name found')
			}
		} else if (name === '') {
			alert('Element Name is empty')
		}
	}

	const helperFunction = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].name === name) {
				return true
			} else if (arr[i][2]) {
				if (helperFunction(arr[i][2])) return true
			}
		}
	}

	const resetAll = () => {}

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement && state === 'clickjs' ? 'block' : 'none' }}>
			<p className='second-heading'>CLICK(ADVANCE) PROPERTIES</p>
			<div className='two'>
				<label>Element Name</label>
				<input type='text' placeholder='Ele name' id='clickjs-name-input' onChange={e => setName(e.target.value)} />
			</div>
			<ClickAdvOne
				setDuration={setDuration}
				setTextColor={setTextColor}
				setFontSize={setFontSize}
				showCustomFontSize={showCustomFontSize}
				setShowCustomFontSize={setShowCustomFontSize}
				showCustomTextColor={showCustomTextColor}
				setShowCustomTextColor={setShowCustomTextColor}
			/>
			<div className='two'>
				<button onClick={resetAll}>Reset All</button>
				<button onClick={ApplyStyle}>Apply Style</button>
			</div>
		</div>
	)
}

export default ClickAStateProperties
