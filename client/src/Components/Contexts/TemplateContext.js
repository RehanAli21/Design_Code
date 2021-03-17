import React, { useState, createContext } from 'react'

export const TemplateContext = createContext()

export const TemplateProvider = props => {
	const [colors, setColors] = useState({})
	const [fontSizes, setFontSizes] = useState({})
	const [fonts, setFonts] = useState({})

	return (
		<TemplateContext.Provider value={{ colors, setColors, fontSizes, setFontSizes, fonts, setFonts }}>
			{props.children}
		</TemplateContext.Provider>
	)
}
