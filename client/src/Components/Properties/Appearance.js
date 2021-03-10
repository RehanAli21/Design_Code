import React, { useState, useEffect } from 'react'

const Appearance = ({
	small,
	setSmall,
	medium,
	setMedium,
	large,
	setLarge,
	xlarge,
	setXlarge,
	width,
	activeElement,
	changedSmall,
	setChangedSmall,
	changedMedium,
	setChangedMedium,
	changedLarge,
	setChangedLarge,
	changedXlarge,
	setChangedXlarge
}) => {
	const [showBorderSection, setShowBorderSection] = useState(false)
	const [showShadowSection, setShowShadowSection] = useState(false)
	const [opacity, setOpacity] = useState(1)
	const [bgColor, setBgColor] = useState(`#ffffff`)
	const [bColor, setBColor] = useState('#ffffff')
	const [bSize, setBSize] = useState('1px')
	const [bRadius, setBRdius] = useState('1px')
	const [bType, setBtype] = useState('solid')
	const [bSide, setBSide] = useState('all')
	const [borderChanged, setBorderChanged] = useState(false)
	const [sX, setSX] = useState('0px')
	const [sY, setSY] = useState('0px')
	const [sColor, setSColor] = useState('#464646')
	const [sBlur, setSBlur] = useState('0px')
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

			if (width < 540) {
				bgColorInput.value = small.backgroundColor ? RGBToHex(small.backgroundColor) : '#ffffff'
				bRadiusInput.value = small.borderRadius ? small.borderRadius.split('p')[0] : '0'
				if (small.border) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = RGBToHex(small.border.split(' ')[2])
					bSizeInput.value = small.border.split(' ')[0].split('p')[0]
					bTypeInput.value = small.border.split(' ')[1]
				} else {
					bActiveInput.checked = false
					setShowBorderSection(false)
					bColorInput.value = '#ffffff'
					bSizeInput.value = '0'
					bTypeInput.value = 'solid'
				}
				if (small.boxShadow) {
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
			} else if (width < 720) {
				bgColorInput.value = medium.backgroundColor ? RGBToHex(medium.backgroundColor) : '#ffffff'
				bRadiusInput.value = medium.borderRadius ? medium.borderRadius.split('p')[0] : '0'
				if (medium.border) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = RGBToHex(medium.border.split(' ')[2])
					bSizeInput.value = medium.border.split(' ')[0].split('p')[0]
					bTypeInput.value = medium.border.split(' ')[1]
				} else {
					bActiveInput.checked = false
					setShowBorderSection(false)
					bColorInput.value = '#ffffff'
					bSizeInput.value = '0'
					bTypeInput.value = 'solid'
				}
				if (medium.boxShadow) {
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
			} else if (width < 970) {
				bgColorInput.value = large.backgroundColor ? RGBToHex(large.backgroundColor) : '#ffffff'
				bRadiusInput.value = large.borderRadius ? large.borderRadius.split('p')[0] : '0'
				if (large.border) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = RGBToHex(large.border.split(' ')[2])
					bSizeInput.value = large.border.split(' ')[0].split('p')[0]
					bTypeInput.value = large.border.split(' ')[1]
				} else {
					bColorInput.value = '#ffffff'
					bSizeInput.value = '0'
					bTypeInput.value = 'solid'
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
			} else {
				bgColorInput.value = xlarge.backgroundColor ? RGBToHex(xlarge.backgroundColor) : '#ffffff'
				bRadiusInput.value = xlarge.borderRadius ? xlarge.borderRadius.split('p')[0] : '0'
				if (xlarge.border) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = RGBToHex(xlarge.border.split(' ')[2])
					bSizeInput.value = xlarge.border.split(' ')[0].split('p')[0]
					bTypeInput.value = xlarge.border.split(' ')[1]
				} else {
					bActiveInput.checked = false
					setShowBorderSection(false)
					bColorInput.value = '#ffffff'
					bSizeInput.value = '0'
					bTypeInput.value = 'solid'
				}
				if (xlarge.boxShadow) {
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
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

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
				console.log('all')
				setBorder(small, setSmall, changedBorder, changedBorderRadius)
				setBorder(medium, setMedium, changedBorder, changedBorderRadius)
				setBorder(large, setLarge, changedBorder, changedBorderRadius)
				setBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
			} else if (bSide === 'top') {
				console.log('top')
				setSideBorder(small, setSmall, changedBorder, changedBorderRadius, 'BorderTop')
				setSideBorder(medium, setMedium, changedBorder, changedBorderRadius, 'BorderTop')
				setSideBorder(large, setLarge, changedBorder, changedBorderRadius, 'BorderTop')
				setSideBorder(xlarge, setXlarge, changedBorder, changedBorderRadius, 'BorderTop')
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
	const setSideBorder = (obj, setObj, b, br, borderSide) => {
		const temp = Object.assign({}, obj)
		temp[borderSide] = b
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
		const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`

		return hex
	}

	const allBorder = () => {
		if (large.borderTop) changeBorder(large, setLarge, 'border', 'borderTop')
		if (large.borderBottom) changeBorder(large, setLarge, 'border', 'borderBottom')
		if (large.borderLeft) changeBorder(large, setLarge, 'border', 'borderLeft')
		if (large.borderRight) changeBorder(large, setLarge, 'border', 'borderRight')

		setBSide('all')
	}
	const topBorder = () => {
		if (large.border) changeBorder(large, setLarge, 'borderTop', 'border')
		if (large.borderBottom) changeBorder(large, setLarge, 'borderTop', 'borderBottom')
		if (large.borderLeft) changeBorder(large, setLarge, 'borderTop', 'borderLeft')
		if (large.borderRight) changeBorder(large, setLarge, 'borderTop', 'borderRight')

		setBSide('top')
	}
	const bottomBorder = () => {
		if (large.border) changeBorder(large, setLarge, 'borderBottom', 'border')
		if (large.borderTop) changeBorder(large, setLarge, 'borderBottom', 'borderTop')
		if (large.borderLeft) changeBorder(large, setLarge, 'borderBottom', 'borderLeft')
		if (large.borderRight) changeBorder(large, setLarge, 'borderBottom', 'borderRight')

		setBSide('bottom')
	}
	const leftBorder = () => {
		if (large.border) changeBorder(large, setLarge, 'borderLeft', 'border')
		if (large.borderTop) changeBorder(large, setLarge, 'borderLeft', 'borderTop')
		if (large.borderBottom) changeBorder(large, setLarge, 'borderLeft', 'borderBottom')
		if (large.borderRight) changeBorder(large, setLarge, 'borderLeft', 'borderRight')

		setBSide('left')
	}
	const rightBorder = () => {
		if (large.border) changeBorder(large, setLarge, 'borderRight', 'border')
		if (large.borderTop) changeBorder(large, setLarge, 'borderRight', 'borderTop')
		if (large.borderBottom) changeBorder(large, setLarge, 'borderRight', 'borderBottom')
		if (large.borderLeft) changeBorder(large, setLarge, 'borderRight', 'borderLeft')

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

	return (
		<div className='ap borders'>
			<p className='second-heading'>APPEARANCE</p>
			<div>
				<div className='two md'>
					<label>Color: </label>
					<input id='a-bgcolor' onChange={e => setBgColor(e.target.value)} type='color' defaultValue='#ffffff' />
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
							display: showBorderSection ? 'block' : 'none'
						}}
						className='b'>
						<div className='two'>
							<div className='mds'>
								<label>Color: </label>
								<input
									id='a-b-color'
									onChange={e => {
										setBorderChanged(true)
										setBColor(e.target.value)
									}}
									type='color'
									defaultValue='#ffffff'
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
									<button onClick={allBorder}>A</button>
									<button onClick={topBorder}>T</button>
									<button onClick={bottomBorder}>B</button>
									<button onClick={leftBorder}>L</button>
									<button onClick={rightBorder}>R</button>
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
					<div
						style={{
							display: showShadowSection ? 'block' : 'none'
						}}
						className='one'>
						<div>
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
						<div>
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
						<div>
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
						<div>
							<label>C: </label>
							<input
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
