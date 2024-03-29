import React, { useContext, useState } from 'react'
import { PageContext } from './Contexts/PageContext'
import ClickAStateProperties from './Properties/ClickAStateProperties'
import ClickStateProperties from './Properties/ClickStateProperties'
import HoverAStateProperties from './Properties/HoverAStateProperties'
import HoverStateProperties from './Properties/HoverStateProperties'
import NormalStateProperties from './Properties/NormalStateProperties'

const Propertiesbar = () => {
	const { activePage, activeElement, setPageBC } = useContext(PageContext)
	const [state, setState] = useState('normal')

	const ele = document.getElementById(activeElement)

	const isOptionElement = ele && ele.tagName === 'OPTION'

	const isIcon = ele && ele.tagName === 'I'

	const isSection = ele && ele.tagName === 'SECTION'

	return (
		<div className='propertybar'>
			<div
				style={{
					display: activePage === activeElement || activeElement === '' ? 'none' : 'grid',
				}}
				className='style-states-button'>
				<button className={state === 'normal' ? 'active' : ''} onClick={() => setState('normal')}>
					Normal
				</button>
				<button className={state === 'hover' ? 'active' : ''} onClick={() => setState('hover')}>
					Hover
				</button>
				<button className={state === 'click' ? 'active' : ''} onClick={() => setState('click')}>
					Click
				</button>
				<button className={state === 'hoverjs' ? 'active' : ''} onClick={() => setState('hoverjs')}>
					Hover (ADV)
				</button>
				<button className={state === 'clickjs' ? 'active' : ''} onClick={() => setState('clickjs')}>
					Click (ADV)
				</button>
			</div>
			<div style={{ display: activePage !== activeElement ? 'none' : 'block' }}>
				<h3>Properties</h3>
				<div style={{ marginTop: '20px' }}>
					<label>Background Color: </label>
					<input onChange={e => setPageBC(e.target.value)} type='color' defaultValue='#ffffff' />
				</div>
			</div>
			{state === 'normal' ? (
				<NormalStateProperties activeElement={activeElement} activePage={activePage} ele={ele} />
			) : state === 'hover' && !isOptionElement && !isIcon && !isSection ? (
				<HoverStateProperties activeElement={activeElement} activePage={activePage} />
			) : state === 'click' && !isOptionElement && !isIcon && !isSection ? (
				<ClickStateProperties activeElement={activeElement} activePage={activePage} />
			) : state === 'hoverjs' && !isOptionElement && !isSection ? (
				<HoverAStateProperties activeElement={activeElement} activePage={activePage} />
			) : state === 'clickjs' && !isOptionElement && !isSection ? (
				<ClickAStateProperties />
			) : (
				<div></div>
			)}
		</div>
	)
}

export default Propertiesbar
