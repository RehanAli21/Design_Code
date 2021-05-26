import React from 'react'
import Cursor from './PropertiesComponenets/Cursor'
import Name from './PropertiesComponenets/Name'

const ListItemProperties = () => {
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>List Item Properties</p>
			<Name />
			<Cursor />
		</div>
	)
}

export default ListItemProperties
