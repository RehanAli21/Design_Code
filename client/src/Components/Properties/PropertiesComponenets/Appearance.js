import React, { useState, useEffect, useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'
import { TemplateContext } from '../../Contexts/TemplateContext'
import Tip from './Tip'

const Appearance = () => {
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
		showAppearanceProperties,
		setShowAppearanceProperties,
	} = useContext(PropertiesContext)
	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint, setMsgBoxMsg, setShowMsgBox } = useContext(PageContext)
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
		if (small && medium && large && xlarge) {
			const bgColorInput = document.getElementById('a-bgcolor')
			const bgColorSelect = document.getElementById('bg-color-select')
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
			const paddingXInput = document.getElementById('ap-paddingXInput')
			const paddingYInput = document.getElementById('ap-paddingYInput')
			const paddingXSelect = document.getElementById('ap-paddingXSelect')
			const paddingYSelect = document.getElementById('ap-paddingYSelect')

			bRadiusInput.value = large.borderRadius ? large.borderRadius.split('%')[0] : '0'

			//Default value for all borders
			if (large.border) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = large.border.split(' ')[2]
				bSizeInput.value = large.border.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.border.split(' ')[1])
			} else if (large.borderTop) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = large.borderTop.split(' ')[2]
				bSizeInput.value = large.borderTop.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderTop.split(' ')[1])
			} else if (large.borderBottom) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = large.borderBottom.split(' ')[2]
				bSizeInput.value = large.borderBottom.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderBottom.split(' ')[1])
			} else if (large.borderLeft) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = large.borderLeft.split(' ')[2]
				bSizeInput.value = large.borderLeft.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderLeft.split(' ')[1])
			} else if (large.borderRight) {
				bActiveInput.checked = true
				setShowBorderSection(true)
				bColorInput.value = large.borderRight.split(' ')[2]
				bSizeInput.value = large.borderRight.split(' ')[0].split('p')[0]
				bTypeInput.selectedIndex = borderTypeIndex(large.borderRight.split(' ')[1])
			} else {
				bColorInput.value = '#000000'
				bSizeInput.value = '0'
				bTypeInput.selectedIndex = 0
				bActiveInput.checked = false
				setShowBorderSection(false)
			}

			//Default value for Box shadow
			if (large.boxShadow) {
				sXInput.value = large.boxShadow.split(' ')[0].split('p')[0]
				sYInput.value = large.boxShadow.split(' ')[1].split('p')[0]
				sBlurInput.value = large.boxShadow.split(' ')[2].split('p')[0]
				sColorInput.value = large.boxShadow.split(' ')[3]
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

			if (width < sBreakPoint) {
				bgColorInput.value = small.backgroundColor ? small.backgroundColor : '#ffffff'
				bgColorSelect.value = small.backgroundColor ? small.backgroundColor : 'custom'

				if (small.paddingTop && small.paddingBottom) {
					if (small.paddingTop === small.paddingBottom) {
						const p = paddingFinder(small.paddingTop)
						paddingYInput.value = p[0]
						paddingYSelect.value = p[1]
					}
				} else {
					paddingYInput.value = 0
					paddingYSelect.value = 'px'
				}

				if (small.paddingLeft && small.paddingRight) {
					if (small.paddingLeft === small.paddingRight) {
						const p = paddingFinder(small.paddingLeft)
						paddingXInput.value = p[0]
						paddingXSelect.value = p[1]
					}
				} else {
					paddingXInput.value = 0
					paddingXSelect.value = 'px'
				}
			} else if (width < mBreakPoint) {
				bgColorInput.value = medium.backgroundColor ? medium.backgroundColor : '#ffffff'
				bgColorSelect.value = medium.backgroundColor ? medium.backgroundColor : 'custom'
				if (medium.paddingTop && medium.paddingBottom) {
					if (medium.paddingTop === medium.paddingBottom) {
						const p = paddingFinder(medium.paddingTop)
						paddingYInput.value = p[0]
						paddingYSelect.value = p[1]
					}
				} else {
					paddingYInput.value = 0
					paddingYSelect.value = 'px'
				}

				if (medium.paddingLeft && medium.paddingRight) {
					if (medium.paddingLeft === medium.paddingRight) {
						const p = paddingFinder(medium.paddingLeft)
						paddingXInput.value = p[0]
						paddingXSelect.value = p[1]
					}
				} else {
					paddingXInput.value = 0
					paddingXSelect.value = 'px'
				}
			} else if (width < lBreakPoint) {
				bgColorInput.value = large.backgroundColor ? large.backgroundColor : '#ffffff'
				bgColorSelect.value = large.backgroundColor ? large.backgroundColor : 'custom'

				if (large.paddingTop && large.paddingBottom) {
					if (large.paddingTop === large.paddingBottom) {
						const p = paddingFinder(large.paddingTop)
						paddingYInput.value = p[0]
						paddingYSelect.value = p[1]
					}
				} else {
					paddingYInput.value = 0
					paddingYSelect.value = 'px'
				}

				if (large.paddingLeft && large.paddingRight) {
					if (large.paddingLeft === large.paddingRight) {
						const p = paddingFinder(large.paddingLeft)
						paddingXInput.value = p[0]
						paddingXSelect.value = p[1]
					}
				} else {
					paddingXInput.value = 0
					paddingXSelect.value = 'px'
				}
			} else {
				bgColorInput.value = xlarge.backgroundColor ? xlarge.backgroundColor : '#ffffff'
				bgColorSelect.value = xlarge.backgroundColor ? xlarge.backgroundColor : 'custom'

				if (xlarge.paddingTop && xlarge.paddingBottom) {
					if (xlarge.paddingTop === xlarge.paddingBottom) {
						const p = paddingFinder(xlarge.paddingTop)
						paddingYInput.value = p[0]
						paddingYSelect.value = p[1]
					}
				} else {
					paddingYInput.value = 0
					paddingYSelect.value = 'px'
				}

				if (xlarge.paddingLeft && xlarge.paddingRight) {
					if (xlarge.paddingLeft === xlarge.paddingRight) {
						const p = paddingFinder(xlarge.paddingLeft)
						paddingXInput.value = p[0]
						paddingXSelect.value = p[1]
					}
				} else {
					paddingXInput.value = 0
					paddingXSelect.value = 'px'
				}
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

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
		if (small && medium && large && xlarge) {
			let changedBgColor = ''
			if (bgColor !== 'custom') changedBgColor = bgColor

			if (width < sBreakPoint) {
				setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else if (width < mBreakPoint) {
				setProperties(medium, setMedium, 'backgroundColor', changedBgColor)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'backgroundColor', changedBgColor)
				if (!changedLarge) setProperties(large, setLarge, 'backgroundColor', changedBgColor)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'backgroundColor', changedBgColor)
			} else if (width < lBreakPoint) {
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
	}, [bgColor])

	//For Box Shadow
	useEffect(() => {
		if (small && medium && large && xlarge && shadowChanged) {
			const changedShadow = showShadowSection ? `${sX} ${sY} ${sBlur} ${sColor}` : ''
			setProperties(small, setSmall, 'boxShadow', changedShadow)
			setProperties(medium, setMedium, 'boxShadow', changedShadow)
			setProperties(large, setLarge, 'boxShadow', changedShadow)
			setProperties(xlarge, setXlarge, 'boxShadow', changedShadow)

			setShadowChanged(false)
		}
	}, [showShadowSection, sX, sY, sColor, sBlur])

	//For Changing paddingX
	useEffect(() => {
		if (small && medium && large && xlarge && paddingX !== '') {
			const ele = document.getElementById('ap-paddingXSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingX}${punit}`

			if (width < sBreakPoint) {
				setPadding(small, setSmall, 'paddingLeft', 'paddingRight', padding)
				setChangedSmall(true)
				if (!changedMedium) setPadding(medium, setMedium, 'paddingLeft', 'paddingRight', padding)
				if (!changedLarge) setPadding(large, setLarge, 'paddingLeft', 'paddingRight', padding)
				if (!changedXlarge) setPadding(xlarge, setXlarge, 'paddingLeft', 'paddingRight', padding)
			} else if (width < mBreakPoint) {
				setPadding(medium, setMedium, 'paddingLeft', 'paddingRight', padding)
				setChangedMedium(true)
				if (!changedSmall) setPadding(small, setSmall, 'paddingLeft', 'paddingRight', padding)
				if (!changedLarge) setPadding(large, setLarge, 'paddingLeft', 'paddingRight', padding)
				if (!changedXlarge) setPadding(xlarge, setXlarge, 'paddingLeft', 'paddingRight', padding)
			} else if (width < lBreakPoint) {
				setPadding(large, setLarge, 'paddingLeft', 'paddingRight', padding)
				setChangedLarge(true)
				if (!changedSmall) setPadding(small, setSmall, 'paddingLeft', 'paddingRight', padding)
				if (!changedMedium) setPadding(medium, setMedium, 'paddingLeft', 'paddingRight', padding)
				if (!changedXlarge) setPadding(xlarge, setXlarge, 'paddingLeft', 'paddingRight', padding)
			} else {
				setPadding(xlarge, setXlarge, 'paddingLeft', 'paddingRight', padding)
				setChangedXlarge(true)
				if (!changedSmall) setPadding(small, setSmall, 'paddingLeft', 'paddingRight', padding)
				if (!changedMedium) setPadding(medium, setMedium, 'paddingLeft', 'paddingRight', padding)
				if (!changedLarge) setPadding(large, setLarge, 'paddingLeft', 'paddingRight', padding)
			}
		}
	}, [paddingX, paddingXUnit])

	//For Changing paddingY
	useEffect(() => {
		if (small && medium && large && xlarge && paddingY !== '') {
			const ele = document.getElementById('ap-paddingYSelect')

			let punit = paddingYUnit
			if (ele) punit = ele.value

			const padding = `${paddingY}${punit}`

			if (width < sBreakPoint) {
				setPadding(small, setSmall, 'paddingTop', 'paddingBottom', padding)
				setChangedSmall(true)
				if (!changedMedium) setPadding(medium, setMedium, 'paddingTop', 'paddingBottom', padding)
				if (!changedLarge) setPadding(large, setLarge, 'paddingTop', 'paddingBottom', padding)
				if (!changedXlarge) setPadding(xlarge, setXlarge, 'paddingTop', 'paddingBottom', padding)
			} else if (width < mBreakPoint) {
				setPadding(medium, setMedium, 'paddingTop', 'paddingBottom', padding)
				setChangedMedium(true)
				if (!changedSmall) setPadding(small, setSmall, 'paddingTop', 'paddingBottom', padding)
				if (!changedLarge) setPadding(large, setLarge, 'paddingTop', 'paddingBottom', padding)
				if (!changedXlarge) setPadding(xlarge, setXlarge, 'paddingTop', 'paddingBottom', padding)
			} else if (width < lBreakPoint) {
				setPadding(large, setLarge, 'paddingTop', 'paddingBottom', padding)
				setChangedLarge(true)
				if (!changedSmall) setPadding(small, setSmall, 'paddingTop', 'paddingBottom', padding)
				if (!changedMedium) setPadding(medium, setMedium, 'paddingTop', 'paddingBottom', padding)
				if (!changedXlarge) setPadding(xlarge, setXlarge, 'paddingTop', 'paddingBottom', padding)
			} else {
				setPadding(xlarge, setXlarge, 'paddingTop', 'paddingBottom', padding)
				setChangedXlarge(true)
				if (!changedSmall) setPadding(small, setSmall, 'paddingTop', 'paddingBottom', padding)
				if (!changedMedium) setPadding(medium, setMedium, 'paddingTop', 'paddingBottom', padding)
				if (!changedLarge) setPadding(large, setLarge, 'paddingTop', 'paddingBottom', padding)
			}
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
		if (small && medium && large && xlarge && borderChanged) {
			const changedBorder = showBorderSection ? `${bSize} ${bType} ${bColor}` : ''
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
				id='bg-color-select'
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
			<p className='second-heading' onClick={() => setShowAppearanceProperties(!showAppearanceProperties)}>
				<Tip
					msg={[
						'Color controls background color',
						<hr className='tipHr' />,
						'InnerX control horizontal inner space',
						<hr className='tipHr' />,
						'InnerY control vertical inner space',
						<hr className='tipHr' />,
						'Border controls border of element',
						<hr className='tipHr' />,
						'Shadow controls shadow of element',
					]}
				/>
				APPEARANCE <span style={{ display: showAppearanceProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showAppearanceProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div style={{ display: showAppearanceProperties ? 'grid' : 'none' }}>
				<div className='two md'>
					<label style={{ marginTop: '10px' }}>Color: </label>
					{showCustomBgColorOptions()}
					<input
						disabled={!customBgColor}
						id='a-bgcolor'
						onChange={e => setBgColor(e.target.value)}
						type='color'
						defaultValue='#ffffff'
					/>
				</div>
				<div className='padding md'>
					<label>InnerX space: </label>
					<input
						id='ap-paddingXInput'
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
					<select id='ap-paddingXSelect' onChange={e => setPaddingXUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='%'>%</option>
						<option value='vw'>VW</option>
						<option value='em'>EM</option>
					</select>
				</div>
				<div className='padding md'>
					<label>InnerY space: </label>
					<input
						id='ap-paddingYInput'
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
					<select id='ap-paddingYSelect' onChange={e => setPaddingYUnit(e.target.value)}>
						<option value='px'>PX</option>
						<option value='vh'>VH</option>
						<option value='em'>EM</option>
					</select>
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
									id='a-b-radius'
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
