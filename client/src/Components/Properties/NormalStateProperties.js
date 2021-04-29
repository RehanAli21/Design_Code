import React from 'react'
import Align from './PropertiesComponenets/Align'
import Appearance from './PropertiesComponenets/Appearance'
import DsProperties from './PropertiesComponenets/DsProperties'
import Transform from './PropertiesComponenets/Transform'
import Specific from './Specific'

const NormalStateProperties = ({ activePage, activeElement, ele, state }) => {
	return (
		<div style={{ display: activePage !== activeElement && state === 'normal' ? 'block' : 'none' }} className='property'>
			<Specific />
			<div style={{ display: activeElement === '' || (ele && ele.tagName === 'OPTION') ? 'none' : 'block' }}>
				<Align />
				<Transform />
				<Appearance />
				<DsProperties />
			</div>
		</div>
	)
}

export default NormalStateProperties
