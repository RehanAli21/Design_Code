import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import DivProperties from './DivProperties'
import InputProperties from './InputProperties'
import ButtonProperties from './ButtonProperties'
import TextProperties from './TextProperties'

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
	) : ele.tagName === 'P' || ele.tagName === 'H1' || ele.tagName === 'H2' || ele.tagName === 'H3' ? (
		<TextProperties />
	) : (
		<div></div>
	)
}

export default Specific
