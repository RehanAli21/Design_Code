import React from 'react'
import Tip from './PropertiesComponenets/Tip'

const SliderProperties = () => {
	const showBtnProperties = true
	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>
				<Tip
					msg={[
						'Name is an unique identity for this element',
						'Text for text of button',
						'Cursor for changing mouse icon/poiniter',
						'Separete Line will send button on different row',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				SLIDER PROPERTIES <span style={{ display: showBtnProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showBtnProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
		</div>
	)
}

export default SliderProperties
