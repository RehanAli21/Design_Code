import React from 'react'
import Text from './PropertiesComponenets/Text'
import Font from './PropertiesComponenets/Font'
import TextColor from './PropertiesComponenets/TextColor'

const TextProperties = () => {
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>Text Properties</p>
			<Text type='text' />
			<TextColor />
			<Font />
		</div>
	)
}

export default TextProperties
