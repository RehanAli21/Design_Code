import React, { useContext } from 'react'
import { PageContext } from '../Contexts/PageContext'
import DivProperties from './DivProperties'
import InputProperties from './InputProperties'
import ButtonProperties from './ButtonProperties'
import TextProperties from './TextProperties'
import ImageProperties from './ImageProperties'
import SelectProperties from './SelectProperties'
import OptionProperties from './OptionProperties'
import ListProperties from './ListProperties'

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
	) : ele.tagName === 'P' ||
	  ele.tagName === 'H1' ||
	  ele.tagName === 'H2' ||
	  ele.tagName === 'H3' ||
	  ele.tagName === 'H4' ||
	  ele.tagName === 'H5' ||
	  ele.tagName === 'A' ? (
		<TextProperties />
	) : ele.tagName === 'IMG' ? (
		<ImageProperties />
	) : ele.tagName === 'SELECT' ? (
		<SelectProperties />
	) : ele.tagName === 'OPTION' ? (
		<OptionProperties />
	) : ele.tagName === 'UL' || ele.tagName === 'OL' ? (
		<ListProperties />
	) : (
		<div></div>
	)
}

export default Specific
