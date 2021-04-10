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
	}, [pages, activePage, activeElement])

	const setWidthsStates = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				setSmall(e[1].styles.small)
				setMedium(e[1].styles.medium)
				setLarge(e[1].styles.large)
				setXlarge(e[1].styles.xlarge)
				setChangedSmall(e[1].styleWidth.changedSmall)
				setChangedMedium(e[1].styleWidth.changedMedium)
				setChangedLarge(e[1].styleWidth.changedLarge)
				setChangedXlarge(e[1].styleWidth.changeXlarge)
				return true
			} else if (e[2] && e[2].length > 0) {
				if (setWidthsStates(e[2], id)) return true
			}
		})
	}

	useEffect(() => {
		const notBlank = small !== {} && medium !== {} && large !== {} && xlarge !== {} && activeElement !== ''

		if (notBlank && activeElement !== activePage) {
			const temp = Object.assign({}, pages)
			setProperties(temp[activePage], activeElement)
			setPages(temp)
		}
	}, [small, medium, large, xlarge, changedSmall, changedMedium, changedLarge, changedXlarge])

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
			}}>
			{props.children}
		</PropertiesContext.Provider>
	)
}
