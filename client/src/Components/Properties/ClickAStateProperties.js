import React, { useContext, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'

const ClickAStateProperties = ({ state }) => {
	const { pages, activePage, activeElement, setPages } = useContext(PageContext)

	const [name, setName] = useState('')

	const ApplyStyle = () => {
		if (name !== '') {
			console.log(name)
			console.log(helperFunction(pages[activePage]))
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

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement && state === 'clickjs' ? 'block' : 'none' }}>
			<p className='second-heading'>CLICK(ADVANCE) PROPERTIES</p>
			<div className='two'>
				<label>Element Name</label>
				<input type='text' placeholder='Ele name' id='clickjs-name-input' onChange={e => setName(e.target.value)} />
			</div>
			<button onClick={ApplyStyle} style={{ padding: '10px 20px', marginTop: '20px' }}>
				Apply Style
			</button>
		</div>
	)
}

export default ClickAStateProperties
