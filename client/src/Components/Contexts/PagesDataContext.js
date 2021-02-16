import React, { createContext, useState } from 'react'

export const PagesDataContext = createContext()

export const PagesDataProvider = props => {
	const [data, setData] = useState({ home: [] })
	const [elements, setElements] = useState([])

	return (
		<PagesDataContext.Provider
			value={{ data, setData, elements, setElements }}>
			{props.children}
		</PagesDataContext.Provider>
	)
}
