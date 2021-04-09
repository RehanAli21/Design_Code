import React, { useContext } from 'react'
import { PageContext } from './Contexts/PageContext'
import Align from './Properties/PropertiesComponenets/Align'
import Appearance from './Properties/PropertiesComponenets/Appearance'
import Transform from './Properties/PropertiesComponenets/Transform'
import Specific from './Properties/Specific'

const Propertiesbar = () => {
	const { activePage, activeElement, width, setPageBC } = useContext(PageContext)

	const ele = document.getElementById(activeElement)
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
				<div style={{ display: activeElement === '' || (ele && ele.tagName === 'OPTION') ? 'none' : 'block' }}>
					<Align width={width} activeElement={activeElement} />
					<Transform width={width} activeElement={activeElement} />
					<Appearance
						display={
							ele &&
							(ele.tagName === 'P' ||
								ele.tagName === 'H1' ||
								ele.tagName === 'H2' ||
								ele.tagName === 'H3' ||
								ele.tagName === 'H4' ||
								ele.tagName === 'H5' ||
								ele.tagName === 'UL' ||
								ele.tagName === 'OL')
								? 'none'
								: 'grid'
						}
						width={width}
						activeElement={activeElement}
					/>
				</div>
			</div>
		</div>
	)
}

export default Propertiesbar
