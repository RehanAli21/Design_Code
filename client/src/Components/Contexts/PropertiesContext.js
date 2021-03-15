import React, { createContext, useState } from 'react'

export const PropertiesContext = createContext()

export const PropertiesProvider = props => {
	const [prevElement, setPrevElement] = useState('')
	const [small, setSmall] = useState({})
	const [medium, setMedium] = useState({})
	const [large, setLarge] = useState({})
	const [xlarge, setXlarge] = useState({})
	const [changedSmall, setChangedSmall] = useState(false)
	const [changedMedium, setChangedMedium] = useState(false)
	const [changedLarge, setChangedLarge] = useState(false)
	const [changedXlarge, setChangedXlarge] = useState(false)

	return (
		<PropertiesContext.Provider
			value={{
				prevElement,
				setPrevElement,
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
			}}>
			{props.children}
		</PropertiesContext.Provider>
	)
}
