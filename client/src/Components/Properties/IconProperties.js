import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import { PropertiesContext } from '../Contexts/PropertiesContext'
import { TemplateContext } from '../Contexts/TemplateContext'
import Name from './PropertiesComponenets/Name'

const IconProperties = () => {
	const { small, setSmall, medium, setMedium, large, setLarge, xlarge, setXlarge } = useContext(PropertiesContext)
	const { pages, setPages, activeElement, activePage, setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)
	const { colors, fontSizes } = useContext(TemplateContext)
	const [icon, setIcon] = useState('')
	const [textColor, setTextColor] = useState('')
	const [showCustomTextColor, setShowCustomTextColor] = useState(true)
	const [fontSize, setFontSize] = useState('')
	const [showCustomFontSize, setShowCustomFontSize] = useState(true)

	//For default value of icon name
	useEffect(() => {
		findIconClass(pages[activePage], activeElement)
	})
	//for finding getting icon name
	const findIconClass = (arr, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				const ele = document.getElementById('icon-class-name')

				if (ele) {
					let className = ''
					for (let k = 0; k < arr[i][1].class.length; k++) {
						arr[i][1].class[k] === '-' ? (className += ' ') : (className = arr[i][1].class[k])
					}

					className = className.substring(2, className.length)
					if (className !== '') ele.value = className
				}

				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				if (findIconClass(arr[i][2], id)) return true
			}
		}
		return false
	}

	//for setting icons
	useEffect(() => {
		if (icon !== '') {
			const temp = Object.assign({}, pages)
			//below logic is for converting name into bootstrap icon class
			const splitedIcon = icon.toLowerCase().split(' ')
			let iconClass = 'bi'
			splitedIcon.forEach(e => (e !== '' ? (iconClass += `-${e}`) : null))
			//////////////////////////////
			changeIcon(temp[activePage], activeElement, iconClass)
			setPages(temp)
		}
	}, [icon])
	//for find and set class
	const changeIcon = (arr, id, iconName) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				arr[i][1].class = iconName
				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				if (changeIcon(arr[i][2], id, iconName)) return true
			}
		}
		return false
	}

	//For Changing color of button
	useEffect(() => {
		if (small && medium && large && xlarge && textColor !== '') {
			setProperties(small, setSmall, 'color', textColor)
			setProperties(medium, setMedium, 'color', textColor)
			setProperties(large, setLarge, 'color', textColor)
			setProperties(xlarge, setXlarge, 'color', textColor)
		}
	}, [textColor])

	//For changing fontsize
	useEffect(() => {
		if (small && medium && large && xlarge && fontSize !== '') {
			setProperties(small, setSmall, 'fontSize', fontSize)
			setProperties(medium, setMedium, 'fontSize', fontSize)
			setProperties(large, setLarge, 'fontSize', fontSize)
			setProperties(xlarge, setXlarge, 'fontSize', fontSize)
		}
	}, [fontSize])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	const showTemplateColors = () => {
		const temp = []
		temp.push(
			<option key='custom' value='custom'>
				Custom
			</option>
		)
		for (const key in colors) {
			temp.push(
				<option key={key} value={colors[key]}>
					{key}
				</option>
			)
		}

		return (
			<select
				defaultValue='custom'
				id='icon-colorselect'
				onChange={e => {
					setTextColor(e.target.value)
					setShowCustomTextColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	const showTemplateFontSizes = () => {
		const temp = []
		temp.push(
			<option key='custom' value='custom'>
				Custom
			</option>
		)
		for (const key in fontSizes) {
			temp.push(
				<option key={key} value={fontSizes[key]}>
					{key}
				</option>
			)
		}

		return (
			<select
				defaultValue='custom'
				id='icon-fontsizeselect'
				onChange={e => {
					setFontSize(e.target.value === 'custom' ? `16px` : e.target.value)
					setShowCustomFontSize(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

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
			<div className='three'>
				<label style={{ marginTop: '5px' }}>Text color: </label>
				{showTemplateColors()}
				<input
					disabled={!showCustomTextColor}
					onChange={e => setTextColor(e.target.value)}
					type='color'
					id='icon-textcolor'
				/>
			</div>
			<div className='three'>
				<label>Size: </label>
				{showTemplateFontSizes()}
				<input
					disabled={!showCustomFontSize}
					onChange={e => {
						if (e.target.value < 0) {
							setMsgBoxMsg('Font Size can not be Negative')
							setShowMsgBox(true)
						} else if (e.target.value >= 0) setFontSize(`${e.target.value}px`)
					}}
					type='number'
					min='0'
					id='icon-fontsize'
				/>
			</div>
		</div>
	)
}

export default IconProperties
