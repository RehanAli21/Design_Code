import React, { createContext, useState, useEffect, useContext } from 'react'
import { PageContext } from './PageContext'
export const PropertiesContext = createContext()

export const PropertiesProvider = props => {
	const { width, activeElement, activePage, pages, setPages } = useContext(PageContext)

	const [prevElement, setPrevElement] = useState('')
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})
	const [changedSmall, setChangedSmall] = useState(false)
	const [changedMedium, setChangedMedium] = useState(false)
	const [changedLarge, setChangedLarge] = useState(false)
	const [changedXlarge, setChangedXlarge] = useState(false)
	const [hover, setHover] = useState({})
	const [click, setClick] = useState({})
	const [clickadv, setClickadv] = useState({})
	const [hoveradv, setHoveradv] = useState({})
	const [clickTarget, setClickTarget] = useState('')
	const [clickTargetName, setClickTargetName] = useState('')
	const [hoverTarget, setHoverTarget] = useState('')
	const [hoverTargetName, setHoverTargetName] = useState('')

	const [showAlignProperties, setShowAlignProperties] = useState(true)
	const [showAppearanceProperties, setShowAppearanceProperties] = useState(true)
	const [showTransformProperties, setShowTransformProperties] = useState(true)
	const [showDivProperties, setShowDivProperties] = useState(true)
	const [showFontProperties, setShowFontProperties] = useState(true)
	const [showTextProperties, setShowTextProperties] = useState(true)
	const [showBtnProperties, setShowBtnProperties] = useState(true)
	const [showInputProperties, setShowInputProperties] = useState(true)
	const [showTextCompProperties, setShowTextCompProperties] = useState(true)
	const [showImgProperties, setShowImgProperties] = useState(true)
	const [showFilterProperties, setShowFilterProperties] = useState(true)
	const [showExtraProperties, setShowExtraProperties] = useState(true)
	const [showPositionProperties, setShowPositionProperties] = useState(true)
	const [showBackFilterProperties, setShowBackFilterProperties] = useState(true)
	const [showAnimateProperties, setShowAnimateProperties] = useState(true)

	const [apHoverProperties, setApHoverProperties] = useState(true)
	const [hoverExtraProperties, setHoverExtraProperties] = useState(true)
	const [showHoverPropertiesOne, setShowHoverPropertiesOne] = useState(true)
	const [showClickProperties, setShowClickProperties] = useState(true)

	const [showCAP, setShowCAP] = useState(true) //showClickAdvProperties
	const [showCAAP, setShowCAAP] = useState(true) //showClickAdvAppearanceProperties
	const [showCAEP, setShowCAEP] = useState(true) //showClickAdvExtraProperties
	const [showHAAP, setShowHAAP] = useState(true) //showHoverAdvAppearanceProperties
	const [showHAEP, setShowHAEP] = useState(true) //showHoverAdvExtraProperties
	const [showHAP, setShowHAP] = useState(true) //showHoverAdvProperties

	useEffect(() => {
		const ele = document.getElementById(activeElement)

		if (ele) {
			if (prevElement !== '' && document.getElementById(prevElement)) {
				document.getElementById(prevElement).style.outline = ''
			}
			ele.style.outline = '2px solid rgb(32, 144, 220)'
			setPrevElement(activeElement)
		}
	}, [activeElement, activePage, small, medium, large, xlarge, pages, width])

	useEffect(() => {
		setWidthsStates(pages[activePage], activeElement)
	}, [activePage, activeElement])

	const setWidthsStates = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				setClick(e[1].clickStyle)
				setHover(e[1].hoverStyle)
				setSmall(e[1].styles.small)
				setMedium(e[1].styles.medium)
				setLarge(e[1].styles.large)
				setXlarge(e[1].styles.xlarge)
				setChangedSmall(e[1].styleWidth.changedSmall)
				setChangedMedium(e[1].styleWidth.changedMedium)
				setChangedLarge(e[1].styleWidth.changedLarge)
				setChangedXlarge(e[1].styleWidth.changeXlarge)
				setClickadv(e[1].cTargetStyle)
				setHoveradv(e[1].hTargetStyle)
				setClickTarget(e[1].clickTarget)
				setHoverTarget(e[1].hoverTarget)
				setClickTargetName(e[1].clickTargetName)
				setHoverTargetName(e[1].hoverTargetName)
				return true
			} else if (e[2] && e[2].length > 0) {
				if (setWidthsStates(e[2], id)) return true
			}
		})
	}

	useEffect(() => {
		if (activeElement !== '' && activeElement !== activePage) {
			const temp = Object.assign({}, pages)
			setProperties(temp[activePage], activeElement)
			setPages(temp)
		}
	}, [
		small,
		medium,
		large,
		xlarge,
		changedSmall,
		changedMedium,
		changedLarge,
		changedXlarge,
		hover,
		click,
		hoverTarget,
		clickTarget,
		clickadv,
		hoveradv,
	])

	const setProperties = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				e[1].styles.small = small
				e[1].styles.medium = medium
				e[1].styles.large = large
				e[1].styles.xlarge = xlarge
				e[1].styleWidth.changedSmall = changedSmall
				e[1].styleWidth.changedMedium = changedMedium
				e[1].styleWidth.changedLarge = changedLarge
				e[1].styleWidth.changeXlarge = changedXlarge
				e[1].hoverStyle = hover
				e[1].clickStyle = click
				e[1].hoverTarget = hoverTarget
				e[1].clickTarget = clickTarget
				e[1].hoverTargetName = hoverTargetName
				e[1].clickTargetName = clickTargetName
				e[1].cTargetStyle = clickadv
				e[1].hTargetStyle = hoveradv
				return true
			} else if (e[2] && e[2].length > 0) {
				if (setProperties(e[2], id)) return true
			}
		})
	}

	return (
		<PropertiesContext.Provider
			value={{
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
				hover,
				setHover,
				click,
				setClick,
				hoverTarget,
				setHoverTarget,
				clickTargetName,
				setClickTargetName,
				hoverTargetName,
				setHoverTargetName,
				clickTarget,
				setClickTarget,
				clickadv,
				setClickadv,
				hoveradv,
				setHoveradv,
				showAlignProperties,
				setShowAlignProperties,
				showAppearanceProperties,
				setShowAppearanceProperties,
				showTransformProperties,
				setShowTransformProperties,
				showDivProperties,
				setShowDivProperties,
				showFontProperties,
				setShowFontProperties,
				showTextProperties,
				setShowTextProperties,
				showBtnProperties,
				setShowBtnProperties,
				showInputProperties,
				setShowInputProperties,
				showTextCompProperties,
				setShowTextCompProperties,
				showImgProperties,
				setShowImgProperties,
				showFilterProperties,
				setShowFilterProperties,
				showExtraProperties,
				setShowExtraProperties,
				showPositionProperties,
				setShowPositionProperties,
				showBackFilterProperties,
				setShowBackFilterProperties,
				showAnimateProperties,
				setShowAnimateProperties,
				apHoverProperties,
				setApHoverProperties,
				hoverExtraProperties,
				setHoverExtraProperties,
				showHoverPropertiesOne,
				setShowHoverPropertiesOne,
				showClickProperties,
				setShowClickProperties,
				showCAP,
				setShowCAP,
				showCAAP,
				setShowCAAP,
				showCAEP,
				setShowCAEP,
				showHAAP,
				setShowHAAP,
				showHAEP,
				setShowHAEP,
				showHAP,
				setShowHAP,
			}}>
			{props.children}
		</PropertiesContext.Provider>
	)
}
