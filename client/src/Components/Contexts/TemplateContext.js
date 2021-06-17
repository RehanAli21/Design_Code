import React, { useState, createContext, useEffect } from 'react'

export const TemplateContext = createContext()

export const TemplateProvider = props => {
	const [colors, setColors] = useState({})
	const [fontSizes, setFontSizes] = useState({})
	const [fonts, setFonts] = useState([])
	const [showTemplate, setShowTemplate] = useState(true)

	useEffect(() => {
		if (fonts.length > 0) {
			let font = ''
			fonts.forEach(e => {
				let name = ''
				if (e.search(' ') !== -1) {
					const a = e.split(' ')
					a.forEach(i => {
						name += `${
							i.charAt(0).toUpperCase() +
							i
								.slice(1, i.length)
								.substr(0, i.length - 1)
								.toLowerCase()
						}+`
					})
					name = name.substr(0, name.length - 1)
				} else {
					name = e.charAt(0).toUpperCase() + e.slice(1, e.length).toLowerCase()
				}
				font += `family=${name}&`
			})
			const link = document.getElementById('googleFonts')
			if (link) {
				link.href = `https://fonts.googleapis.com/css2?${font.substr(0, font.length - 1)}`
			}
		}
	}, [fonts])

	return (
		<TemplateContext.Provider
			value={{ colors, setColors, fonts, setFonts, fontSizes, setFontSizes, showTemplate, setShowTemplate }}>
			{props.children}
		</TemplateContext.Provider>
	)
}
