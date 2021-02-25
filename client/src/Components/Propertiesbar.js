import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from './Contexts/PageContext'
import Align from './Properties/Align'
import Appearance from './Properties/Appearance'
import Transform from './Properties/Transform'

const Propertiesbar = () => {
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})
	const [activeWidth, setActiveWidth] = useState()

	const { pages, activePage, activeElement, width } = useContext(PageContext)

	useEffect(() => {
		showProperties(pages[activePage], activeElement)
	}, [pages, activePage, activeElement])

	useEffect(() => {
		setActiveWidth(
			width < 540
				? small
				: width < 720
				? medium
				: width < 960
				? large
				: xlarge
		)
	}, [width, small, medium, large, xlarge])

	const showProperties = (arr, id) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				setSmall(e[1].styles.small)
				setMedium(e[1].styles.medium)
				setLarge(e[1].styles.large)
				setXlarge(e[1].styles.xlarge)
				return true
			} else if (e[2].length > 0) {
				if (showProperties(e[2], id)) return true
			}
		})
	}

	return (
		<div className='propertybar'>
			<p>Properties</p>
			<div className='div-property'>
				<Align style={activeWidth} />
				<Transform style={activeWidth} />
				<Appearance style={activeWidth} />
			</div>
		</div>
	)
}

export default Propertiesbar
