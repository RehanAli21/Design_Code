import React, { useState, createContext } from 'react'

export const TemplateContext = createContext()

export const TemplateProvider = props => {
	const [colors, setColors] = useState({})
	const [fontSizes, setFontSizes] = useState({})
	const [showTemplate, setShowTemplate] = useState(true)

	return (
		<TemplateContext.Provider value={{ colors, setColors, fontSizes, setFontSizes, showTemplate, setShowTemplate }}>
			{props.children}
		</TemplateContext.Provider>
	)
}