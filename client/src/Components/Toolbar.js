import React, { useContext } from 'react'
import { PagesContext } from './Contexts/PagesContext'
import { PagesDataContext } from './Contexts/PagesDataContext'

const Toolbar = () => {
	const { data, setData } = useContext(PagesDataContext)
	const { activePage } = useContext(PagesContext)

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
