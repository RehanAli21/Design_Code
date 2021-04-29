import React, { useContext, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import ClickStateProperties from './Properties/ClickStateProperties'
import HoverStateProperties from './Properties/HoverStateProperties'
import NormalStateProperties from './Properties/NormalStateProperties'

const Propertiesbar = () => {
	const { activePage, activeElement, setPageBC } = useContext(PageContext)
	const [state, setState] = useState('normal')

	const ele = document.getElementById(activeElement)
	return (
		<div className='propertybar'>
			<div
				style={{ display: activePage === activeElement || activeElement === '' ? 'none' : 'block' }}
				className='style-states-button'>
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
			<NormalStateProperties state={state} activeElement={activeElement} activePage={activePage} ele={ele} />
			<HoverStateProperties state={state} activeElement={activeElement} activePage={activePage} />
			<ClickStateProperties state={state} activeElement={activeElement} activePage={activePage} />
		</div>
	)
}

export default Propertiesbar
