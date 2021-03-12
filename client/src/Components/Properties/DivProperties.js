import React, { useState } from 'react'

const DivProperties = () => {
	const [showRow, setShowRow] = useState(false)
	return (
		<div className='borders r-c'>
			<p className='second-heading'>Div Properties</p>
			<div className='rows'>
				<div>
					<input type='checkbox' />
					<label>Rows</label>
				</div>
				<div className='rows' style={{ transform: `scale(${showRow ? 1 : 0})` }}>
					<input type='number' placeholder='Nums of rows' />
				</div>
			</div>
		</div>
	)
}

export default DivProperties
