import React, { useContext } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Animate = () => {
	const { showAnimateProperties, setShowAnimateProperties } = useContext(PropertiesContext)
	return (
		<div className='borders btn-specific'>
			<p className='second-heading' onClick={() => setShowAnimateProperties(!showAnimateProperties)}>
				Animations <span style={{ display: showAnimateProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showAnimateProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
		</div>
	)
}

export default Animate
