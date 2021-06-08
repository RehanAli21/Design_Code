import React, { useState } from 'react'

const Display = () => {
	const [display, setDisplay] = useState('')
	return (
		<div className='two'>
			<label>Display:</label>
			<select id='display-show-select' onChange={e => setDisplay(e.target.value)}>
				<option value='show'>Show</option>
				<option value='hide'>Hide</option>
			</select>
		</div>
	)
}

export default Display
