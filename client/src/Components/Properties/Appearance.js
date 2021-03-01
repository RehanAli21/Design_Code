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
	activeElement
}) => {
	const [showBorderSection, setShowBorderSection] = useState(false)
	const [showShadowSection, setShowShadowSection] = useState(false)
	const [opacity, setOpacity] = useState(1)
	const [bgColor, setBgColor] = useState(`rgba(255, 255, 255, 1)`)
	const [bColor, setBColor] = useState('rgb(70,70,70)')
	const [bSize, setBSize] = useState('1px')
	const [bRadius, setBRdius] = useState('1px')
	const [bType, setBtype] = useState('solid')
	const [sX, setSX] = useState('0px')
	const [sY, setSY] = useState('0px')
	const [sColor, setSColor] = useState('rgba(0, 0, 0, 1)')
	const [sBlur, setSBlur] = useState('0px')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const bgColorInput = document.getElementById('a-bgcolor')
			const bRadiusInput = document.getElementById('a-b-radius')

			if (width < 540) {
				bgColorInput.value = small.backgroundColor
					? RGBToHex(small.backgroundColor)
					: '#ffffff'
				bRadiusInput.value = small.borderRadius
					? small.borderRadius.split('p')[0]
					: '0'
			} else if (width < 720) {
				bgColorInput.value = medium.backgroundColor
					? RGBToHex(medium.backgroundColor)
					: '#ffffff'
				bRadiusInput.value = medium.borderRadius
					? medium.borderRadius.split('p')[0]
					: '0'
			} else if (width < 970) {
				bgColorInput.value = large.backgroundColor
					? RGBToHex(large.backgroundColor)
					: '#ffffff'
				bRadiusInput.value = large.borderRadius
					? large.borderRadius.split('p')[0]
					: '0'
			} else {
				bgColorInput.value = xlarge.backgroundColor
					? RGBToHex(xlarge.backgroundColor)
					: '#ffffff'
				bRadiusInput.value = xlarge.borderRadius
					? xlarge.borderRadius.split('p')[0]
					: '0'
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedBgColor = hexToRGB(bgColor, opacity)
			if (width < 540) {
				setProperties(
					small,
					setSmall,
					'backgroundColor',
					changedBgColor
				)
			} else if (width < 720) {
				setProperties(
					medium,
					setMedium,
					'backgroundColor',
					changedBgColor
				)
			} else if (width < 970) {
				setProperties(
					large,
					setLarge,
					'backgroundColor',
					changedBgColor
				)
			} else {
				setProperties(
					xlarge,
					setXlarge,
					'backgroundColor',
					changedBgColor
				)
			}
		}
	}, [bgColor, opacity])

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedShadow = showShadowSection
				? `${sX} ${sY} ${sBlur} ${hexToRGB(sColor, 1)}`
				: ''
			if (width < 540) {
				setProperties(small, setSmall, 'boxShadow', changedShadow)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'boxShadow', changedShadow)
			} else if (width < 970) {
				setProperties(large, setLarge, 'boxShadow', changedShadow)
			} else {
				setProperties(xlarge, setXlarge, 'boxShadow', changedShadow)
			}
		}
	}, [showShadowSection, sX, sY, sColor, sBlur])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedBorder = showBorderSection
				? `${bSize} ${bType} ${hexToRGB(bColor, 1)}`
				: ''
			const changedBorderRadius = showBorderSection ? bRadius : ''

			if (width < 540) {
				setBorder(small, setSmall, changedBorder, changedBorderRadius)
			} else if (width < 720) {
				setBorder(medium, setMedium, changedBorder, changedBorderRadius)
			} else if (width < 970) {
				setBorder(large, setLarge, changedBorder, changedBorderRadius)
			} else {
				setBorder(xlarge, setXlarge, changedBorder, changedBorderRadius)
			}
		}
	}, [showBorderSection, bSize, bType, bColor, bRadius])

	const setBorder = (obj, setObj, b, br) => {
		const temp = Object.assign({}, obj)
		temp.border = b
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
		const hex = `#${(
			(1 << 24) +
			(parseInt(rgba[0]) << 16) +
			(parseInt(rgba[1]) << 8) +
			parseInt(rgba[2])
		)
			.toString(16)
			.slice(1)}`

		return hex
	}

	return (
		<div className='ap borders'>
			<p className='second-heading'>APPEARANCE</p>
			<div>
				<div className='two md'>
					<label>Color: </label>
					<input
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
				<div className='ap-borders md'>
					<input
						type='checkbox'
						onChange={() =>
							setShowBorderSection(!showBorderSection)
						}
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
									onChange={e => setBColor(e.target.value)}
									type='color'
									defaultValue='#464646'
								/>
							</div>
							<div className='mds'>
								<label>Size: </label>
								<input
									id='a-b-size'
									onChange={e =>
										setBSize(`${e.target.value}px`)
									}
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
									onChange={e =>
										setBRdius(`${e.target.value}px`)
									}
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
									onChange={e => setBtype(e.target.value)}>
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
						type='checkbox'
						onChange={() =>
							setShowShadowSection(!showShadowSection)
						}
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
								onChange={e => setSX(e.target.value + 'px')}
								type='number'
								defaultValue='0'
							/>
						</div>
						<div>
							<label>Y: </label>
							<input
								onChange={e => setSY(e.target.value + 'px')}
								type='number'
								defaultValue='0'
							/>
						</div>
						<div>
							<label>B: </label>
							<input
								onChange={e => setSBlur(e.target.value + 'px')}
								type='number'
								min='0'
								defaultValue='0'
							/>
						</div>
						<div>
							<label>C: </label>
							<input
								onChange={e => setSColor(e.target.value)}
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
