import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'
import Align from './Properties/PropertiesComponenets/Align'
import Appearance from './Properties/PropertiesComponenets/Appearance'
import Transform from './Properties/PropertiesComponenets/Transform'
import Specific from './Properties/Specific'

const Propertiesbar = () => {
	const { activePage, activeElement, width, setPageBC } = useContext(PageContext)

	return (
		<div className='propertybar'>
			<div style={{ display: activePage !== activeElement ? 'none' : 'block' }}>
				<h3>Properties</h3>
				<div style={{ marginTop: '20px' }}>
					<label>Background Color: </label>
					<input onChange={e => setPageBC(e.target.value)} type='color' defaultValue='#ffffff' />
				</div>
			</div>
			<div style={{ display: activePage === activeElement ? 'none' : 'block' }} className='property'>
				<Specific />
				<Align width={width} activeElement={activeElement} />
				<Transform width={width} activeElement={activeElement} />
				<Appearance width={width} activeElement={activeElement} />
			</div>
		</div>
	)
}

export default Propertiesbar
