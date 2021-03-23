import React, { useState, createContext } from 'react'

export const TemplateContext = createContext()

export const TemplateProvider = props => {
	const [colors, setColors] = useState({})
	const [fontSizes, setFontSizes] = useState({})
	const [fonts, setFonts] = useState({
		Cinzel: "'Cinzel', serif",
		Alegreya: "'Alegreya', serif",
		Prata: "'Prata', serif",
		Vidaloka: "'Vidaloka', serif",
		'Suez One': "'Suez One', serif",
		Roboto: "'Roboto', sans-serif",
		Montserrat: "'Montserrat', sans-serif",
		Oswald: "'Oswald', sans-serif",
		Raleway: "'Raleway', sans-serif",
		'Space Mono': "'Space Mono', monospace",
		'PT Mono': "'PT Mono', monospace",
		'Cutive Mono': "'Cutive Mono', monospace",
		'Major Mono Display': "'Major Mono Display', monospace",
		VT323: "'VT323', monospace",
	})
	const [showTemplate, setShowTemplate] = useState(true)

	return (
		<TemplateContext.Provider
			value={{ colors, setColors, fonts, setFonts, fontSizes, setFontSizes, showTemplate, setShowTemplate }}>
			{props.children}
		</TemplateContext.Provider>
	)
}
