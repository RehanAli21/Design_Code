import React, { useState, useEffect, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const HoverAdvAppearance = () => {
	const { hoveradv, setHoveradv, showHAAP, setShowHAAP } = useContext(PropertiesContext)
	const { width, activeElement } = useContext(PageContext)
	const { colors } = useContext(TemplateContext)

	const [showBorderSection, setShowBorderSection] = useState(false)
	const [showShadowSection, setShowShadowSection] = useState(false)
	const [bgColor, setBgColor] = useState(`#ffffff`)
	const [customBgColor, setCustomBgColor] = useState(true)
	const [paddingX, setPaddingX] = useState('')
	const [paddingXUnit, setPaddingXUnit] = useState('px')
	const [paddingY, setPaddingY] = useState('')
	const [paddingYUnit, setPaddingYUnit] = useState('px')
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
		if (hoveradv) {
			const bgColorInput = document.getElementById('ahoveradv-bgcolor')
			const bgColorSelect = document.getElementById('bghoveradv-color-select')
			const bActiveInput = document.getElementById('ahovereadv-b-active')
			const bRadiusInput = document.getElementById('ahoveradv-b-radius')
			const bColorInput = document.getElementById('ahoveradv-b-color')
			const bSizeInput = document.getElementById('ahoveradv-b-size')
			const bTypeInput = document.getElementById('ahoveradv-b-type')
			const sActiveInput = document.getElementById('ahoveradv-s-active')
			const sXInput = document.getElementById('ahoveradv-s-x')
			const sYInput = document.getElementById('ahoveradv-s-y')
			const sBlurInput = document.getElementById('ahoveradv-s-blur')
			const sColorInput = document.getElementById('ahoveradv-s-color')
			const paddingXInput = document.getElementById('aphoveradv-paddingXInput')
			const paddingYInput = document.getElementById('aphoveradv-paddingYInput')
			const paddingXSelect = document.getElementById('aphoveradv-paddingXSelect')
			const paddingYSelect = document.getElementById('aphoveradv-paddingYSelect')

			bRadiusInput.value = hoveradv.borderRadius ? hoveradv.borderRadius.split('%')[0] : '0'

			//Default value for all borders
			if (hoveradv.border) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hoveradv.border.split(' ')[2]
				bSizeInput.value = hoveradv.border.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hoveradv.border.split(' ')[1])
			} else if (hoveradv.borderTop) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hoveradv.borderTop.split(' ')[2]
				bSizeInput.value = hoveradv.borderTop.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hoveradv.borderTop.split(' ')[1])
			} else if (hoveradv.borderBottom) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hoveradv.borderBottom.split(' ')[2]
				bSizeInput.value = hoveradv.borderBottom.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hoveradv.borderBottom.split(' ')[1])
			} else if (hoveradv.borderLeft) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hoveradv.borderLeft.split(' ')[2]
				bSizeInput.value = hoveradv.borderLeft.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hoveradv.borderLeft.split(' ')[1])
			} else if (hoveradv.borderRight) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hoveradv.borderRight.split(' ')[2]
				bSizeInput.value = hoveradv.borderRight.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hoveradv.borderRight.split(' ')[1])
			} else {
				bColorInput.value = '#000000'
				bSizeInput.value = '0'
				bTypeInput.selectedIndex = 0
				bActiveInput.checked = false
				setShowBorderSection(false)
			}

			//Default value for Box shadow
			if (hoveradv.boxShadow) {
				sXInput.value = hoveradv.boxShadow.split(' ')[0].split('p')[0]
				sYInput.value = hoveradv.boxShadow.split(' ')[1].split('p')[0]
				sBlurInput.value = hoveradv.boxShadow.split(' ')[2].split('p')[0]
				sColorInput.value = hoveradv.boxShadow.split(' ')[3]
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

			bgColorInput.value = hoveradv.backgroundColor ? hoveradv.backgroundColor : '#ffffff'
			bgColorSelect.value = hoveradv.backgroundColor ? hoveradv.backgroundColor : 'custom'

			if (hoveradv.paddingTop && hoveradv.paddingBottom) {
				if (hoveradv.paddingTop === hoveradv.paddingBottom) {
					const p = paddingFinder(hoveradv.paddingTop)
					paddingYInput.value = p[0]
					paddingYSelect.value = p[1]
				}
			} else {
				paddingYInput.value = 0
				paddingYSelect.value = 'px'
			}

			if (hoveradv.paddingLeft && hoveradv.paddingRight) {
				if (hoveradv.paddingLeft === hoveradv.paddingRight) {
					const p = paddingFinder(hoveradv.paddingLeft)
					paddingXInput.value = p[0]
					paddingXSelect.value = p[1]
				}
			} else {
				paddingXInput.value = 0
				paddingXSelect.value = 'px'
			}
		}
	}, [width, activeElement, hoveradv])

	const borderTypeIndex = s => (s === 'solid' ? 0 : s === 'inset' ? 1 : s === 'outset' ? 2 : 3)

	const paddingFinder = s =>
		s.search('px') !== -1
			? [s.split('p')[0], 'px']
			: s.search('%') !== -1
			? [s.split('%')[0], '%']
			: s.search('vh') !== -1
			? [s.split('v')[0], 'vh']
			: s.search('vw') !== -1
			? [s.split('v')[0], 'vw']
			: s.search('em') !== -1
			? [s.split('e')[0], 'em']
			: ['0', 'px']

	//FOr background color and opacity
	useEffect(() => {
		if (hoveradv) {
			let changedBgColor = ''
			if (bgColor !== 'custom') changedBgColor = bgColor

			setProperties(hoveradv, setHoveradv, 'backgroundColor', changedBgColor)
		}
	}, [bgColor])

	//For Box Shadow
	useEffect(() => {
		if (hoveradv && shadowChanged) {
			const changedShadow = showShadowSection ? `${sX} ${sY} ${sBlur} ${sColor}` : ''

			setProperties(hoveradv, setHoveradv, 'boxShadow', changedShadow)

			setShadowChanged(false)
		}
	}, [showShadowSection, sX, sY, sColor, sBlur])

	//For Changing paddingX
	useEffect(() => {
		if (hoveradv && paddingX !== '') {
			const ele = document.getElementById('aphoveradv-paddingXSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingX}${punit}`

			setPadding(hoveradv, setHoveradv, 'paddingLeft', 'paddingRight', padding)
		}
	}, [paddingX, paddingXUnit])

	//For Changing paddingY
	useEffect(() => {
		if (hoveradv && paddingY !== '') {
			const ele = document.getElementById('aphoveradv-paddingYSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingY}${punit}`

			setPadding(hoveradv, setHoveradv, 'paddingTop', 'paddingBottom', padding)
		}
	}, [paddingY, paddingYUnit])

	const setPadding = (obj, setObj, p1, p2, property) => {
		const temp = Object.assign({}, obj)
		temp[p1] = property
		temp[p2] = property
		setObj(temp)
	}

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	//For changing Border
	useEffect(() => {
		if (hoveradv && borderChanged) {
			const changedBorder = showBorderSection ? `${bSize} ${bType} ${bColor}` : ''
			const changedBorderRadius = showBorderSection ? bRadius : ''

			if (bSide === 'all') {
				setBorder(hoveradv, setHoveradv, changedBorder, changedBorderRadius)
			} else if (bSide === 'top') {
				setTopBorder(hoveradv, setHoveradv, changedBorder, changedBorderRadius)
			} else if (bSide === 'bottom') {
				setBottomBorder(hoveradv, setHoveradv, changedBorder, changedBorderRadius)
			} else if (bSide === 'left') {
				setLeftBorder(hoveradv, setHoveradv, changedBorder, changedBorderRadius)
			} else if (bSide === 'right') {
				setRightBorder(hoveradv, setHoveradv, changedBorder, changedBorderRadius)
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

	const allBorder = () => {
		if (hoveradv.borderTop) {
			changeBorder(hoveradv, setHoveradv, 'border', 'borderTop')
		}
		if (hoveradv.borderBottom) {
			changeBorder(hoveradv, setHoveradv, 'border', 'borderBottom')
		}
		if (hoveradv.borderLeft) {
			changeBorder(hoveradv, setHoveradv, 'border', 'borderLeft')
		}
		if (hoveradv.borderRight) {
			changeBorder(hoveradv, setHoveradv, 'border', 'borderRight')
		}

		setBSide('all')
	}
	const topBorder = () => {
		if (hoveradv.border) {
			changeBorder(hoveradv, setHoveradv, 'borderTop', 'border')
		}
		if (hoveradv.borderBottom) {
			changeBorder(hoveradv, setHoveradv, 'borderTop', 'borderBottom')
		}
		if (hoveradv.borderLeft) {
			changeBorder(hoveradv, setHoveradv, 'borderTop', 'borderLeft')
		}
		if (hoveradv.borderRight) {
			changeBorder(hoveradv, setHoveradv, 'borderTop', 'borderRight')
		}

		setBSide('top')
	}

	const bottomBorder = () => {
		if (hoveradv.border) {
			changeBorder(hoveradv, setHoveradv, 'borderBottom', 'border')
		}
		if (hoveradv.borderTop) {
			changeBorder(hoveradv, setHoveradv, 'borderBottom', 'borderTop')
		}
		if (hoveradv.borderLeft) {
			changeBorder(hoveradv, setHoveradv, 'borderBottom', 'borderLeft')
		}
		if (hoveradv.borderRight) {
			changeBorder(hoveradv, setHoveradv, 'borderBottom', 'borderRight')
		}

		setBSide('bottom')
	}
	const leftBorder = () => {
		if (hoveradv.border) {
			changeBorder(hoveradv, setHoveradv, 'borderLeft', 'border')
		}
		if (hoveradv.borderTop) {
			changeBorder(hoveradv, setHoveradv, 'borderLeft', 'borderTop')
		}
		if (hoveradv.borderBottom) {
			changeBorder(hoveradv, setHoveradv, 'borderLeft', 'borderBottom')
		}
		if (hoveradv.borderRight) {
			changeBorder(hoveradv, setHoveradv, 'borderLeft', 'borderRight')
		}

		setBSide('left')
	}
	const rightBorder = () => {
		if (hoveradv.border) {
			changeBorder(hoveradv, setHoveradv, 'borderRight', 'border')
		}
		if (hoveradv.borderTop) {
			changeBorder(hoveradv, setHoveradv, 'borderRight', 'borderTop')
		}
		if (hoveradv.borderBottom) {
			changeBorder(hoveradv, setHoveradv, 'borderRight', 'borderBottom')
		}
		if (hoveradv.borderLeft) {
			changeBorder(hoveradv, setHoveradv, 'borderRight', 'borderLeft')
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
		temp.push(
			<option key='transparent' value='rgba(0,0,0,0)'>
				Transparent
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
				id='bghoveradv-color-select'
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
		<div className='ap borders btn-specific'>
			<p className='second-heading' onClick={() => setShowHAAP(!showHAAP)}>
				APPEARANCE <span style={{ display: showHAAP ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showHAAP ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: showHAAP ? 'grid' : 'none' }}>
				<div className='two md'>
					<label style={{ marginTop: '10px' }}>Color: </label>
					{showCustomBgColorOptions()}
					<input
						disabled={!customBgColor}
						id='ahoveradv-bgcolor'
						onChange={e => setBgColor(e.target.value)}
						type='color'
						defaultValue='#ffffff'
					/>
				</div>
				<div className='padding md'>
					<label>InnerX space: </label>
					<input
						id='aphoveradv-paddingXInput'
						onChange={e => setPaddingX(e.target.value)}
						type='number'
						defaultValue='0'
						min='0'
					/>
					<select id='aphoveradv-paddingXSelect' onChange={e => setPaddingXUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vw'>VW</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='padding md'>
					<label>InnerY space: </label>
					<input
						id='aphoveradv-paddingYInput'
						onChange={e => setPaddingY(e.target.value)}
						type='number'
						defaultValue='0'
						min='0'
					/>
					<select id='aphoveradv-paddingYSelect' onChange={e => setPaddingYUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='ap-borders md'>
					<input
						id='ahovereadv-b-active'
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
									id='ahoveradv-b-color'
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
									id='ahoveradv-b-size'
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
									id='ahoveradv-b-radius'
									style={{ width: '100%' }}
									onChange={e => {
										setBorderChanged(true)
										setBRdius(`${e.target.value}%`)
									}}
									type='number'
									defaultValue='1'
									min='0'
									max='100'
								/>
							</div>
							<div className='mds'>
								<label>Type: </label>
								<select
									id='ahoveradv-b-type'
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
						id='ahoveradv-s-active'
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
									id='ahoveradv-s-x'
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
									id='ahoveradv-s-y'
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
									id='ahoveradv-s-blur'
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
								id='ahoveradv-s-color'
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

export default HoverAdvAppearance
