import React from 'react'
import Text from './PropertiesComponenets/Text'
import Font from './PropertiesComponenets/Font'
import GridColumn from './PropertiesComponenets/GridColumn'
import BackFilter from './PropertiesComponenets/BackFilter'
import Animate from './PropertiesComponenets/Animate'

const SelectProperties = () => {
	return (
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading'>DROP_MENU PROPERTIES</p>
				<GridColumn />
			</div>
			<Text />
			<Font />
			<BackFilter />
			<Animate />
		</React.Fragment>
	)
}

export default SelectProperties
