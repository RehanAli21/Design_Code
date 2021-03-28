import React from 'react'
import Font from './PropertiesComponenets/Font'
import Text from './PropertiesComponenets/Text'
import TextColor from './PropertiesComponenets/TextColor'

const ButtonProperties = () => {
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>Button Properties</p>
			<Text />
			<TextColor />
			<Font />
		</div>
	)
}

export default ButtonProperties
