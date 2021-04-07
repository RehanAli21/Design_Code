import React from 'react'
import Text from './PropertiesComponenets/Text'
import Font from './PropertiesComponenets/Font'

const SelectProperties = () => {
	return (
		<React.Fragment>
			<div className='btn-specific'>
				<p className='second-heading'>DROP_MENU PROPERTIES</p>
			</div>
			<Text />
			<Font />
		</React.Fragment>
	)
}

export default SelectProperties
