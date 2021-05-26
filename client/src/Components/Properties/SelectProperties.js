import React from 'react'
import Text from './PropertiesComponenets/Text'
import Font from './PropertiesComponenets/Font'
import GridColumn from './PropertiesComponenets/GridColumn'
import BackFilter from './PropertiesComponenets/BackFilter'
import Animate from './PropertiesComponenets/Animate'
import Name from './PropertiesComponenets/Name'
import Cursor from './PropertiesComponenets/Cursor'

const SelectProperties = () => {
	return (
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading'>DROP_MENU PROPERTIES</p>
				<GridColumn />
				<Name />
				<Cursor />
			</div>
			<Text />
			<Font />
			<BackFilter />
			<Animate />
		</React.Fragment>
	)
}

export default SelectProperties
