import React, { useContext, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import Align from './Properties/PropertiesComponenets/Align'
import Appearance from './Properties/PropertiesComponenets/Appearance'
import DsProperties from './Properties/PropertiesComponenets/DsProperties'
import Transform from './Properties/PropertiesComponenets/Transform'
import Specific from './Properties/Specific'

const Propertiesbar = () => {
	const { activePage, activeElement, width, setPageBC } = useContext(PageContext)
	const [state, setState] = useState('normal')

	const ele = document.getElementById(activeElement)
	return (
		<div className='propertybar'>
			<div style={{ display: activePage === activeElement ? 'none' : 'block' }} className='style-states-button'>
				<button className={state === 'normal' ? 'active' : ''} onClick={() => setState('normal')}>
					Normal
				</button>
				<button className={state === 'hover' ? 'active' : ''} onClick={() => setState('hover')}>
					On Hover
				</button>
				<button className={state === 'click' ? 'active' : ''} onClick={() => setState('click')}>
					On Click
				</button>
			</div>
			<div style={{ display: activePage !== activeElement ? 'none' : 'block' }}>
				<h3>Properties</h3>
				<div style={{ marginTop: '20px' }}>
					<label>Background Color: </label>
					<input onChange={e => setPageBC(e.target.value)} type='color' defaultValue='#ffffff' />
				</div>
			</div>
			<div style={{ display: activePage === activeElement ? 'none' : 'block' }} className='property'>
				<Specific />
				<div style={{ display: activeElement === '' || (ele && ele.tagName === 'OPTION') ? 'none' : 'block' }}>
					<Align />
					<Transform />
					<Appearance />
					<DsProperties />
				</div>
			</div>
		</div>
	)
}

export default Propertiesbar
