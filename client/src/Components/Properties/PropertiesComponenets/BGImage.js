import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const BGImage = ({ width, activeElement }) => {
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

	const [bgImg, setbgImg] = useState(false)
	const [img, setImg] = useState('')
	const [bgSize, setBgSize] = useState('auto')
	const [bgRepeat, setBgRepeat] = useState('repeat')
	const [bgAttach, setBgAttach] = useState('scroll')

	//For Default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const bgCheckbox = document.getElementById('div-bg-checkbox')
			const bgSize = document.getElementById('div-bgSize-select')
			const bgRepeat = document.getElementById('div-bgRepeat-select')
			const bgAttach = document.getElementById('div-bgAttach-select')

			if (large.backgroundImage || large.backgroundSize) {
				bgCheckbox.checked = true
				setbgImg(true)
			}

			if (large.backgroundSize) bgSize.value = large.backgroundSize
			if (large.backgroundRepeat) bgRepeat.value = large.backgroundRepeat
			if (large.backgroundAttachment) bgAttach.value = large.backgroundAttachment
		}
	}, [width, activeElement, small, medium, large, xlarge])

	//For setting images
	useEffect(() => {
		if (small && medium && large && xlarge && bgImg) {
			setProperties(small, setSmall, 'backgroundImage', img)
			setProperties(medium, setMedium, 'backgroundImage', img)
			setProperties(large, setLarge, 'backgroundImage', img)
			setProperties(xlarge, setXlarge, 'backgroundImage', img)
		}
	}, [img])

	//For setting background Size
	useEffect(() => {
		if (small && medium && large && xlarge && bgImg) {
			setProperties(small, setSmall, 'backgroundSize', bgSize)
			setProperties(medium, setMedium, 'backgroundSize', bgSize)
			setProperties(large, setLarge, 'backgroundSize', bgSize)
			setProperties(xlarge, setXlarge, 'backgroundSize', bgSize)
		}
	}, [bgSize])

	//For setting background Repeat
	useEffect(() => {
		if (small && medium && large && xlarge && bgImg) {
			setProperties(small, setSmall, 'backgroundRepeat', bgRepeat)
			setProperties(medium, setMedium, 'backgroundRepeat', bgRepeat)
			setProperties(large, setLarge, 'backgroundRepeat', bgRepeat)
			setProperties(xlarge, setXlarge, 'backgroundRepeat', bgRepeat)
		}
	}, [bgRepeat])

	//For setting background Attachment
	useEffect(() => {
		if (small && medium && large && xlarge && bgImg) {
			setProperties(small, setSmall, 'backgroundAttachment', bgAttach)
			setProperties(medium, setMedium, 'backgroundAttachment', bgAttach)
			setProperties(large, setLarge, 'backgroundAttachment', bgAttach)
			setProperties(xlarge, setXlarge, 'backgroundAttachment', bgAttach)
		}
	}, [bgAttach])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	//For setting background img
	useEffect(() => {
		if (small && medium && large && xlarge && bgImg) {
			setBackground(small, setSmall)
			setBackground(medium, setMedium)
			setBackground(large, setLarge)
			setBackground(xlarge, setXlarge)
		}
	}, [bgImg])

	//For setting img
	const changeImg = e => {
		const reader = new FileReader()

		reader.onload = () => {
			if (reader.readyState === 2) {
				setImg(`url(${reader.result})`)
			}
		}
		reader.readAsDataURL(e.target.files[0])
	}

	const setBackground = (obj, setObj) => {
		const temp = Object.assign({}, obj)
		temp.backgroundImage = img
		temp.backgroundSize = bgSize
		temp.backgroundRepeat = bgRepeat
		temp.backgroundAttachment = bgAttach
		setObj(temp)
	}

	return (
		<React.Fragment>
			<div className='grid'>
				<input id='div-bg-checkbox' onChange={e => setbgImg(e.target.checked)} type='checkbox' />
				<label>Background Image: </label>
			</div>
			<div style={{ display: bgImg ? 'block' : 'none', marginBottom: '20px' }} className='div-bg-img'>
				<div className='two'>
					<label>Image: </label>
					<input id='div-bgImg-input' type='file' accept='image/*' onChange={e => changeImg(e)} />
				</div>
				<div className='two'>
					<label>Size: </label>
					<select id='div-bgSize-select' onChange={e => setBgSize(e.target.value)}>
						<option value='auto'>Auto</option>
						<option value='cover'>Cover</option>
						<option value='contain'>Contain</option>
					</select>
				</div>
				<div className='two'>
					<label>Repeat: </label>
					<select id='div-bgRepeat-select' onChange={e => setBgRepeat(e.target.value)}>
						<option value='repeat'>Repeat</option>
						<option value='no-repeat'>No Repeat</option>
						<option value='repeat-x'>Repeat X</option>
						<option value='repeat-y'>Repeat Y</option>
					</select>
				</div>
				<div className='two'>
					<label>Attachment: </label>
					<select id='div-bgAttach-select' onChange={e => setBgAttach(e.target.value)}>
						<option value='scroll'>Scroll</option>
						<option value='fixed'>Fixed</option>
					</select>
				</div>
			</div>
		</React.Fragment>
	)
}

export default BGImage
