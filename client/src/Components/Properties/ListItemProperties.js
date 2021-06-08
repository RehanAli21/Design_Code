import React from 'react'
import Cursor from './PropertiesComponenets/Cursor'
import Display from './PropertiesComponenets/Display'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

const ListItemProperties = () => {
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>
				<Tip msg={['Name is an unique identity for this element', 'Cursor for changing mouse icon/poiniter']} />
				List Item Properties
			</p>
			<Name />
			<Display />
			<Cursor />
		</div>
	)
}

export default ListItemProperties
