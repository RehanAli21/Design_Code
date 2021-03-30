import React from 'react'
import Font from './PropertiesComponenets/Font'
import TextChange from './PropertiesComponenets/TextChange'
import Text from './PropertiesComponenets/Text'

const ButtonProperties = () => {
	return (
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading'>PROPERTIES</p>
				<TextChange type='button' />
			</div>
			<Text />
			<Font />
		</React.Fragment>
	)
}

export default ButtonProperties
