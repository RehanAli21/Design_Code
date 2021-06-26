import React from 'react'
import Name from './PropertiesComponenets/Name'
import Tip from './PropertiesComponenets/Tip'

const SlideProperties = () => {
	const showBtnProperties = true
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>
				<Tip msg={['Name is an unique identity for this element']} />
				SLIDE PROPERTIES <span style={{ display: showBtnProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showBtnProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<Name />
		</div>
	)
}

export default SlideProperties
