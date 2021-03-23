import React, { useContext, useEffect } from 'react'
import { PageContext } from './Contexts/PageContext'
import { PropertiesContext } from './Contexts/PropertiesContext'
import Align from './Properties/Align'
import Appearance from './Properties/Appearance'
import Specific from './Properties/Specific'
import Transform from './Properties/Transform'

const Propertiesbar = () => {
	const { pages, activePage, activeElement, width, render, setRender } = useContext(PageContext)

	const {
		prevElement,
		setPrevElement,
		small,
		medium,
		large,
		xlarge,
		setSmall,
		setMedium,
		setLarge,
		setXlarge,
		changedSmall,
		changedMedium,
		changedLarge,
		changedXlarge,
		setChangedSmall,
		setChangedMedium,
		setChangedLarge,
		setChangedXlarge,
	} = useContext(PropertiesContext)

	useEffect(() => {
		const ele = document.getElementById(activeElement)

		if (ele) {
			if (prevElement !== '' && document.getElementById(prevElement)) {
				document.getElementById(prevElement).style.outline = ''
			}
			ele.style.outline = '2px solid rgb(32, 144, 220)'
			setPrevElement(activeElement)
		}
	}, [activeElement, activePage, small, medium, large, xlarge, pages, render, width])

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
			setProperties(pages[activePage], activeElement)
			setRender(!render)
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
		<div className='propertybar'>
			<div style={{ display: activePage !== activeElement ? 'none' : 'block' }}>
				<h3>Properties</h3>
			</div>
			<div style={{ display: activePage === activeElement ? 'none' : 'block' }} className='property'>
				<Specific />
				<Align width={width} activeElement={activeElement} />
				<Transform width={width} activeElement={activeElement} />
				<Appearance width={width} activeElement={activeElement} />
			</div>
		</div>
	)
}

export default Propertiesbar
