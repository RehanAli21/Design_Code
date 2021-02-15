import React, { useContext } from 'react'
import { activePage } from './Contexts/PagesContext'
import { PagesDataContext } from './Contexts/PagesDataContext'

const Toolbar = () => {
	const { data, setData } = useContext(PagesDataContext)

	return (
		<div className='toolbar'>
			<div className='tools'>
				<p>Div</p>
			</div>
			<div>
				<p>Layers</p>
			</div>
		</div>
	)
}

export default Toolbar
