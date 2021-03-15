import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import DivProperties from './DivProperties'

const Specific = () => {
	const { activeElement, activePage, width } = useContext(PageContext)
	const ele = document.getElementById(activeElement)

	if (activeElement === activePage || !ele) return <div></div>

	return ele.tagName === 'DIV' ? <DivProperties width={width} /> : <div></div>
}

export default Specific
