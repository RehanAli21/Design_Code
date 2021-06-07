import React from 'react'
import Align from './PropertiesComponenets/Align'
import Appearance from './PropertiesComponenets/Appearance'
import DsProperties from './PropertiesComponenets/DsProperties'
import Transform from './PropertiesComponenets/Transform'
import Specific from './Specific'

const NormalStateProperties = ({ activePage, activeElement, ele }) => {
	const comps = () => {
		if (activeElement !== '') {
			if (ele && ele.tagName === 'I') {
				return (
					<React.Fragment>
						<Appearance />
					</React.Fragment>
				)
			} else if (ele && ele.tagName !== 'OPTION') {
				return (
					<React.Fragment>
						<Align />
						<Transform />
						<Appearance />
						<DsProperties />
					</React.Fragment>
				)
			}
		}
	}
	return (
		<div style={{ display: activePage !== activeElement ? 'block' : 'none' }} className='property'>
			<Specific />
			{comps()}
		</div>
	)
}

export default NormalStateProperties
