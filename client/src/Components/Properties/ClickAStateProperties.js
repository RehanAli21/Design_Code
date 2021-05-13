import React, { useState } from 'react'

const ClickAStateProperties = ({ activePage, activeElement, state }) => {
	const [name, setName] = useState('')

	return (
		<div className='btn-specific' style={{ display: activePage !== activeElement && state === 'clickjs' ? 'block' : 'none' }}>
			<p className='second-heading'>CLICK(ADVANCE) PROPERTIES</p>
			<div className='two'>
				<label>Element Name</label>
				<input type='text' placeholder='Ele name' id='clickjs-name-input' onChange={e => setName(e.target.value)} />
			</div>
			<button style={{ padding: '10px 20px' }}>Apply Style</button>
		</div>
	)
}

export default ClickAStateProperties
