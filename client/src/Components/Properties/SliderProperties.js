import React, { useContext, useEffect, useState } from 'react'
import { PageContext } from '../Contexts/PageContext'
import Name from './PropertiesComponenets/Name'
import GridColumn from './PropertiesComponenets/GridColumn'
import Tip from './PropertiesComponenets/Tip'
import Display from './PropertiesComponenets/Display'

const SliderProperties = () => {
	const showBtnProperties = true
	const { pages, setPages, activeElement, activePage } = useContext(PageContext)
	const [effect, setEffect] = useState('')
	const [loop, setLoop] = useState('')
	const [autoplay, setAutoplay] = useState('')
	const [autoplayTiming, setAutoplayTiming] = useState('')
	const [activeSlide, setActiveSlide] = useState('')

	//for default values
	useEffect(() => {
		const values = findAndReturnValues(pages[activePage], activeElement)
		if (values) {
			const effectSelect = document.getElementById('slider-effect-select')
			const loopSelect = document.getElementById('slider-loop-select')
			const autoplaySelect = document.getElementById('slider-autoplay-select')
			const autoplayTimingInput = document.getElementById('slider-autoplayTiming-input')

			effectSelect.value = values[0]
			autoplaySelect.value = values[1]
			autoplayTimingInput.value = values[2]
			autoplayTimingInput.disabled = values[1] === 'no'
			loopSelect.value = values[3]
		}
	}, [activeElement])

	const findAndReturnValues = (arr, id) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === id) {
				return [arr[i][1].effect, arr[i][1].autoplay, arr[i][1].autoplayTiming, arr[i][1].loop]
			} else if (arr[i][2] && arr[i][2].length > 0) {
				const found = findAndReturnValues(arr[i][2], id)
				if (found) return found
			}
		}
		return false
	}

	//for setting slider effect
	useEffect(() => {
		if (effect !== '') {
			const temp = Object.assign({}, pages)
			findAndChangeAttributes(temp[activePage], 'effect', effect)
			setPages(temp)
		}
	}, [effect])

	//for setting slider loop
	useEffect(() => {
		if (loop !== '') {
			const temp = Object.assign({}, pages)
			findAndChangeAttributes(temp[activePage], 'loop', loop)
			setPages(temp)
		}
	}, [loop])

	//for setting slider autoplay
	useEffect(() => {
		if (autoplay !== '') {
			const temp = Object.assign({}, pages)
			findAndChangeAttributes(temp[activePage], 'autoplay', autoplay)
			setPages(temp)
		}
	}, [autoplay])

	//for setting slider autoplaytiming
	useEffect(() => {
		if (autoplayTiming !== '') {
			const temp = Object.assign({}, pages)
			findAndChangeAttributes(temp[activePage], 'autoplayTiming', autoplayTiming)
			setPages(temp)
		}
	}, [autoplayTiming])

	//for finding element and changing it's properties
	const findAndChangeAttributes = (arr, property, value) => {
		arr.forEach(e => {
			if (e[1].id === activeElement) {
				e[1][property] = value
				return true
			} else if (e[2] && e[2].length) {
				if (findAndChangeAttributes(e[2], property, value)) return true
			}
		})
		return false
	}

	useEffect(() => {
		if (activeSlide !== '') {
			const temp = Object.assign({}, pages)
			changeActiveSlide(temp[activePage], activeElement, activeSlide)
			setPages(temp)
		}
	}, [activeSlide])

	const changeActiveSlide = (arr, id, activeSlideId) => {
		arr.forEach(e => {
			if (e[1].id === id) {
				e[1].activeSlide = activeSlideId

				if (e[2] && e[2].length > 2) {
					for (let i = 2; i < e[2].length; i++) {
						if (e[2][i][1].id === activeSlideId && e[2][i][1].class.search('activeOne') === -1) {
							e[2][i][1].class += ' activeOne '
						} else if (e[2][i][1].id !== activeSlideId && e[2][i][1].class.search('activeOne') !== -1) {
							const classes = e[2][i][1].class.split(' ')
							let newClass = ''
							classes.forEach(e => {
								const a = e.trim()
								if (a !== 'activeOne' && a !== '' && a !== ' ') {
									newClass += ` ${a} `
								}
							})
							e[2][i][1].class = newClass.trim()
						}
					}
				}
				return true
			} else if (e[2] && e[2].length > 0) {
				if (changeActiveSlide(e[2], id, activeSlideId)) return true
			}
		})
		return false
	}

	const slidesOption = () => {
		const slides = findSlides(pages[activePage])

		return (
			<select defaultValue={slides[0]} onChange={e => setActiveSlide(e.target.value)}>
				{slides[0] === '' && (
					<option key='erere' value=''>
						None
					</option>
				)}
				{slides &&
					slides !== true &&
					slides[1].map(e => (
						<option key={e[1].name + 'op'} value={e[1].id}>
							{e[1].name}
						</option>
					))}
			</select>
		)
	}

	const findSlides = arr => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				const slides = [arr[i][1].activeSlide, []]

				if (arr[i][2] && arr[i][2].length > 2) {
					for (let j = 2; j < arr[i][2].length; j++) {
						slides[1].push(arr[i][2][j])
					}
					return slides
				}
				return true
			} else if (arr[i][2] && arr[i][2].length > 0) {
				const found = findSlides(arr[i][2])
				if (found) return found
			}
		}
		return false
	}

	return (
		<div className='borders btn-specific'>
			<p className='second-heading'>
				<Tip
					msg={[
						'Name is an unique identity for this element',
						'Text for text of button',
						'Cursor for changing mouse icon/poiniter',
						'Separete Line will send button on different row',
						'Grid Column is for setting column number in layout, gridColumn will only be shown, when button is inside div and div row/column is checked',
					]}
				/>
				SLIDER PROPERTIES <span style={{ display: showBtnProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showBtnProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<Name />
			<div className='two'>
				<label>Effects:</label>
				<select id='slider-effect-select' onChange={e => setEffect(e.target.value)}>
					<option value='effect1'>One</option>
					<option value='effect2'>Two</option>
					<option value='effect3'>Three</option>
					<option value='effect4'>Four</option>
					<option value='effect5'>Five</option>
					<option value='effect6'>Six</option>
				</select>
			</div>
			<div className='two'>
				<label>Loop</label>
				<select id='slider-loop-select' onChange={e => setLoop(e.target.value)}>
					<option value='no'>No</option>
					<option value='yes'>Yes</option>
				</select>
			</div>
			<div className='three' style={{ gridTemplateColumns: 'auto 47px 72px 10%' }}>
				<label>Autoplay</label>
				<select id='slider-autoplay-select' onChange={e => setAutoplay(e.target.value)}>
					<option value='no'>No</option>
					<option value='yes'>Yes</option>
				</select>
				<input
					disabled={!(autoplay === 'yes')}
					type='number'
					className='numberinput'
					id='slider-autoplayTiming-input'
					min='0'
					step='100'
					onChange={e => setAutoplayTiming(e.target.value)}
				/>
			</div>
			<div className='two'>
				<label>Show Slide</label>
				{slidesOption()}
			</div>
			<Display type='sameLine' />
			<GridColumn />
		</div>
	)
}

export default SliderProperties
