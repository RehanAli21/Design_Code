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
			console.log(changedShadow)
			if (width < 540) {
				setProperties(small, setSmall, 'boxShadow', changedShadow)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'boxShadow', changedShadow)
				if (!changedLarge) setProperties(large, setLarge, 'boxShadow', changedShadow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'boxShadow', changedShadow)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'boxShadow', changedShadow)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'boxShadow', changedShadow)
				if (!changedLarge) setProperties(large, setLarge, 'boxShadow', changedShadow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'boxShadow', changedShadow)
			} else if (width < 970) {
				setProperties(large, setLarge, 'boxShadow', changedShadow)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'boxShadow', changedShadow)
				if (!changedMedium) setProperties(medium, setMedium, 'boxShadow', changedShadow)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'boxShadow', changedShadow)
			} else {
				setProperties(xlarge, setXlarge, 'boxShadow', changedShadow)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'boxShadow', changedShadow)
				if (!changedMedium) setProperties(medium, setMedium, 'boxShadow', changedShadow)
				if (!changedLarge) setProperties(large, setLarge, 'boxShadow', changedShadow)
			}

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
				if (width < 540) {
					setBorder(small, setSmall, changedBorder, changedBorderRadius)
					setChangedSmall(true)
					if (!changedMedium) setBorder(medium, setMedium, changedBorder, changedBorderRadius)
					if (!changedLarge) setBorder(large, setLarge, changedBorder, changedBorderRadius)
					if (!changedXlarge) setBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
				} else if (width < 720) {
					setBorder(medium, setMedium, changedBorder, changedBorderRadius)
					setChangedMedium(true)
					if (!changedSmall) setBorder(small, setSmall, changedBorder, changedBorderRadius)
					if (!changedLarge) setBorder(large, setLarge, changedBorder, changedBorderRadius)
					if (!changedXlarge) setBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
				} else if (width < 970) {
					setBorder(large, setLarge, changedBorder, changedBorderRadius)
					setChangedLarge(true)
					if (!changedSmall) setBorder(small, setSmall, changedBorder, changedBorderRadius)
					if (!changedMedium) setBorder(medium, setMedium, changedBorder, changedBorderRadius)
					if (!changedXlarge) setBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
				} else {
					setBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
					setChangedXlarge(true)
					if (!changedSmall) setBorder(small, setSmall, changedBorder, changedBorderRadius)
					if (!changedMedium) setBorder(medium, setMedium, changedBorder, changedBorderRadius)
					if (!changedLarge) setBorder(large, setLarge, changedBorder, changedBorderRadius)
				}
			} else {
				if (width < 540) {
					setSideBorder(small, setSmall, changedBorder, changedBorderRadius, `border${bSide}`)
					setChangedSmall(true)
					if (!changedMedium) {
						setBorder(medium, setMedium, '', changedBorderRadius)
						setSideBorder(medium, setMedium, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedLarge) {
						setBorder(large, setLarge, '', changedBorderRadius)
						setSideBorder(large, setLarge, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedXlarge) {
						setBorder(xlarge, setXlarge, '', changedBorderRadius)
						setSideBorder(xlarge, setXlarge, changedBorder, changedBorderRadius, `border${bSide}`)
					}
				} else if (width < 720) {
					setSideBorder(medium, setMedium, changedBorder, changedBorderRadius, `border${bSide}`)
					setChangedMedium(true)
					if (!changedSmall) {
						setBorder(small, setSmall, '', changedBorderRadius)
						setSideBorder(small, setSmall, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedLarge) {
						setBorder(large, setLarge, '', changedBorderRadius)
						setSideBorder(large, setLarge, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedXlarge) {
						setBorder(xlarge, setXlarge, '', changedBorderRadius)
						setSideBorder(xlarge, setXlarge, changedBorder, changedBorderRadius, `border${bSide}`)
					}
				} else if (width < 970) {
					setSideBorder(large, setLarge, changedBorder, changedBorderRadius, `border${bSide}`)
					setChangedLarge(true)
					if (!changedSmall) {
						setBorder(small, setSmall, '', changedBorderRadius)
						setSideBorder(small, setSmall, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedMedium) {
						setBorder(medium, setMedium, '', changedBorderRadius)
						setSideBorder(medium, setMedium, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedXlarge) {
						setBorder(xlarge, setXlarge, '', changedBorderRadius)
						setSideBorder(xlarge, setXlarge, changedBorder, changedBorderRadius, `border${bSide}`)
					}
				} else {
					setSideBorder(xlarge, setXlarge, changedBorder, changedBorderRadius, `border${bSide}`)
					setChangedXlarge(true)
					if (!changedSmall) {
						setBorder(small, setSmall, '', changedBorderRadius)
						setSideBorder(small, setSmall, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedMedium) {
						setBorder(medium, setMedium, '', changedBorderRadius)
						setSideBorder(medium, setMedium, changedBorder, changedBorderRadius, `border${bSide}`)
					}
					if (!changedLarge) {
						setBorder(large, setLarge, '', changedBorderRadius)
						setSideBorder(large, setLarge, changedBorder, changedBorderRadius, `border${bSide}`)
					}
				}
			}

			setBorderChanged(false)
		}
	}, [showBorderSection, bSize, bType, bColor, bRadius, bSide])

	const setBorder = (obj, setObj, b, br) => {
		const temp = Object.assign({}, obj)
		temp.border = b
		temp.borderRadius = br
		setObj(temp)
	}

	const setSideBorder = (obj, setObj, b, br, side) => {
		const temp = Object.assign({}, obj)
		temp[side] = b
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
								<label>Sides: </label>
								<select
									id='a-b-side'
									onChange={e => {
										setBorderChanged(true)
										setBSide(e.target.value.toLowerCase())
									}}>
									<option>All</option>
									<option>Top</option>
									<option>Bottom</option>
									<option>Left</option>
									<option>Right</option>
								</select>
							</div>
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
