import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from './Contexts/PageContext'
import Align from './Properties/Align'
import Appearance from './Properties/Appearance'
import Specific from './Properties/Specific'
import Transform from './Properties/Transform'

const Propertiesbar = () => {
	const { pages, activePage, activeElement, width, render, setRender } = useContext(PageContext)

	const [prevElement, setPrevElement] = useState('')
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})
	const [changedSmall, setChangedSmall] = useState(false)
	const [changedMedium, setChangedMedium] = useState(false)
	const [changedLarge, setChangedLarge] = useState(false)
	const [changedXlarge, setChangedXlarge] = useState(false)
	const [showLayer, setShowLayer] = useState(true)

	useEffect(() => {
		const ele = document.getElementById(activeElement)

		if (ele) {
			if (prevElement !== '' && document.getElementById(prevElement)) {
				document.getElementById(prevElement).style.outline = 'none'
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
			} else if (e[2].length > 0) {
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
			} else if (e[2].length > 0) {
				if (setProperties(e[2], id)) return true
			}
		})
	}

	return (
		<div className='propertybar'>
			<div className='showlayer borders'>
				<input type='checkbox' defaultChecked='true' onClick={() => setShowLayer(!showLayer)} />
				<label>Transform layer</label>
			</div>
			<div className='property'>
				<Specific
					small={small}
					setSmall={setSmall}
					medium={medium}
					setMedium={setMedium}
					large={large}
					setLarge={setLarge}
					xlarge={xlarge}
					setXlarge={setXlarge}
					width={width}
					changedSmall={changedSmall}
					setChangedSmall={setChangedSmall}
					changedMedium={changedMedium}
					setChangedMedium={setChangedMedium}
					changedLarge={changedLarge}
					setChangedLarge={setChangedLarge}
					changedXlarge={changedXlarge}
					setChangedXlarge={setChangedXlarge}
					activeElement={activeElement}
					activePage={activePage}
				/>
				<Align
					small={small}
					setSmall={setSmall}
					medium={medium}
					setMedium={setMedium}
					large={large}
					setLarge={setLarge}
					xlarge={xlarge}
					setXlarge={setXlarge}
					width={width}
					changedSmall={changedSmall}
					setChangedSmall={setChangedSmall}
					changedMedium={changedMedium}
					setChangedMedium={setChangedMedium}
					changedLarge={changedLarge}
					setChangedLarge={setChangedLarge}
					changedXlarge={changedXlarge}
					setChangedXlarge={setChangedXlarge}
				/>
				<Transform
					pages={pages}
					render={render}
					activePage={activePage}
					small={small}
					setSmall={setSmall}
					medium={medium}
					setMedium={setMedium}
					large={large}
					setLarge={setLarge}
					xlarge={xlarge}
					setXlarge={setXlarge}
					width={width}
					activeElement={activeElement}
					changedSmall={changedSmall}
					setChangedSmall={setChangedSmall}
					changedMedium={changedMedium}
					setChangedMedium={setChangedMedium}
					changedLarge={changedLarge}
					setChangedLarge={setChangedLarge}
					changedXlarge={changedXlarge}
					setChangedXlarge={setChangedXlarge}
					showLayer={showLayer}
				/>
				<Appearance
					small={small}
					setSmall={setSmall}
					medium={medium}
					setMedium={setMedium}
					large={large}
					setLarge={setLarge}
					xlarge={xlarge}
					setXlarge={setXlarge}
					width={width}
					activeElement={activeElement}
					changedSmall={changedSmall}
					setChangedSmall={setChangedSmall}
					changedMedium={changedMedium}
					setChangedMedium={setChangedMedium}
					changedLarge={changedLarge}
					setChangedLarge={setChangedLarge}
					changedXlarge={changedXlarge}
					setChangedXlarge={setChangedXlarge}
				/>
			</div>
		</div>
	)
}

export default Propertiesbar
