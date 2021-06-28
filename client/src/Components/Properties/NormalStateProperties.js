import React from 'react'
import Align from './PropertiesComponenets/Align'
import Appearance from './PropertiesComponenets/Appearance'
import DsProperties from './PropertiesComponenets/DsProperties'
import Transform from './PropertiesComponenets/Transform'
import Specific from './Specific'

const NormalStateProperties = ({ activePage, activeElement, ele }) => {
	const comps = () => {
		if (activeElement !== '') {
			if (ele && ele.tagName === 'SECTION' && ele.classList.contains('Slider')) {
				return (
					<React.Fragment>
						<Transform />
						<Appearance />
						<DsProperties />
					</React.Fragment>
				)
			} else if (ele && ele.tagName === 'SECTION') {
				return <Transform />
			} else if (ele && ele.tagName === 'I') {
				return (
					<React.Fragment>
						<Appearance />
						<Specific section='other' />
					</React.Fragment>
				)
			} else if (ele && ele.tagName !== 'OPTION') {
				return (
					<React.Fragment>
						<Align />
						<Transform />
						<Appearance />
						<Specific section='other' />
						<DsProperties />
					</React.Fragment>
				)
			}
		}
	}
	return (
		<div style={{ display: activePage !== activeElement ? 'block' : 'none' }} className='property'>
			<Specific section='main' />
			{comps()}
		</div>
	)
}

export default NormalStateProperties
