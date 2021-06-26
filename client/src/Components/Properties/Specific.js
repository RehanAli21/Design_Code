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
import Animate from './PropertiesComponenets/Animate'
import IconProperties from './IconProperties'
import Font from './PropertiesComponenets/Font'
import Text from './PropertiesComponenets/Text'
import Filter from './PropertiesComponenets/Filter'
import SliderProperties from './SliderProperties'
import SlideProperties from './SlideProperties'

const Specific = ({ section }) => {
	const { activeElement } = useContext(PageContext)
	const ele = document.getElementById(activeElement)

	if (!ele) return <div></div>

	if (section === 'main') {
		return ele.tagName === 'DIV' ? (
			<DivProperties />
		) : ele.tagName === 'SECTION' && ele.classList.contains('Slider') ? (
			<SliderProperties />
		) : ele.tagName === 'SECTION' ? (
			<SlideProperties />
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
		) : ele.tagName === 'I' ? (
			<IconProperties />
		) : (
			<div></div>
		)
	} else {
		return ele.tagName === 'DIV' ? (
			<React.Fragment>
				<Position />
				<Animate />
				<BackFilter />
			</React.Fragment>
		) : ele.tagName === 'INPUT' ? (
			<React.Fragment>
				<Font />
				<Animate />
				<BackFilter />
			</React.Fragment>
		) : ele.tagName === 'BUTTON' ? (
			<React.Fragment>
				<Position />
				<Text />
				<Font />
				<Animate />
				<BackFilter />
			</React.Fragment>
		) : ele.tagName === 'P' ||
		  ele.tagName === 'H1' ||
		  ele.tagName === 'H2' ||
		  ele.tagName === 'H3' ||
		  ele.tagName === 'H4' ||
		  ele.tagName === 'H5' ||
		  ele.tagName === 'A' ? (
			<React.Fragment>
				<Font type='text' />
				<Text />
				<Animate />
				<BackFilter />
			</React.Fragment>
		) : ele.tagName === 'IMG' ? (
			<React.Fragment>
				<Position />
				<Animate />
				<Filter />
			</React.Fragment>
		) : ele.tagName === 'SELECT' ? (
			<React.Fragment>
				<Text />
				<Font />
				<Animate />
				<BackFilter />
			</React.Fragment>
		) : ele.tagName === 'UL' || ele.tagName === 'OL' ? (
			<React.Fragment>
				<Animate />
				<BackFilter />
			</React.Fragment>
		) : (
			<div></div>
		)
	}
}

export default Specific
