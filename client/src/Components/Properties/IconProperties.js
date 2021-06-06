import React, { useContext, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import Name from './PropertiesComponenets/Name'

const IconProperties = () => {
	const { page, setPage, activeElement } = useContext(PageContext)
	const [icon, setIcon] = useState('')

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>ICON PROPERTIES</p>
			<Name />
			<div className='two'>
				<label>Icon Name</label>
				<input type='text' id='icon-class-name' placeholder='Enter Icon name' onChange={e => setIcon(e.target.value)} />
			</div>
			<div style={{ margin: '10px 20px' }}>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.google.com'
					style={{ textDecoration: 'none', color: 'rgb(32, 144, 220)', fontWeight: 'bold' }}>
					<i className='bi-arrow-right-circle-fill'></i> For Icons List click on ME
				</a>
				<p style={{ marginTop: '10px', textAlign: 'left' }}>
					<strong>Instructions:</strong> Choice icon from the link above, then copy full name of icon and paste it on
					icon Name field
				</p>
			</div>
		</div>
	)
}

export default IconProperties
