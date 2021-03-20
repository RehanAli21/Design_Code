import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import DivProperties from './DivProperties'
import InputProperties from './InputProperties'

const Specific = () => {
	const { activeElement, activePage, width } = useContext(PageContext)
	const ele = document.getElementById(activeElement)

	if (activeElement === activePage || !ele) return <div></div>

	return ele.tagName === 'DIV' ? (
		<DivProperties width={width} activeElement={activeElement} />
	) : ele.tagName === 'INPUT' ? (
		<InputProperties width={width} activeElement={activeElement} />
	) : (
		<div></div>
	)
}

export default Specific
