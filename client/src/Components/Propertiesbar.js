import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from './Contexts/PageContext'
import Align from './Properties/Align'
import Appearance from './Properties/Appearance'
import Transform from './Properties/Transform'

const Propertiesbar = () => {
	const {
		pages,
		activePage,
		activeElement,
		width,
		render,
		setRender
	} = useContext(PageContext)

	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})

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
				return true
			} else if (e[2].length > 0) {
				if (setWidthsStates(e[2], id)) return true
			}
		})
	}

	useEffect(() => {
		const notBlank =
			small !== {} &&
			medium !== {} &&
			large !== {} &&
			xlarge !== {} &&
			activeElement !== ''

		if (notBlank && activeElement !== activePage) {
			setProperties(pages[activePage], activeElement)
			setRender(!render)
		}
	}, [small, medium, large, xlarge])

	const setProperties = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				e[1].styles.small = small
				e[1].styles.medium = medium
				e[1].styles.large = large
				e[1].styles.xlarge = xlarge
				return true
			} else if (e[2].length > 0) {
				if (setProperties(e[2], id)) return true
			}
		})
	}

	return (
		<div className='propertybar'>
			<p>Properties</p>
			<div className='div-property'>
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
				/>
				<Transform
					small={small}
					setSmall={setSmall}
					medium={medium}
					setMedium={setMedium}
					large={large}
					setLarge={setLarge}
					xlarge={xlarge}
					setXlarge={setXlarge}
					width={width}
				/>
				<Appearance />
			</div>
		</div>
	)
}

export default Propertiesbar
