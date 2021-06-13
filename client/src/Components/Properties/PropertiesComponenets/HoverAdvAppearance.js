import React, { useState, useEffect, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'

const HoverAdvAppearance = () => {
	const { hoverTargets, setHoverTargets, apHoverProperties, setApHoverProperties } = useContext(PropertiesContext)
	const { setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)
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
		const bgColorInput = document.getElementById('ahoveradv-bgcolor')
		const bgColorSelect = document.getElementById('bghoveradv-color-select')
		const bActiveInput = document.getElementById('ahoveradv-b-active')
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

		for (const e in hoverTargets) {
			if (hoverTargets[e].selected) {
				bRadiusInput.value = hoverTargets[e].style.borderRadius ? hoverTargets[e].style.borderRadius.split('%')[0] : '0'

				//Default value for all borders
				if (hoverTargets[e].style.border) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = hoverTargets[e].style.border.split(' ')[2]
					bSizeInput.value = hoverTargets[e].style.border.split(' ')[0].split('p')[0]
					bTypeInput.selectedIndex = borderTypeIndex(hoverTargets[e].style.border.split(' ')[1])
				} else if (hoverTargets[e].style.borderTop) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = hoverTargets[e].style.borderTop.split(' ')[2]
					bSizeInput.value = hoverTargets[e].style.borderTop.split(' ')[0].split('p')[0]
					bTypeInput.selectedIndex = borderTypeIndex(hoverTargets[e].style.borderTop.split(' ')[1])
				} else if (hoverTargets[e].style.borderBottom) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = hoverTargets[e].style.borderBottom.split(' ')[2]
					bSizeInput.value = hoverTargets[e].style.borderBottom.split(' ')[0].split('p')[0]
					bTypeInput.selectedIndex = borderTypeIndex(hoverTargets[e].style.borderBottom.split(' ')[1])
				} else if (hoverTargets[e].style.borderLeft) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = hoverTargets[e].style.borderLeft.split(' ')[2]
					bSizeInput.value = hoverTargets[e].style.borderLeft.split(' ')[0].split('p')[0]
					bTypeInput.selectedIndex = borderTypeIndex(hoverTargets[e].style.borderLeft.split(' ')[1])
				} else if (hoverTargets[e].style.borderRight) {
					bActiveInput.checked = true
					setShowBorderSection(true)
					bColorInput.value = hoverTargets[e].style.borderRight.split(' ')[2]
					bSizeInput.value = hoverTargets[e].style.borderRight.split(' ')[0].split('p')[0]
					bTypeInput.selectedIndex = borderTypeIndex(hoverTargets[e].style.borderRight.split(' ')[1])
				} else {
					bColorInput.value = '#000000'
					bSizeInput.value = '0'
					bTypeInput.selectedIndex = 0
					bActiveInput.checked = false
					setShowBorderSection(false)
				}

				//Default value for Box shadow
				if (hoverTargets[e].style.boxShadow) {
					sXInput.value = hoverTargets[e].style.boxShadow.split(' ')[0].split('p')[0]
					sYInput.value = hoverTargets[e].style.boxShadow.split(' ')[1].split('p')[0]
					sBlurInput.value = hoverTargets[e].style.boxShadow.split(' ')[2].split('p')[0]
					sColorInput.value = hoverTargets[e].style.boxShadow.split(' ')[3]
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

				bgColorInput.value = hoverTargets[e].style.backgroundColor ? hoverTargets[e].style.backgroundColor : '#ffffff'
				bgColorSelect.value = hoverTargets[e].style.backgroundColor ? hoverTargets[e].style.backgroundColor : 'custom'

				if (hoverTargets[e].style.paddingTop && hoverTargets[e].style.paddingBottom) {
					if (hoverTargets[e].style.paddingTop === hoverTargets[e].style.paddingBottom) {
						const p = paddingFinder(hoverTargets[e].style.paddingTop)
						paddingYInput.value = p[0]
						paddingYSelect.value = p[1]
					}
				} else {
					paddingYInput.value = 0
					paddingYSelect.value = 'px'
				}

				if (hoverTargets[e].style.paddingLeft && hoverTargets[e].style.paddingRight) {
					if (hoverTargets[e].style.paddingLeft === hoverTargets[e].style.paddingRight) {
						const p = paddingFinder(hoverTargets[e].style.paddingLeft)
						paddingXInput.value = p[0]
						paddingXSelect.value = p[1]
					}
				} else {
					paddingXInput.value = 0
					paddingXSelect.value = 'px'
				}
			}
		}
	}, [hoverTargets])

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
		let changedBgColor = ''
		if (bgColor !== 'custom') changedBgColor = bgColor

		setProperties('backgroundColor', changedBgColor)
	}, [bgColor])

	//For Box Shadow
	useEffect(() => {
		if (shadowChanged) {
			const changedShadow = showShadowSection ? `${sX} ${sY} ${sBlur} ${sColor}` : ''

			setProperties('boxShadow', changedShadow)

			setShadowChanged(false)
		}
	}, [showShadowSection, sX, sY, sColor, sBlur])

	//For Changing paddingX
	useEffect(() => {
		if (paddingX !== '') {
			const ele = document.getElementById('aphoveradv-paddingXSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingX}${punit}`

			setPadding('paddingLeft', 'paddingRight', padding)
		}
	}, [paddingX, paddingXUnit])

	//For Changing paddingY
	useEffect(() => {
		if (paddingY !== '') {
			const ele = document.getElementById('aphoveradv-paddingYSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingY}${punit}`

			setPadding('paddingTop', 'paddingBottom', padding)
		}
	}, [paddingY, paddingYUnit])

	const setPadding = (p1, p2, property) => {
		const temp = Object.assign({}, hoverTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style[p1] = property
				temp[e].style[p2] = property
			}
		}
		setHoverTargets(temp)
	}

	const setProperties = (propertyName, property) => {
		const temp = Object.assign({}, hoverTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style[propertyName] = property
			}
		}
		setHoverTargets(temp)
	}

	//For changing Border
	useEffect(() => {
		if (borderChanged) {
			const changedBorder = showBorderSection ? `${bSize} ${bType} ${bColor}` : ''
			const changedBorderRadius = showBorderSection ? bRadius : ''

			if (bSide === 'all') {
				setBorder(changedBorder, changedBorderRadius)
			} else if (bSide === 'top') {
				setTopBorder(changedBorder, changedBorderRadius)
			} else if (bSide === 'bottom') {
				setBottomBorder(changedBorder, changedBorderRadius)
			} else if (bSide === 'left') {
				setLeftBorder(changedBorder, changedBorderRadius)
			} else if (bSide === 'right') {
				setRightBorder(changedBorder, changedBorderRadius)
			}
		}

		setBorderChanged(false)
	}, [showBorderSection, bSize, bType, bColor, bRadius, bSide])

	const setBorder = (b, br) => {
		const temp = Object.assign({}, hoverTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style.border = b
				temp[e].style.borderRadius = br
			}
		}
		setHoverTargets(temp)
	}
	const setTopBorder = (b, br) => {
		const temp = Object.assign({}, hoverTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style.borderTop = b
				temp[e].style.borderRadius = br
			}
		}
		setHoverTargets(temp)
	}
	const setBottomBorder = (b, br) => {
		const temp = Object.assign({}, hoverTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style.borderBottom = b
				temp[e].style.borderRadius = br
			}
		}
		setHoverTargets(temp)
	}
	const setLeftBorder = (b, br) => {
		const temp = Object.assign({}, hoverTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style.borderLeft = b
				temp[e].style.borderRadius = br
			}
		}
		setHoverTargets(temp)
	}
	const setRightBorder = (b, br) => {
		const temp = Object.assign({}, hoverTargets)
		for (const e in temp) {
			if (temp[e].selected) {
				temp[e].style.borderRight = b
				temp[e].style.borderRadius = br
			}
		}
		setHoverTargets(temp)
	}

	const allBorder = () => {
		for (const e in hoverTargets) {
			if (hoverTargets[e].selected) {
				if (hoverTargets[e].style.borderTop) {
					changeBorder('border', 'borderTop')
				}
				if (hoverTargets[e].style.borderBottom) {
					changeBorder('border', 'borderBottom')
				}
				if (hoverTargets[e].style.borderLeft) {
					changeBorder('border', 'borderLeft')
				}
				if (hoverTargets[e].style.borderRight) {
					changeBorder('border', 'borderRight')
				}
			}
		}

		setBSide('all')
	}
	const topBorder = () => {
		for (const e in hoverTargets) {
			if (hoverTargets[e].selected) {
				if (hoverTargets[e].style.border) {
					changeBorder('borderTop', 'border')
				}
				if (hoverTargets[e].style.borderBottom) {
					changeBorder('borderTop', 'borderBottom')
				}
				if (hoverTargets[e].style.borderLeft) {
					changeBorder('borderTop', 'borderLeft')
				}
				if (hoverTargets[e].style.borderRight) {
					changeBorder('borderTop', 'borderRight')
				}
			}
		}

		setBSide('top')
	}

	const bottomBorder = () => {
		for (const e in hoverTargets) {
			if (hoverTargets[e].selected) {
				if (hoverTargets[e].style.border) {
					changeBorder('borderBottom', 'border')
				}
				if (hoverTargets[e].style.borderTop) {
					changeBorder('borderBottom', 'borderTop')
				}
				if (hoverTargets[e].style.borderLeft) {
					changeBorder('borderBottom', 'borderLeft')
				}
				if (hoverTargets[e].style.borderRight) {
					changeBorder('borderBottom', 'borderRight')
				}
			}
		}

		setBSide('bottom')
	}
	const leftBorder = () => {
		for (const e in hoverTargets) {
			if (hoverTargets[e].selected) {
				if (hoverTargets[e].style.border) {
					changeBorder('borderLeft', 'border')
				}
				if (hoverTargets[e].style.borderTop) {
					changeBorder('borderLeft', 'borderTop')
				}
				if (hoverTargets[e].style.borderBottom) {
					changeBorder('borderLeft', 'borderBottom')
				}
				if (hoverTargets[e].style.borderRight) {
					changeBorder('borderLeft', 'borderRight')
				}
			}
		}

		setBSide('left')
	}
	const rightBorder = () => {
		for (const e in hoverTargets) {
			if (hoverTargets[e].selected) {
				if (hoverTargets[e].style.border) {
					changeBorder('borderRight', 'border')
				}
				if (hoverTargets[e].style.borderTop) {
					changeBorder('borderRight', 'borderTop')
				}
				if (hoverTargets[e].style.borderBottom) {
					changeBorder('borderRight', 'borderBottom')
				}
				if (hoverTargets[e].style.borderLeft) {
					changeBorder('borderRight', 'borderLeft')
				}
			}
		}

		setBSide('right')
	}

	const changeBorder = (obj, setObj, bAdd, bDelete) => {
		const hoverTemp = Object.assign({}, hoverTargets)

		for (const e in hoverTemp) {
			if (hoverTemp[e].selected) {
				const temp = {}
				for (const key in hoverTemp[e].style) {
					if (key === bDelete) temp[bAdd] = hoverTemp[e].style[key]
					else temp[key] = hoverTemp[e].style[key]
				}
				hoverTemp[e].style = temp
			}
		}

		setHoverTargets(hoverTemp)
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
						id='ahoveradv-bgcolor'
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
						id='aphoveradv-paddingXInput'
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
					<select id='aphoveradv-paddingXSelect' onChange={e => setPaddingXUnit(e.target.value)}>
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
						id='aphoveradv-paddingYInput'
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
					<select id='aphoveradv-paddingYSelect' onChange={e => setPaddingYUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='ap-borders md'>
					<input
						id='ahoveradv-b-active'
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
								<label>
									<span className='bi-border-width'></span> Size:
								</label>
								<input
									id='ahoveradv-b-size'
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
									id='ahoveradv-b-radius'
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
						id='ahoveradv-s-active'
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
