import React, { useState, useEffect, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const ClickAdvAppearance = () => {
	const { clickadv, setClickadv, showCAAP, setShowCAAP } = useContext(PropertiesContext)
	const { width, activeElement, setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)
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
		if (clickadv) {
			const bgColorInput = document.getElementById('aclickadv-bgcolor')
			const bgColorSelect = document.getElementById('bgclickadv-color-select')
			const bActiveInput = document.getElementById('aclickadv-b-active')
			const bRadiusInput = document.getElementById('aclickadv-b-radius')
			const bColorInput = document.getElementById('aclickadv-b-color')
			const bSizeInput = document.getElementById('aclickadv-b-size')
			const bTypeInput = document.getElementById('aclickadv-b-type')
			const sActiveInput = document.getElementById('aclickadv-s-active')
			const sXInput = document.getElementById('aclickadv-s-x')
			const sYInput = document.getElementById('aclickadv-s-y')
			const sBlurInput = document.getElementById('aclickadv-s-blur')
			const sColorInput = document.getElementById('aclickadv-s-color')
			const paddingXInput = document.getElementById('apclickadv-paddingXInput')
			const paddingYInput = document.getElementById('apclickadv-paddingYInput')
			const paddingXSelect = document.getElementById('apclickadv-paddingXSelect')
			const paddingYSelect = document.getElementById('apclickadv-paddingYSelect')

			bRadiusInput.value = clickadv.borderRadius ? clickadv.borderRadius.split('%')[0] : '0'

			//Default value for all borders
			if (clickadv.border) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = clickadv.border.split(' ')[2]
				bSizeInput.value = clickadv.border.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(clickadv.border.split(' ')[1])
			} else if (clickadv.borderTop) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = clickadv.borderTop.split(' ')[2]
				bSizeInput.value = clickadv.borderTop.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(clickadv.borderTop.split(' ')[1])
			} else if (clickadv.borderBottom) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = clickadv.borderBottom.split(' ')[2]
				bSizeInput.value = clickadv.borderBottom.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(clickadv.borderBottom.split(' ')[1])
			} else if (clickadv.borderLeft) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = clickadv.borderLeft.split(' ')[2]
				bSizeInput.value = clickadv.borderLeft.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(clickadv.borderLeft.split(' ')[1])
			} else if (clickadv.borderRight) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = clickadv.borderRight.split(' ')[2]
				bSizeInput.value = clickadv.borderRight.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(clickadv.borderRight.split(' ')[1])
			} else {
				bColorInput.value = '#000000'
				bSizeInput.value = '0'
				bTypeInput.selectedIndex = 0
				bActiveInput.checked = false
				setShowBorderSection(false)
			}

			//Default value for Box shadow
			if (clickadv.boxShadow) {
				sXInput.value = clickadv.boxShadow.split(' ')[0].split('p')[0]
				sYInput.value = clickadv.boxShadow.split(' ')[1].split('p')[0]
				sBlurInput.value = clickadv.boxShadow.split(' ')[2].split('p')[0]
				sColorInput.value = clickadv.boxShadow.split(' ')[3]
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

			bgColorInput.value = clickadv.backgroundColor ? clickadv.backgroundColor : '#ffffff'
			bgColorSelect.value = clickadv.backgroundColor ? clickadv.backgroundColor : 'custom'

			if (clickadv.paddingTop && clickadv.paddingBottom) {
				if (clickadv.paddingTop === clickadv.paddingBottom) {
					const p = paddingFinder(clickadv.paddingTop)
					paddingYInput.value = p[0]
					paddingYSelect.value = p[1]
				}
			} else {
				paddingYInput.value = 0
				paddingYSelect.value = 'px'
			}

			if (clickadv.paddingLeft && clickadv.paddingRight) {
				if (clickadv.paddingLeft === clickadv.paddingRight) {
					const p = paddingFinder(clickadv.paddingLeft)
					paddingXInput.value = p[0]
					paddingXSelect.value = p[1]
				}
			} else {
				paddingXInput.value = 0
				paddingXSelect.value = 'px'
			}
		}
	}, [width, activeElement, clickadv])

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
		if (clickadv) {
			let changedBgColor = ''
			if (bgColor !== 'custom') changedBgColor = bgColor

			setProperties(clickadv, setClickadv, 'backgroundColor', changedBgColor)
		}
	}, [bgColor])

	//For Box Shadow
	useEffect(() => {
		if (clickadv && shadowChanged) {
			const changedShadow = showShadowSection ? `${sX} ${sY} ${sBlur} ${sColor}` : ''

			setProperties(clickadv, setClickadv, 'boxShadow', changedShadow)

			setShadowChanged(false)
		}
	}, [showShadowSection, sX, sY, sColor, sBlur])

	//For Changing paddingX
	useEffect(() => {
		if (clickadv && paddingX !== '') {
			const ele = document.getElementById('apclickadv-paddingXSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingX}${punit}`

			setPadding(clickadv, setClickadv, 'paddingLeft', 'paddingRight', padding)
		}
	}, [paddingX, paddingXUnit])

	//For Changing paddingY
	useEffect(() => {
		if (clickadv && paddingY !== '') {
			const ele = document.getElementById('apclickadv-paddingYSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingY}${punit}`

			setPadding(clickadv, setClickadv, 'paddingTop', 'paddingBottom', padding)
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
		if (clickadv && borderChanged) {
			const changedBorder = showBorderSection ? `${bSize} ${bType} ${bColor}` : ''
			const changedBorderRadius = showBorderSection ? bRadius : ''

			if (bSide === 'all') {
				setBorder(clickadv, setClickadv, changedBorder, changedBorderRadius)
			} else if (bSide === 'top') {
				setTopBorder(clickadv, setClickadv, changedBorder, changedBorderRadius)
			} else if (bSide === 'bottom') {
				setBottomBorder(clickadv, setClickadv, changedBorder, changedBorderRadius)
			} else if (bSide === 'left') {
				setLeftBorder(clickadv, setClickadv, changedBorder, changedBorderRadius)
			} else if (bSide === 'right') {
				setRightBorder(clickadv, setClickadv, changedBorder, changedBorderRadius)
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
		if (clickadv.borderTop) {
			changeBorder(clickadv, setClickadv, 'border', 'borderTop')
		}
		if (clickadv.borderBottom) {
			changeBorder(clickadv, setClickadv, 'border', 'borderBottom')
		}
		if (clickadv.borderLeft) {
			changeBorder(clickadv, setClickadv, 'border', 'borderLeft')
		}
		if (clickadv.borderRight) {
			changeBorder(clickadv, setClickadv, 'border', 'borderRight')
		}

		setBSide('all')
	}
	const topBorder = () => {
		if (clickadv.border) {
			changeBorder(clickadv, setClickadv, 'borderTop', 'border')
		}
		if (clickadv.borderBottom) {
			changeBorder(clickadv, setClickadv, 'borderTop', 'borderBottom')
		}
		if (clickadv.borderLeft) {
			changeBorder(clickadv, setClickadv, 'borderTop', 'borderLeft')
		}
		if (clickadv.borderRight) {
			changeBorder(clickadv, setClickadv, 'borderTop', 'borderRight')
		}

		setBSide('top')
	}

	const bottomBorder = () => {
		if (clickadv.border) {
			changeBorder(clickadv, setClickadv, 'borderBottom', 'border')
		}
		if (clickadv.borderTop) {
			changeBorder(clickadv, setClickadv, 'borderBottom', 'borderTop')
		}
		if (clickadv.borderLeft) {
			changeBorder(clickadv, setClickadv, 'borderBottom', 'borderLeft')
		}
		if (clickadv.borderRight) {
			changeBorder(clickadv, setClickadv, 'borderBottom', 'borderRight')
		}

		setBSide('bottom')
	}
	const leftBorder = () => {
		if (clickadv.border) {
			changeBorder(clickadv, setClickadv, 'borderLeft', 'border')
		}
		if (clickadv.borderTop) {
			changeBorder(clickadv, setClickadv, 'borderLeft', 'borderTop')
		}
		if (clickadv.borderBottom) {
			changeBorder(clickadv, setClickadv, 'borderLeft', 'borderBottom')
		}
		if (clickadv.borderRight) {
			changeBorder(clickadv, setClickadv, 'borderLeft', 'borderRight')
		}

		setBSide('left')
	}
	const rightBorder = () => {
		if (clickadv.border) {
			changeBorder(clickadv, setClickadv, 'borderRight', 'border')
		}
		if (clickadv.borderTop) {
			changeBorder(clickadv, setClickadv, 'borderRight', 'borderTop')
		}
		if (clickadv.borderBottom) {
			changeBorder(clickadv, setClickadv, 'borderRight', 'borderBottom')
		}
		if (clickadv.borderLeft) {
			changeBorder(clickadv, setClickadv, 'borderRight', 'borderLeft')
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
				id='bgclickadv-color-select'
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
			<p className='second-heading' onClick={() => setShowCAAP(!showCAAP)}>
				APPEARANCE <span style={{ display: showCAAP ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showCAAP ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: showCAAP ? 'grid' : 'none' }}>
				<div className='two md'>
					<label style={{ marginTop: '10px' }}>Color: </label>
					{showCustomBgColorOptions()}
					<input
						disabled={!customBgColor}
						id='aclickadv-bgcolor'
						onChange={e => setBgColor(e.target.value)}
						type='color'
						defaultValue='#ffffff'
					/>
				</div>
				<div className='padding md'>
					<label>InnerX space: </label>
					<input
						id='apclickadv-paddingXInput'
						onChange={e => {
							if (e.target.value < 0) {
								setMsgBoxMsg("Negative value won't work for InnerX")
								setShowMsgBox(true)
							} else if (e.target.value >= 0) {
								setPaddingX(e.target.value)
							}
						}}
						type='number'
						defaultValue='0'
						min='0'
					/>
					<select id='apclickadv-paddingXSelect' onChange={e => setPaddingXUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vw'>VW</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='padding md'>
					<label>InnerY space: </label>
					<input
						id='apclickadv-paddingYInput'
						onChange={e => {
							if (e.target.value < 0) {
								setMsgBoxMsg("Negative value won't work for InnerY")
								setShowMsgBox(true)
							} else if (e.target.value >= 0) {
								setPaddingY(e.target.value)
							}
						}}
						type='number'
						defaultValue='0'
						min='0'
					/>
					<select id='apclickadv-paddingYSelect' onChange={e => setPaddingYUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='ap-borders md'>
					<input
						id='aclickadv-b-active'
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
									id='aclickadv-b-color'
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
									id='aclickadv-b-size'
									onChange={e => {
										if (e.target.value < 0) {
											setMsgBoxMsg('Border size can not be negative')
											setShowMsgBox(true)
										} else if (e.target.value >= 0) {
											setBorderChanged(true)
											setBSize(`${e.target.value}px`)
										}
									}}
									type='number'
									defaultValue='1'
									min='0'
								/>
							</div>
							<div className='mds'>
								<label>Radius: </label>
								<input
									id='aclickadv-b-radius'
									style={{ width: '100%' }}
									onChange={e => {
										if (e.target.value < 0 || e.target.value > 100) {
											setMsgBoxMsg('Border radius can only sets between 0 to 100')
											setShowMsgBox(true)
										} else if (e.target.value >= 0) {
											setBorderChanged(true)
											setBRdius(`${e.target.value}%`)
										}
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
									id='aclickadv-b-type'
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
						id='aclickadv-s-active'
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
									id='aclickadv-s-x'
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
									id='aclickadv-s-y'
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
									id='aclickadv-s-blur'
									onChange={e => {
										if (e.target.value < 0) {
											setMsgBoxMsg('Shadow blur can not be negative')
											setShowMsgBox(true)
										} else if (e.target.value >= 0) {
											setShadowChanged(true)
											setSBlur(e.target.value + 'px')
										}
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
								id='aclickadv-s-color'
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

export default ClickAdvAppearance
