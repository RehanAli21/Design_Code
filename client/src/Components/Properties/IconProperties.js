import React, { useState } from 'react'
import Name from './PropertiesComponenets/Name'

const IconProperties = () => {
	const [icon, setIcon] = useState('')

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>ICON PROPERTIES</p>
			<Name />
			<div className='two'>
				<label>Icon Name</label>
				<input type='text' id='icon-class-name' placeholder='Enter Icon name' />
			</div>
		</div>
	)
}

export default IconProperties
