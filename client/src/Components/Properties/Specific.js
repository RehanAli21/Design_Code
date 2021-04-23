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
import ListItemProperties from './ListItemProperties'
import Position from './PropertiesComponenets/Position'
import BackFilter from './PropertiesComponenets/BackFilter'

const Specific = () => {
	const { activeElement } = useContext(PageContext)
	const ele = document.getElementById(activeElement)

	if (!ele) return <div></div>

	return ele.tagName === 'DIV' ? (
		<React.Fragment>
			<DivProperties />
			<Position />
			<BackFilter />
		</React.Fragment>
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
	) : ele.tagName === 'LI' ? (
		<ListItemProperties />
	) : (
		<div></div>
	)
}

export default Specific
