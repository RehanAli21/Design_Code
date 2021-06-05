import React, { useState, useEffect, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const Appearance = () => {
	const { hover, setHover, apHoverProperties, setApHoverProperties } = useContext(PropertiesContext)
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
		if (hover) {
			const bgColorInput = document.getElementById('ahover-bgcolor')
			const bgColorSelect = document.getElementById('bghover-color-select')
			const bActiveInput = document.getElementById('ahover-b-active')
			const bRadiusInput = document.getElementById('ahover-b-radius')
			const bColorInput = document.getElementById('ahover-b-color')
			const bSizeInput = document.getElementById('ahover-b-size')
			const bTypeInput = document.getElementById('ahover-b-type')
			const sActiveInput = document.getElementById('ahover-s-active')
			const sXInput = document.getElementById('ahover-s-x')
			const sYInput = document.getElementById('ahover-s-y')
			const sBlurInput = document.getElementById('ahover-s-blur')
			const sColorInput = document.getElementById('ahover-s-color')
			const paddingXInput = document.getElementById('aphover-paddingXInput')
			const paddingYInput = document.getElementById('aphover-paddingYInput')
			const paddingXSelect = document.getElementById('aphover-paddingXSelect')
			const paddingYSelect = document.getElementById('aphover-paddingYSelect')

			bRadiusInput.value = hover.borderRadius ? hover.borderRadius.split('%')[0] : '0'

			//Default value for all borders
			if (hover.border) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hover.border.split(' ')[2]
				bSizeInput.value = hover.border.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hover.border.split(' ')[1])
			} else if (hover.borderTop) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hover.borderTop.split(' ')[2]
				bSizeInput.value = hover.borderTop.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hover.borderTop.split(' ')[1])
			} else if (hover.borderBottom) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hover.borderBottom.split(' ')[2]
				bSizeInput.value = hover.borderBottom.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hover.borderBottom.split(' ')[1])
			} else if (hover.borderLeft) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hover.borderLeft.split(' ')[2]
				bSizeInput.value = hover.borderLeft.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hover.borderLeft.split(' ')[1])
			} else if (hover.borderRight) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = hover.borderRight.split(' ')[2]
				bSizeInput.value = hover.borderRight.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(hover.borderRight.split(' ')[1])
			} else {
				bColorInput.value = '#000000'
				bSizeInput.value = '0'
				bTypeInput.selectedIndex = 0
				bActiveInput.checked = false
				setShowBorderSection(false)
			}

			//Default value for Box shadow
			if (hover.boxShadow) {
				sXInput.value = hover.boxShadow.split(' ')[0].split('p')[0]
				sYInput.value = hover.boxShadow.split(' ')[1].split('p')[0]
				sBlurInput.value = hover.boxShadow.split(' ')[2].split('p')[0]
				sColorInput.value = hover.boxShadow.split(' ')[3]
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

			bgColorInput.value = hover.backgroundColor ? hover.backgroundColor : '#ffffff'
			bgColorSelect.value = hover.backgroundColor ? hover.backgroundColor : 'custom'

			if (hover.paddingTop && hover.paddingBottom) {
				if (hover.paddingTop === hover.paddingBottom) {
					const p = paddingFinder(hover.paddingTop)
					paddingYInput.value = p[0]
					paddingYSelect.value = p[1]
				}
			} else {
				paddingYInput.value = 0
				paddingYSelect.value = 'px'
			}

			if (hover.paddingLeft && hover.paddingRight) {
				if (hover.paddingLeft === hover.paddingRight) {
					const p = paddingFinder(hover.paddingLeft)
					paddingXInput.value = p[0]
					paddingXSelect.value = p[1]
				}
			} else {
				paddingXInput.value = 0
				paddingXSelect.value = 'px'
			}
		}
	}, [width, activeElement, hover])

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
		if (hover) {
			let changedBgColor = ''
			if (bgColor !== 'custom') changedBgColor = bgColor

			setProperties(hover, setHover, 'backgroundColor', changedBgColor)
		}
	}, [bgColor])

	//For Box Shadow
	useEffect(() => {
		if (hover && shadowChanged) {
			const changedShadow = showShadowSection ? `${sX} ${sY} ${sBlur} ${sColor}` : ''

			setProperties(hover, setHover, 'boxShadow', changedShadow)

			setShadowChanged(false)
		}
	}, [showShadowSection, sX, sY, sColor, sBlur])

	//For Changing paddingX
	useEffect(() => {
		if (hover && paddingX !== '') {
			const ele = document.getElementById('aphover-paddingXSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingX}${punit}`

			setPadding(hover, setHover, 'paddingLeft', 'paddingRight', padding)
		}
	}, [paddingX, paddingXUnit])

	//For Changing paddingY
	useEffect(() => {
		if (hover && paddingY !== '') {
			const ele = document.getElementById('aphover-paddingYSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingY}${punit}`

			setPadding(hover, setHover, 'paddingTop', 'paddingBottom', padding)
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
		if (hover && borderChanged) {
			const changedBorder = showBorderSection ? `${bSize} ${bType} ${bColor}` : ''
			const changedBorderRadius = showBorderSection ? bRadius : ''

			if (bSide === 'all') {
				setBorder(hover, setHover, changedBorder, changedBorderRadius)
			} else if (bSide === 'top') {
				setTopBorder(hover, setHover, changedBorder, changedBorderRadius)
			} else if (bSide === 'bottom') {
				setBottomBorder(hover, setHover, changedBorder, changedBorderRadius)
			} else if (bSide === 'left') {
				setLeftBorder(hover, setHover, changedBorder, changedBorderRadius)
			} else if (bSide === 'right') {
				setRightBorder(hover, setHover, changedBorder, changedBorderRadius)
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
		if (hover.borderTop) {
			changeBorder(hover, setHover, 'border', 'borderTop')
		}
		if (hover.borderBottom) {
			changeBorder(hover, setHover, 'border', 'borderBottom')
		}
		if (hover.borderLeft) {
			changeBorder(hover, setHover, 'border', 'borderLeft')
		}
		if (hover.borderRight) {
			changeBorder(hover, setHover, 'border', 'borderRight')
		}

		setBSide('all')
	}
	const topBorder = () => {
		if (hover.border) {
			changeBorder(hover, setHover, 'borderTop', 'border')
		}
		if (hover.borderBottom) {
			changeBorder(hover, setHover, 'borderTop', 'borderBottom')
		}
		if (hover.borderLeft) {
			changeBorder(hover, setHover, 'borderTop', 'borderLeft')
		}
		if (hover.borderRight) {
			changeBorder(hover, setHover, 'borderTop', 'borderRight')
		}

		setBSide('top')
	}

	const bottomBorder = () => {
		if (hover.border) {
			changeBorder(hover, setHover, 'borderBottom', 'border')
		}
		if (hover.borderTop) {
			changeBorder(hover, setHover, 'borderBottom', 'borderTop')
		}
		if (hover.borderLeft) {
			changeBorder(hover, setHover, 'borderBottom', 'borderLeft')
		}
		if (hover.borderRight) {
			changeBorder(hover, setHover, 'borderBottom', 'borderRight')
		}

		setBSide('bottom')
	}
	const leftBorder = () => {
		if (hover.border) {
			changeBorder(hover, setHover, 'borderLeft', 'border')
		}
		if (hover.borderTop) {
			changeBorder(hover, setHover, 'borderLeft', 'borderTop')
		}
		if (hover.borderBottom) {
			changeBorder(hover, setHover, 'borderLeft', 'borderBottom')
		}
		if (hover.borderRight) {
			changeBorder(hover, setHover, 'borderLeft', 'borderRight')
		}

		setBSide('left')
	}
	const rightBorder = () => {
		if (hover.border) {
			changeBorder(hover, setHover, 'borderRight', 'border')
		}
		if (hover.borderTop) {
			changeBorder(hover, setHover, 'borderRight', 'borderTop')
		}
		if (hover.borderBottom) {
			changeBorder(hover, setHover, 'borderRight', 'borderBottom')
		}
		if (hover.borderLeft) {
			changeBorder(hover, setHover, 'borderRight', 'borderLeft')
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
				id='bghover-color-select'
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
			<p className='second-heading' onClick={() => setApHoverProperties(!apHoverProperties)}>
				APPEARANCE <span style={{ display: apHoverProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: apHoverProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: apHoverProperties ? 'grid' : 'none' }}>
				<div className='two md'>
					<label style={{ marginTop: '10px' }}>Color: </label>
					{showCustomBgColorOptions()}
					<input
						disabled={!customBgColor}
						id='ahover-bgcolor'
						onChange={e => setBgColor(e.target.value)}
						type='color'
						defaultValue='#ffffff'
					/>
				</div>
				<div className='padding md'>
					<label>
						<span className='bi-distribute-horizontal icon-n-s'></span> Inner space:
					</label>
					<input
						id='aphover-paddingXInput'
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
					<select id='aphover-paddingXSelect' onChange={e => setPaddingXUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vw'>VW</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='padding md'>
					<label>
						<span className='bi-distribute-vertical icon-n-s'></span> Inner space:
					</label>
					<input
						id='aphover-paddingYInput'
						onChange={e => {
							if (e.target.value < 0) {
								setMsgBoxMsg("Negative value won't work for InnerY")
								setShowMsgBox(true)
							} else if (e.target.value >= 0) {
								setPaddingX(e.target.value)
							}
						}}
						type='number'
						defaultValue='0'
						min='0'
					/>
					<select id='aphover-paddingYSelect' onChange={e => setPaddingYUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='ap-borders md'>
					<input
						id='ahover-b-active'
						type='checkbox'
						onChange={e => {
							setBorderChanged(true)
							setShowBorderSection(e.target.checked)
						}}
					/>
					<span className='bi-border-all'> Border</span>
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
									id='ahover-b-color'
									onChange={e => {
										setBorderChanged(true)
										setBColor(e.target.value)
									}}
									type='color'
									defaultValue='#000000'
								/>
							</div>
							<div className='mds'>
								<label>
									<span className='bi-border-width'></span> Size:
								</label>
								<input
									id='ahover-b-size'
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
								<label>
									<span className='bi-app'></span> Radius:
								</label>
								<input
									id='ahover-b-radius'
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
								<label>
									<span className='bi-border-style'></span> Styles:
								</label>
								<select
									id='ahover-b-type'
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
										<span className={'bi-border-outer ' + (bSide === 'all' ? 'activespan' : null)}></span>
									</button>
									<button className={bSide === 'top' ? 'bb' : ''} onClick={topBorder}>
										<span className={'bi-border-top ' + (bSide === 'top' ? 'activespan' : null)}></span>
									</button>
									<button className={bSide === 'bottom' ? 'bb' : ''} onClick={bottomBorder}>
										<span className={'bi-border-bottom ' + (bSide === 'bottom' ? 'activespan' : null)}></span>
									</button>
									<button className={bSide === 'left' ? 'bb' : ''} onClick={leftBorder}>
										<span className={'bi-border-left ' + (bSide === 'left' ? 'activespan' : null)}></span>
									</button>
									<button className={bSide === 'right' ? 'bb' : ''} onClick={rightBorder}>
										<span className={'bi-border-right ' + (bSide === 'right' ? 'activespan' : null)}></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='shadow'>
					<input
						id='ahover-s-active'
						type='checkbox'
						onChange={() => {
							setShadowChanged(true)
							setShowShadowSection(!showShadowSection)
						}}
					/>
					<span className='bi-back'> Shadow</span>
					<div style={{ display: showShadowSection ? 'grid' : 'none' }}>
						<div className='three'>
							<div className='two'>
								<label>X: </label>
								<input
									id='ahover-s-x'
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
									id='ahover-s-y'
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
									id='ahover-s-blur'
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
								id='ahover-s-color'
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
