import React, { useEffect, useState, useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import GridColumn from './PropertiesComponenets/GridColumn'
import Font from './PropertiesComponenets/Font'
import TextChange from './PropertiesComponenets/TextChange'
import Text from './PropertiesComponenets/Text'
import Position from './PropertiesComponenets/Position'
import BackFilter from './PropertiesComponenets/BackFilter'
import Animate from './PropertiesComponenets/Animate'
import Name from './PropertiesComponenets/Name'
import Cursor from './PropertiesComponenets/Cursor'
import Tip from './PropertiesComponenets/Tip'

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
		showBtnProperties,
		setShowBtnProperties,
	} = useContext(PropertiesContext)
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)
	const [separateLine, setSeparateLine] = useState(false)

	//For default values of display(separated line)
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const sl = document.getElementById('button-sl-checkbox')

			if (width < sBreakPoint) {
				sl.checked = small && small.display === 'block'
				setSeparateLine(small && small.display === 'block')
			} else if (width < mBreakPoint) {
				sl.checked = medium && medium.display === 'block'
				setSeparateLine(medium && medium.display === 'block')
			} else if (width < lBreakPoint) {
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
			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'display', separateLine ? 'block' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', separateLine ? 'block' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', separateLine ? 'block' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', separateLine ? 'block' : '')
			} else if (width < lBreakPoint) {
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
				<p className='second-heading' onClick={() => setShowBtnProperties(!showBtnProperties)}>
					<Tip
						msg={[
							'Name is an unique identity for this element',
							'Text for text of button',
							'Cursor for changing mouse icon/poiniter',
							'Separete Line will send button on different row',
							'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
						]}
					/>
					BUTTON PROPERTIES <span style={{ display: showBtnProperties ? 'inline' : 'none' }}>&#9660;</span>
					<span style={{ display: showBtnProperties ? 'none' : 'inline' }}>&#9654;</span>
				</p>
				<Name style={showBtnProperties ? 'grid' : 'none'} />
				<TextChange type='button' display={showBtnProperties ? 'grid' : 'none'} />
				<Cursor style={showBtnProperties ? 'grid' : 'none'} />
				<GridColumn style={showBtnProperties ? 'grid' : 'none'} />
				<div
					style={{
						display: showBtnProperties ? 'grid' : 'none',
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
			</div>
			<Text />
			<Font />
			<Position />
			<BackFilter />
			<Animate />
		</React.Fragment>
	)
}

export default ButtonProperties
