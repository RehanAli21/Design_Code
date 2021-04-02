import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import Font from './PropertiesComponenets/Font'
import TextChange from './PropertiesComponenets/TextChange'
import Text from './PropertiesComponenets/Text'

const ButtonProperties = () => {
	const { width, activeElement } = useContext(PageContext)
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge } = useContext(PropertiesContext)
	const [separateLine, setSeparateLine] = useState(false)

	//For default values of display(separated line)
	useEffect(() => {
		const sl = document.getElementById('button-sl-checkbox')

		sl.checked = large && large.display === 'block'
		setSeparateLine(large && large.display === 'block')
	}, [width, activeElement, small, large, medium, xlarge])

	//For changing display for separate line
	useEffect(() => {
		setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
		setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
		setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
		setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
	}, [separateLine])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<React.Fragment>
			<div className='borders btn-specific'>
				<p className='second-heading'>BUTTON PROPERTIES</p>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '20px 130px auto',
						marginLeft: '25px',
						marginTop: '20px',
						textAlign: 'center',
					}}>
					<input
						id='button-sl-checkbox'
						onChange={e => setSeparateLine(e.target.checked)}
						style={{ marginTop: '5px' }}
						type='checkbox'
					/>
					<label>On Separate Line</label>
				</div>
				<TextChange type='button' />
			</div>
			<Text />
			<Font />
		</React.Fragment>
	)
}

export default ButtonProperties
