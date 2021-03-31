import React, { useState, useEffect, useContext } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const Appearance = ({ display, width, activeElement }) => {
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
	const { colors } = useContext(TemplateContext)

	const [showBorderSection, setShowBorderSection] = useState(false)
	const [showShadowSection, setShowShadowSection] = useState(false)
	const [opacity, setOpacity] = useState(1)
	const [bgColor, setBgColor] = useState(`#ffffff`)
	const [customBgColor, setCustomBgColor] = useState(true)
	const [padding, setPadding] = useState('')
	const [bColor, setBColor] = useState('#000000')
	const [bSize, setBSize] = useState('1px')
	const [bRadius, setBRdius] = useState('1px')
	const [bType, setBtype] = useState('solid')
	const [bSide, setBSide] = useState('all')
	const [customBorderColor, setCustomBorderColor] = useState(true)
	const [borderChanged, setBorderChanged] = useState(false)
	const [sX, setSX] = useState('0px')
	const [sY, setSY] = useState('0px')
	const [sColor, setSColor] = useState('#464646')
	const [sBlur, setSBlur] = useState('0px')
	const [customShadowColor, setCustomShadowColor] = useState(true)
	const [shadowChanged, setShadowChanged] = useState(false)

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const bgColorInput = document.getElementById('a-bgcolor')
			const bActiveInput = document.getElementById('a-b-active')
			const bRadiusInput = document.getElementById('a-b-radius')
			const bColorInput = document.getElementById('a-b-color')
			const bSizeInput = document.getElementById('a-b-size')
			const bTypeInput = document.getElementById('a-b-type')
			const sActiveInput = document.getElementById('a-s-active')
			const sXInput = document.getElementById('a-s-x')
			const sYInput = document.getElementById('a-s-y')
			const sBlurInput = document.getElementById('a-s-blur')
			const sColorInput = document.getElementById('a-s-color')
			const paddingInput = document.getElementById('ap-paddingInput')

			if (large.border) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = RGBToHex(large.border.split(' ')[2])
				bSizeInput.value = large.border.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.border.split(' ')[1])
			} else if (large.borderTop) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = RGBToHex(large.borderTop.split(' ')[2])
				bSizeInput.value = large.borderTop.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderTop.split(' ')[1])
			} else if (large.borderBottom) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = RGBToHex(large.borderBottom.split(' ')[2])
				bSizeInput.value = large.borderBottom.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderBottom.split(' ')[1])
			} else if (large.borderLeft) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = RGBToHex(large.borderLeft.split(' ')[2])
				bSizeInput.value = large.borderLeft.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderLeft.split(' ')[1])
			} else if (large.borderRight) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = RGBToHex(large.borderRight.split(' ')[2])
				bSizeInput.value = large.borderRight.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderRight.split(' ')[1])
			} else {
				bColorInput.value = '#000000'
				bSizeInput.value = '0'
				bTypeInput.selectedIndex = 0
				bActiveInput.checked = false
				setShowBorderSection(false)
			}

			if (large.boxShadow) {
				sXInput.value = large.boxShadow.split(' ')[0].split('p')[0]
				sYInput.value = large.boxShadow.split(' ')[1].split('p')[0]
				sBlurInput.value = large.boxShadow.split(' ')[2].split('p')[0]
				sColorInput.value = RGBToHex(large.boxShadow.split(' ')[3])
				sActiveInput.checked = true
				setShowShadowSection(true)
			} else {
				sXInput.value = '0'
				sYInput.value = '0'
				sBlurInput.value = '0'
				sColorInput.value = '#464646'
				sActiveInput.checked = false
				setShowShadowSection(false)
			}

			if (width < 540) {
				bgColorInput.value = small.backgroundColor ? RGBToHex(small.backgroundColor) : '#ffffff'
				bRadiusInput.value = small.borderRadius ? small.borderRadius.split('p')[0] : '0'
				paddingInput.value = small.padding ? small.padding.split('p')[0] : 0
			} else if (width < 720) {
				bgColorInput.value = medium.backgroundColor ? RGBToHex(medium.backgroundColor) : '#ffffff'
				bRadiusInput.value = medium.borderRadius ? medium.borderRadius.split('p')[0] : '0'
				paddingInput.value = medium.padding ? medium.padding.split('p')[0] : 0
			} else if (width < 970) {
				bgColorInput.value = large.backgroundColor ? RGBToHex(large.backgroundColor) : '#ffffff'
				bRadiusInput.value = large.borderRadius ? large.borderRadius.split('p')[0] : '0'
				paddingInput.value = large.padding ? large.padding.split('p')[0] : 0
			} else {
				bgColorInput.value = xlarge.backgroundColor ? RGBToHex(xlarge.backgroundColor) : '#ffffff'
				bRadiusInput.value = xlarge.borderRadius ? xlarge.borderRadius.split('p')[0] : '0'
				paddingInput.value = xlarge.padding ? xlarge.padding.split('p')[0] : 0
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	const borderTypeIndex = s => {
		return s === 'solid' ? 0 : s === 'inset' ? 1 : s === 'outset' ? 2 : 3
	}

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedBgColor = hexToRGB(bgColor, opacity)
			if (width < 540) {
				setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else if (width < 970) {
				setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				if (!changedMedium) setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else {
				setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				if (!changedMedium) setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
			}
		}
	}, [bgColor, opacity])

	useEffect(() => {
		if (small && medium && large && xlarge && shadowChanged) {
			const changedShadow = showShadowSection ? `${sX} ${sY} ${sBlur} ${hexToRGB(sColor, 1)}` : ''
			setProperties(small, setSmall, 'boxShadow', changedShadow)
			setProperties(medium, setMedium, 'boxShadow', changedShadow)
			setProperties(large, setLarge, 'boxShadow', changedShadow)
			setProperties(xlarge, setXlarge, 'boxShadow', changedShadow)

			setShadowChanged(false)
		}
	}, [showShadowSection, sX, sY, sColor, sBlur])

	//For Changing padding
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setProperties(small, setSmall, 'padding', padding)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'padding', padding)
				if (!changedLarge) setProperties(large, setLarge, 'padding', padding)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'padding', padding)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'padding', padding)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'padding', padding)
				if (!changedLarge) setProperties(large, setLarge, 'padding', padding)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'padding', padding)
			} else if (width < 970) {
				setProperties(large, setLarge, 'padding', padding)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'padding', padding)
				if (!changedMedium) setProperties(medium, setMedium, 'padding', padding)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'padding', padding)
			} else {
				setProperties(xlarge, setXlarge, 'padding', padding)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'padding', padding)
				if (!changedMedium) setProperties(medium, setMedium, 'padding', padding)
				if (!changedLarge) setProperties(large, setLarge, 'padding', padding)
			}
		}
	}, [padding])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge && borderChanged) {
			const changedBorder = showBorderSection ? `${bSize} ${bType} ${hexToRGB(bColor, 1)}` : ''
			const changedBorderRadius = showBorderSection ? bRadius : ''

			if (bSide === 'all') {
				setBorder(small, setSmall, changedBorder, changedBorderRadius)
				setBorder(medium, setMedium, changedBorder, changedBorderRadius)
				setBorder(large, setLarge, changedBorder, changedBorderRadius)
				setBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
			} else if (bSide === 'top') {
				setTopBorder(small, setSmall, changedBorder, changedBorderRadius)
				setTopBorder(medium, setMedium, changedBorder, changedBorderRadius)
				setTopBorder(large, setLarge, changedBorder, changedBorderRadius)
				setTopBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
			} else if (bSide === 'bottom') {
				setBottomBorder(small, setSmall, changedBorder, changedBorderRadius)
				setBottomBorder(medium, setMedium, changedBorder, changedBorderRadius)
				setBottomBorder(large, setLarge, changedBorder, changedBorderRadius)
				setBottomBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
			} else if (bSide === 'left') {
				setLeftBorder(small, setSmall, changedBorder, changedBorderRadius)
				setLeftBorder(medium, setMedium, changedBorder, changedBorderRadius)
				setLeftBorder(large, setLarge, changedBorder, changedBorderRadius)
				setLeftBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
			} else if (bSide === 'right') {
				setRightBorder(small, setSmall, changedBorder, changedBorderRadius)
				setRightBorder(medium, setMedium, changedBorder, changedBorderRadius)
				setRightBorder(large, setLarge, changedBorder, changedBorderRadius)
				setRightBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
			}
		}

		setBorderChanged(false)
	}, [showBorderSection, bSize, bType, bColor, bRadius, bSide])

	const setBorder = (obj, setObj, b, br) => {
		const temp = Object.assign({}, obj)
		temp.border = b
		temp.borderRadius = br
		setObj(temp)
	}
	const setTopBorder = (obj, setObj, b, br) => {
		const temp = Object.assign({}, obj)
		temp.borderTop = b
		temp.borderRadius = br
		setObj(temp)
	}
	const setBottomBorder = (obj, setObj, b, br) => {
		const temp = Object.assign({}, obj)
		temp.borderBottom = b
		temp.borderRadius = br
		setObj(temp)
	}
	const setLeftBorder = (obj, setObj, b, br) => {
		const temp = Object.assign({}, obj)
		temp.borderLeft = b
		temp.borderRadius = br
		setObj(temp)
	}
	const setRightBorder = (obj, setObj, b, br) => {
		const temp = Object.assign({}, obj)
		temp.borderRight = b
		temp.borderRadius = br
		setObj(temp)
	}

	const hexToRGB = (hex, o) => {
		let hex_color = hex.replace('#', ''),
			r = parseInt(hex_color.substring(0, 2), 16),
			g = parseInt(hex_color.substring(2, 4), 16),
			b = parseInt(hex_color.substring(4, 6), 16)

		return `rgba(${r},${g},${b},${o})`
	}

	const RGBToHex = color => {
		const rgba = color.replace(/^rgba?\(|s+|\)$/g, '').split(',')
		const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2]))
			.toString(16)
			.slice(1)}`

		return hex
	}

	const allBorder = () => {
		if (large.borderTop) {
			changeBorder(small, setSmall, 'border', 'borderTop')
			changeBorder(medium, setMedium, 'border', 'borderTop')
			changeBorder(large, setLarge, 'border', 'borderTop')
			changeBorder(xlarge, setXlarge, 'border', 'borderTop')
		}
		if (large.borderBottom) {
			changeBorder(small, setSmall, 'border', 'borderBottom')
			changeBorder(medium, setMedium, 'border', 'borderBottom')
			changeBorder(large, setLarge, 'border', 'borderBottom')
			changeBorder(xlarge, setXlarge, 'border', 'borderBottom')
		}
		if (large.borderLeft) {
			changeBorder(small, setSmall, 'border', 'borderLeft')
			changeBorder(medium, setMedium, 'border', 'borderLeft')
			changeBorder(large, setLarge, 'border', 'borderLeft')
			changeBorder(xlarge, setXlarge, 'border', 'borderLeft')
		}
		if (large.borderRight) {
			changeBorder(small, setSmall, 'border', 'borderRight')
			changeBorder(medium, setMedium, 'border', 'borderRight')
			changeBorder(large, setLarge, 'border', 'borderRight')
			changeBorder(xlarge, setXlarge, 'border', 'borderRight')
		}

		setBSide('all')
	}
	const topBorder = () => {
		if (large.border) {
			changeBorder(small, setSmall, 'borderTop', 'border')
			changeBorder(medium, setMedium, 'borderTop', 'border')
			changeBorder(large, setLarge, 'borderTop', 'border')
			changeBorder(xlarge, setXlarge, 'borderTop', 'border')
		}
		if (large.borderBottom) {
			changeBorder(small, setSmall, 'borderTop', 'borderBottom')
			changeBorder(medium, setMedium, 'borderTop', 'borderBottom')
			changeBorder(large, setLarge, 'borderTop', 'borderBottom')
			changeBorder(xlarge, setXlarge, 'borderTop', 'borderBottom')
		}
		if (large.borderLeft) {
			changeBorder(small, setSmall, 'borderTop', 'borderLeft')
			changeBorder(medium, setMedium, 'borderTop', 'borderLeft')
			changeBorder(large, setLarge, 'borderTop', 'borderLeft')
			changeBorder(xlarge, setXlarge, 'borderTop', 'borderLeft')
		}
		if (large.borderRight) {
			changeBorder(small, setSmall, 'borderTop', 'borderRight')
			changeBorder(medium, setMedium, 'borderTop', 'borderRight')
			changeBorder(large, setLarge, 'borderTop', 'borderRight')
			changeBorder(xlarge, setXlarge, 'borderTop', 'borderRight')
		}

		setBSide('top')
	}

	const bottomBorder = () => {
		if (large.border) {
			changeBorder(small, setSmall, 'borderBottom', 'border')
			changeBorder(medium, setMedium, 'borderBottom', 'border')
			changeBorder(large, setLarge, 'borderBottom', 'border')
			changeBorder(xlarge, setXlarge, 'borderBottom', 'border')
		}
		if (large.borderTop) {
			changeBorder(small, setSmall, 'borderBottom', 'borderTop')
			changeBorder(medium, setMedium, 'borderBottom', 'borderTop')
			changeBorder(large, setLarge, 'borderBottom', 'borderTop')
			changeBorder(xlarge, setXlarge, 'borderBottom', 'borderTop')
		}
		if (large.borderLeft) {
			changeBorder(small, setSmall, 'borderBottom', 'borderLeft')
			changeBorder(medium, setMedium, 'borderBottom', 'borderLeft')
			changeBorder(large, setLarge, 'borderBottom', 'borderLeft')
			changeBorder(xlarge, setXlarge, 'borderBottom', 'borderLeft')
		}
		if (large.borderRight) {
			changeBorder(small, setSmall, 'borderBottom', 'borderRight')
			changeBorder(medium, setMedium, 'borderBottom', 'borderRight')
			changeBorder(large, setLarge, 'borderBottom', 'borderRight')
			changeBorder(xlarge, setXlarge, 'borderBottom', 'borderRight')
		}

		setBSide('bottom')
	}
	const leftBorder = () => {
		if (large.border) {
			changeBorder(small, setSmall, 'borderLeft', 'border')
			changeBorder(medium, setMedium, 'borderLeft', 'border')
			changeBorder(large, setLarge, 'borderLeft', 'border')
			changeBorder(xlarge, setXlarge, 'borderLeft', 'border')
		}
		if (large.borderTop) {
			changeBorder(small, setSmall, 'borderLeft', 'borderTop')
			changeBorder(medium, setMedium, 'borderLeft', 'borderTop')
			changeBorder(large, setLarge, 'borderLeft', 'borderTop')
			changeBorder(xlarge, setXlarge, 'borderLeft', 'borderTop')
		}
		if (large.borderBottom) {
			changeBorder(small, setSmall, 'borderLeft', 'borderBottom')
			changeBorder(medium, setMedium, 'borderLeft', 'borderBottom')
			changeBorder(large, setLarge, 'borderLeft', 'borderBottom')
			changeBorder(xlarge, setXlarge, 'borderLeft', 'borderBottom')
		}
		if (large.borderRight) {
			changeBorder(small, setSmall, 'borderLeft', 'borderRight')
			changeBorder(medium, setMedium, 'borderLeft', 'borderRight')
			changeBorder(large, setLarge, 'borderLeft', 'borderRight')
			changeBorder(xlarge, setXlarge, 'borderLeft', 'borderRight')
		}

		setBSide('left')
	}
	const rightBorder = () => {
		if (large.border) {
			changeBorder(small, setSmall, 'borderRight', 'border')
			changeBorder(medium, setMedium, 'borderRight', 'border')
			changeBorder(large, setLarge, 'borderRight', 'border')
			changeBorder(xlarge, setXlarge, 'borderRight', 'border')
		}
		if (large.borderTop) {
			changeBorder(small, setSmall, 'borderRight', 'borderTop')
			changeBorder(medium, setMedium, 'borderRight', 'borderTop')
			changeBorder(large, setLarge, 'borderRight', 'borderTop')
			changeBorder(xlarge, setXlarge, 'borderRight', 'borderTop')
		}
		if (large.borderBottom) {
			changeBorder(small, setSmall, 'borderRight', 'borderBottom')
			changeBorder(medium, setMedium, 'borderRight', 'borderBottom')
			changeBorder(large, setLarge, 'borderRight', 'borderBottom')
			changeBorder(xlarge, setXlarge, 'borderRight', 'borderBottom')
		}
		if (large.borderLeft) {
			changeBorder(small, setSmall, 'borderRight', 'borderLeft')
			changeBorder(medium, setMedium, 'borderRight', 'borderLeft')
			changeBorder(large, setLarge, 'borderRight', 'borderLeft')
			changeBorder(xlarge, setXlarge, 'borderRight', 'borderLeft')
		}

		setBSide('right')
	}

	const changeBorder = (obj, setObj, bAdd, bDelete) => {
		const temp = {}
		for (const key in obj) {
			if (key === bDelete) temp[bAdd] = obj[key]
			else temp[key] = obj[key]
		}
		setObj(temp)
	}

	const showCustomBgColorOptions = () => {
		const temp = []

		temp.push(
			<option key='çustom' value='custom'>
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
				onChange={e => {
					setBgColor(e.target.value)
					setCustomBgColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	const showCustomBorderColorOptions = () => {
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
				onChange={e => {
					setBorderChanged(true)
					setBColor(e.target.value)
					setCustomBorderColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	const showCustomShadowColorOptions = () => {
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
				onChange={e => {
					setShadowChanged(true)
					setSColor(e.target.value)
					setCustomShadowColor(e.target.value === 'custom')
				}}>
				{temp}
			</select>
		)
	}

	return (
		<div style={{ display: display }} className='ap borders'>
			<p className='second-heading'>APPEARANCE</p>
			<div>
				<div className='two md'>
					<label>Color: </label>
					{showCustomBgColorOptions()}
					<input
						disabled={!customBgColor}
						id='a-bgcolor'
						onChange={e => setBgColor(e.target.value)}
						type='color'
						defaultValue='#ffffff'
					/>
				</div>
				<div className='one md'>
					<label>Opacity: </label>
					<input
						id='a-bgcolorOpacity'
						onChange={e => setOpacity(e.target.value)}
						step='0.1'
						type='range'
						defaultValue='1'
						min='0'
						max='1'
					/>
				</div>
				<div className='padding md'>
					<label>Inner space: </label>
					<input
						id='ap-paddingInput'
						onChange={e => setPadding(`${e.target.value}px`)}
						type='number'
						defaultValue='0'
						min='0'
					/>
				</div>
				<div className='ap-borders md'>
					<input
						id='a-b-active'
						type='checkbox'
						onChange={e => {
							setBorderChanged(true)
							setShowBorderSection(e.target.checked)
						}}
					/>
					<span>Border</span>
					<div
						style={{
							display: showBorderSection ? 'block' : 'none',
						}}
						className='b'>
						<div className='two'>
							<div className='mds borderColor'>
								<label>Color: </label>
								{showCustomBorderColorOptions()}
								<input
									disabled={!customBorderColor}
									id='a-b-color'
									onChange={e => {
										setBorderChanged(true)
										setBColor(e.target.value)
									}}
									type='color'
									defaultValue='#000000'
								/>
							</div>
							<div className='mds'>
								<label>Size: </label>
								<input
									id='a-b-size'
									onChange={e => {
										setBorderChanged(true)
										setBSize(`${e.target.value}px`)
									}}
									type='number'
									defaultValue='1'
									min='0'
								/>
							</div>
							<div className='mds'>
								<label>Radius: </label>
								<input
									id='a-b-radius'
									style={{ width: '100%' }}
									onChange={e => {
										setBorderChanged(true)
										setBRdius(`${e.target.value}px`)
									}}
									type='number'
									defaultValue='1'
									min='0'
									max='50'
								/>
							</div>
							<div className='mds'>
								<label>Type: </label>
								<select
									id='a-b-type'
									onChange={e => {
										setBorderChanged(true)
										setBtype(e.target.value)
									}}>
									<option>solid</option>
									<option>inset</option>
									<option>outset</option>
									<option>ridge</option>
								</select>
							</div>
							<div className='mds' style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
								<p>Sides: </p>
								<div style={{ marginTop: '5px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
									<button className={bSide === 'all' ? 'bb' : ''} onClick={allBorder}>
										A
									</button>
									<button className={bSide === 'top' ? 'bb' : ''} onClick={topBorder}>
										T
									</button>
									<button className={bSide === 'bottom' ? 'bb' : ''} onClick={bottomBorder}>
										B
									</button>
									<button className={bSide === 'left' ? 'bb' : ''} onClick={leftBorder}>
										L
									</button>
									<button className={bSide === 'right' ? 'bb' : ''} onClick={rightBorder}>
										R
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='shadow'>
					<input
						id='a-s-active'
						type='checkbox'
						onChange={() => {
							setShadowChanged(true)
							setShowShadowSection(!showShadowSection)
						}}
					/>
					<span>Shadow</span>
					<div style={{ display: showShadowSection ? 'grid' : 'none' }}>
						<div className='three'>
							<div className='two'>
								<label>X: </label>
								<input
									id='a-s-x'
									onChange={e => {
										setShadowChanged(true)
										setSX(e.target.value + 'px')
									}}
									type='number'
									defaultValue='0'
								/>
							</div>
							<div className='two'>
								<label>Y: </label>
								<input
									id='a-s-y'
									onChange={e => {
										setShadowChanged(true)
										setSY(e.target.value + 'px')
									}}
									type='number'
									defaultValue='0'
								/>
							</div>
							<div className='two'>
								<label>B: </label>
								<input
									id='a-s-blur'
									onChange={e => {
										setShadowChanged(true)
										setSBlur(e.target.value + 'px')
									}}
									type='number'
									min='0'
									defaultValue='0'
								/>
							</div>
						</div>
						<div className='three'>
							<label>Color: </label>
							{showCustomShadowColorOptions()}
							<input
								disabled={!customShadowColor}
								id='a-s-color'
								onChange={e => {
									setShadowChanged(true)
									setSColor(e.target.value)
								}}
								type='color'
								defaultValue='#464646'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Appearance
