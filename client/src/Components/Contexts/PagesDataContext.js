import React, { createContext, useState } from 'react'

export const PagesDataContext = createContext()

export const PagesDataProvider = props => {
	const [data, setData] = useState({ home: [] })

	return (
		<PagesDataContext.Provider value={{ data, setData }}>
			{props.children}
		</PagesDataContext.Provider>
	)
}
