import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import Font from './PropertiesComponenets/Font'
import TextChange from './PropertiesComponenets/TextChange'
import Text from './PropertiesComponenets/Text'

const ButtonProperties = () => {
	const {
		small,
		setSmall,
		medium,
		setMedium,
		large,
		setLarge,
		xlarge,
		setXlarge,
		changedSmall,
		setChangedSmall,
		changedMedium,
		setChangedMedium,
		changedLarge,
		setChangedLarge,
		changedXlarge,
		setChangedXlarge,
	} = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)
	const [separateLine, setSeparateLine] = useState(false)

	//For default values of display(separated line)
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const sl = document.getElementById('button-sl-checkbox')

			if (width < 540) {
				sl.checked = small && small.display === 'block'
				setSeparateLine(small && small.display === 'block')
			} else if (width < 720) {
				sl.checked = medium && medium.display === 'block'
				setSeparateLine(medium && medium.display === 'block')
			} else if (width < 970) {
				sl.checked = large && large.display === 'block'
				setSeparateLine(large && large.display === 'block')
			} else {
				sl.checked = xlarge && xlarge.display === 'block'
				setSeparateLine(xlarge && xlarge.display === 'block')
			}
		}
	}, [width, activeElement, small, large, medium, xlarge])

	//For changing display for separate line
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else if (width < 720) {
				setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else if (width < 970) {
				setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else {
				setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
			}
		}
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
