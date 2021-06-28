import React from 'react'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

const SlideProperties = () => {
	return (
		<div className='borders btn-specific r-c'>
			<p className='second-heading'>
				<Tip msg={['Name is an unique identity for this element']} />
				SLIDE PROPERTIES
			</p>
			<Name />
		</div>
	)
}

export default SlideProperties
