import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import DivProperties from './SpecificProperties/DivProperties'
import InputProperties from './SpecificProperties/InputProperties'
import ButtonProperties from './SpecificProperties/ButtonProperties'

const Specific = () => {
	const { activeElement, activePage, width } = useContext(PageContext)
	const ele = document.getElementById(activeElement)

	if (activeElement === activePage || !ele) return <div></div>

	return ele.tagName === 'DIV' ? (
		<DivProperties width={width} activeElement={activeElement} />
	) : ele.tagName === 'INPUT' ? (
		<InputProperties />
	) : ele.tagName === 'BUTTON' ? (
		<ButtonProperties />
	) : (
		<div></div>
	)
}

export default Specific
