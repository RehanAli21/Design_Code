import React from 'react'
import GridColumn from './PropertiesComponenets/GridColumn'
import Name from './PropertiesComponenets/Name'
import Cursor from './PropertiesComponenets/Cursor'
import Tip from './PropertiesComponenets/Tip'
import Display from './PropertiesComponenets/Display'

const SelectProperties = () => {
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>
				<Tip
					msg={[
						'Name is an unique identity for this element',
						'Cursor for changing mouse icon/poiniter',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				DROP_MENU PROPERTIES
			</p>
			<Name />
			<Display />
			<Cursor />
			<GridColumn />
		</div>
	)
}

export default SelectProperties
