import React, { useState, useContext, useEffect } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Animate = () => {
	const { showAnimateProperties, setShowAnimateProperties } = useContext(PropertiesContext)
	const { pages, width, activeElement, activePage, setPages } = useContext(PageContext)

	const [animation, setAnimation] = useState('')
	const [delay, setDelay] = useState('')
	const [speed, setSpeed] = useState('')
	const [repeat, setRepeat] = useState('')
	const [scroll, setScroll] = useState('')

	//For animation change of button
	useEffect(() => {
		if (animation !== '') {
			const temp = Object.assign({}, pages)
			animationChange(temp[activePage], animation === 'none' ? animation : `animate__${animation} `)
			setPages(temp)
		}
	}, [animation])

	//for adding and removing animation classes
	const animationChange = (arr, value) => {
		//iterating all arr to find the element
		for (let i = 0; i < arr.length; i++) {
			//if element is found
			if (arr[i][1].id === activeElement) {
				//for getting all classes separately
				const temp = arr[i][1].class.split(' ')

				//for removing extra spaces
				const classes = []
				for (let l = 0; l < temp.length; l++) {
					if (temp[l] !== '') classes.push(temp[l])
				}

				//for storing new classes after adding/removing
				let newClasses = ''

				//if animation is none
				if (value === 'none') {
					//if there is a animation applied.
					if (arr[i][1].class.search('animate__animated') !== -1) {
						//iterating all classes
						for (let l = 0; l < classes.length; l++) {
							//if class is not animation class then add is into newclasses
							if (classes[l].search('animate__') === -1 && classes[l].search('wow') === -1) {
								newClasses += `${classes[l]} `
							}
						}

						const delaySelect = document.getElementById('animate-delay-select')
						const speedSelect = document.getElementById('animate-speed-select')
						const repeatSelect = document.getElementById('animate-repeat-select')

						if (delaySelect && delaySelect.value !== 'no-delay') delaySelect.value = 'no-delay'
						if (speedSelect && speedSelect.value !== 'normal') speedSelect.value = 'normal'
						if (repeatSelect && repeatSelect.value !== 'no-repeat') repeatSelect.value = 'no-repeat'
					}
				} else if (value !== 'none') {
					//if there is a animation
					//checking if there is already a animation applied
					if (arr[i][1].class.search('animate__animated') !== -1) {
						for (let l = 0; l < classes.length; l++) {
							//checkng animation classes
							if (classes[l].search('animate__') !== -1) {
								//for checking if it is animation type class and not other animation classes
								const condition =
									classes[l].search('animated') === -1 &&
									classes[l].search('delay') === -1 &&
									classes[l].search('repeat') === -1 &&
									classes[l].search('fast') === -1 &&
									classes[l].search('slow') === -1

								//if it is animation type classes, then relpace class with new one
								if (condition) {
									newClasses += ` ${value}`
								} else {
									newClasses += ` ${classes[l]}`
								}
							} else {
								newClasses += `${classes[l]} `
							}
						}
					} else {
						//if there is no animation applied already, then just add animation class
						newClasses = `${arr[i][1].class} animate__animated ${value}`
					}
				}

				arr[i][1].class = newClasses
				return true
			} else if (arr[i][2]) {
				if (animationChange(arr[i][2], value)) {
					return true
				}
			}
		}
	}

	useEffect(() => {
		if (delay !== '') {
			const temp = Object.assign({}, pages)
			changeDelay(temp[activePage], delay === 'no-delay' ? 'none' : delay)
			setPages(temp)
		}
	}, [delay])

	const changeDelay = (arr, value) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				//for getting all classes separately
				const temp = arr[i][1].class.split(' ')

				//for removing extra spaces
				const classes = []
				for (let l = 0; l < temp.length; l++) {
					if (temp[l] !== '') classes.push(temp[l])
				}

				//for storing new classes after adding/removing
				let newClasses = ''

				//checking if animation applied.
				if (arr[i][1].class.search('animate__animated') !== -1) {
					//checking if delay applied
					if (arr[i][1].class.search('animate__delay') !== -1) {
						if (value === 'none') {
							for (let l = 0; l < classes.length; l++) {
								//if class is not delay class
								if (classes[l].search('animate__delay') === -1) {
									newClasses += ` ${classes[l]}`
								}
							}
						} else {
							for (let l = 0; l < classes.length; l++) {
								//if class is delay class, then replace new delay class
								if (classes[l].search('animate__delay') !== -1) {
									newClasses += ` ${value}`
								} else {
									// else add remaining classes
									newClasses += ` ${classes[l]}`
								}
							}
						}
					} else {
						// if delay is not applied
						//if value is not none means delay class should be applied
						if (value !== 'none') {
							//adding all the classes
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
							//add delay class in the end of classes
							newClasses += ` ${value}`
						} else if (value === 'none') {
							//adding all the classes
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
						}
					}

					//assigning new classes
					arr[i][1].class = newClasses
				}
				return true
			} else if (arr[i][2]) {
				if (changeDelay(arr[i][2], value)) return true
			}
		}
	}

	useEffect(() => {
		if (speed !== '') {
			const temp = Object.assign({}, pages)
			changeSpeed(temp[activePage], speed === 'normal' ? 'none' : speed)
			setPages(temp)
		}
	}, [speed])

	const changeSpeed = (arr, value) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				//for getting all classes separately
				const temp = arr[i][1].class.split(' ')

				//for removing extra spaces
				const classes = []
				for (let l = 0; l < temp.length; l++) {
					if (temp[l] !== '') classes.push(temp[l])
				}

				//for storing new classes after adding/removing
				let newClasses = ''

				//checking if animation applied.
				if (arr[i][1].class.search('animate__animated') !== -1) {
					//for checking if animation speed class is applied.
					const condition =
						arr[i][1].class.search('animate__slow') !== -1 ||
						arr[i][1].class.search('animate__slower') !== -1 ||
						arr[i][1].class.search('animate__fast') !== -1 ||
						arr[i][1].class.search('animate__faster') !== -1

					if (condition) {
						if (value === 'none') {
							for (let l = 0; l < classes.length; l++) {
								//if class is not speed class
								const condition2 =
									classes[l].search('animate__slow') === -1 &&
									classes[l].search('animate__slower') === -1 &&
									classes[l].search('animate__fast') === -1 &&
									classes[l].search('animate__faster') === -1

								if (condition2) {
									newClasses += ` ${classes[l]}`
								}
							}
						} else {
							for (let l = 0; l < classes.length; l++) {
								//if class is speed class, then replace new speed class
								const condition2 =
									classes[l].search('animate__slow') !== -1 ||
									classes[l].search('animate__slower') !== -1 ||
									classes[l].search('animate__fast') !== -1 ||
									classes[l].search('animate__faster') !== -1

								if (condition2) {
									newClasses += ` ${value}`
								} else {
									// else add remaining classes
									newClasses += ` ${classes[l]}`
								}
							}
						}
					} else {
						// if speed is not applied
						//if value is not none means speed class should be applied
						if (value !== 'none') {
							//adding all the classes
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
							//add speed class in the end of classes
							newClasses += ` ${value}`
						} else if (value === 'none') {
							//adding all the classes
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
						}
					}

					//assigning new classes
					arr[i][1].class = newClasses
				}

				return true
			} else if (arr[i][2]) {
				if (changeSpeed(arr[i][2], value)) return true
			}
		}
	}

	useEffect(() => {
		if (repeat !== '') {
			const temp = Object.assign({}, pages)
			changeRepeat(temp[activePage], repeat === 'no-repeat' ? 'none' : repeat)
			setPages(temp)
		}
	}, [repeat])

	const changeRepeat = (arr, value) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				//for getting all classes separately
				const temp = arr[i][1].class.split(' ')

				//for removing extra spaces
				const classes = []
				for (let l = 0; l < temp.length; l++) {
					if (temp[l] !== '') classes.push(temp[l])
				}

				//for storing new classes after adding/removing
				let newClasses = ''

				//checking if animation applied.
				if (arr[i][1].class.search('animate__animated') !== -1) {
					//checking if repeat applied
					if (arr[i][1].class.search('animate__repeat') !== -1) {
						if (value === 'none') {
							for (let l = 0; l < classes.length; l++) {
								//if class is not repeat class
								if (classes[l].search('animate__repeat') === -1) {
									newClasses += ` ${classes[l]}`
								}
							}
						} else {
							for (let l = 0; l < classes.length; l++) {
								//if class is repeat class, then replace new repeat class
								if (classes[l].search('animate__repeat') !== -1) {
									newClasses += ` ${value}`
								} else {
									// else add remaining classes
									newClasses += ` ${classes[l]}`
								}
							}
						}
					} else {
						// if repeat is not applied
						//if value is not none means repeat class should be applied
						if (value !== 'none') {
							//adding all the classes
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
							//add repeat class in the end of classes
							newClasses += ` ${value}`
						} else if (value === 'none') {
							//adding all the classes
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
						}
					}

					//assigning new classes
					arr[i][1].class = newClasses
				}
				return true
			} else if (arr[i][2]) {
				if (changeRepeat(arr[i][2], value)) return true
			}
		}
	}

	useEffect(() => {
		if (scroll !== '') {
			const temp = Object.assign({}, pages)
			console.log(scroll)
			changeScroll(temp[activePage], scroll === 'true')
			setPages(temp)
		}
	}, [scroll])

	const changeScroll = (arr, value) => {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][1].id === activeElement) {
				//for getting all classes separately
				const temp = arr[i][1].class.split(' ')

				//for removing extra spaces
				const classes = []
				for (let l = 0; l < temp.length; l++) {
					if (temp[l] !== '') classes.push(temp[l])
				}

				//for storing new classes after adding/removing
				let newClasses = ''

				//checking if scroll class is applied
				if (arr[i][1].class.search('animate__animated') !== -1) {
					if (arr[i][1].class.search('wow') !== -1) {
						if (value) {
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
						} else {
							for (let l = 0; l < classes.length; l++) {
								if (classes[l] !== 'wow') {
									newClasses += ` ${classes[l]}`
								}
							}
						}
					} else {
						if (value) {
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
							newClasses += ` wow`
						} else {
							for (let l = 0; l < classes.length; l++) {
								newClasses += ` ${classes[l]}`
							}
						}
					}

					arr[i][1].class = newClasses
				}

				return true
			} else if (arr[i][2]) {
				if (changeScroll(arr[i][2], value)) return true
			}
		}
	}

	return (
		<div className='borders'>
			<p className='second-heading' onClick={() => setShowAnimateProperties(!showAnimateProperties)}>
				Animations <span style={{ display: showAnimateProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showAnimateProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='btn-specific'>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '20px 130px auto',
						marginLeft: '25px',
						textAlign: 'left',
					}}>
					<input
						id='animate-scroll-checkbox'
						style={{ marginTop: '5px' }}
						type='checkbox'
						onChange={e => setScroll(`${e.target.checked}`)}
					/>
					<label>On Scroll</label>
				</div>
				<div className='two'>
					<label>Animation:</label>
					<select id='animate-animation-select' onChange={e => setAnimation(e.target.value)}>
						<option value='none'>None</option>
						<option value='bounce'>Bounce</option>
						<option value='flash'>Flash</option>
						<option value='pulse'>Pulse</option>
						<option value='rubberBand'>RubberBand</option>
						<option value='shakeX'>ShakeX</option>
						<option value='shakeY'>ShakeY</option>
						<option value='headShake'>HeadShake</option>
						<option value='swing'>Swing</option>
						<option value='tada'>Tada</option>
						<option value='wobble'>Wobble</option>
						<option value='jello'>Jello</option>
						<option value='heartBeat'>HeartBeat</option>
						<option value='hinge'>Hinge</option>
						<option value='jackInTheBox'>JackInTheBox</option>
						<option value='rollIn'>RollIn</option>
						<option value='rollOut'>RollOut</option>
						<option value='backInDown'>BackInDown</option>
						<option value='backInLeft'>BackInLeft</option>
						<option value='backInRight'>BackInRight</option>
						<option value='backInUp'>BackInUp</option>
						<option value='bounceIn'>BounceIn</option>
						<option value='bounceInDown'>BounceInDown</option>
						<option value='bounceInLeft'>BounceInLeft</option>
						<option value='bounceInRight'>BounceInRight</option>
						<option value='bounceInUp'>BounceInUp</option>
						<option value='fadeIn'>FadeIn</option>
						<option value='fadeInDown'>FadeInDown</option>
						<option value='fadeInDownBig'>FadeInDownBig</option>
						<option value='fadeInLeft'>FadeInLeft</option>
						<option value='fadeInLeftBig'>FadeInLeftBig</option>
						<option value='fadeInRight'>FadeInRight</option>
						<option value='fadeInRightBig'>FadeInRightBig</option>
						<option value='fadeInUp'>FadeInUp</option>
						<option value='fadeInUpBig'>FadeInUpBig</option>
						<option value='fadeInTopLeft'>FadeInTopLeft</option>
						<option value='fadeInTopRight'>FadeInTopRight</option>
						<option value='fadeInBottomLeft'>FadeInBottomLeft</option>
						<option value='fadeInBottomRight'>FadeInBottomRight</option>
						<option value='flip'>Flip</option>
						<option value='flipInX'>FlipInX</option>
						<option value='flipInY'>FlipInY</option>
						<option value='lightSpeedInRight'>LightSpeedInRight</option>
						<option value='lightSpeedInLeft'>LightSpeedInLeft</option>
						<option value='rotateIn'>RotateIn</option>
						<option value='rotateInDownLeft'>RotateInDownLeft</option>
						<option value='rotateInDownRight'>RotateInDownRight</option>
						<option value='rotateInUpLeft'>RotateInUpLeft</option>
						<option value='rotateInUpRight'>RotateInUpRight</option>
						<option value='zoomIn'>ZoomIn</option>
						<option value='zoomInDown'>ZoomInDown</option>
						<option value='zoomInLeft'>ZoomInLeft</option>
						<option value='zoomInRight'>ZoomInRight</option>
						<option value='zoomInUp'>ZoomInUp</option>
						<option value='slideInDown'>SlideInDown</option>
						<option value='slideInLeft'>SlideInLeft</option>
						<option value='slideInRight'>SlideInRight</option>
						<option value='slideInUp'>SlideInUp</option>
					</select>
				</div>
				<div className='two'>
					<label>Delay:</label>
					<select id='animate-delay-select' onChange={e => setDelay(e.target.value)}>
						<option value='no-delay'>No Delay</option>
						<option value='animate__delay-2s'>2s</option>
						<option value='animate__delay-3s'>3s</option>
						<option value='animate__delay-4s'>4s</option>
						<option value='animate__delay-5s'>5s</option>
					</select>
				</div>
				<div className='two'>
					<label>Speed:</label>
					<select id='animate-speed-select' onChange={e => setSpeed(e.target.value)}>
						<option value='normal'>Normal (1s)</option>
						<option value='animate__fast'>Fast (800ms)</option>
						<option value='animate__faster'>Faster (500ms)</option>
						<option value='animate__slow'>Slow (2s)</option>
						<option value='animate__slower'>Slower (3s)</option>
					</select>
				</div>
				<div className='two'>
					<label>Repeat:</label>
					<select id='animate-repeat-select' onChange={e => setRepeat(e.target.value)}>
						<option value='no-repeat'>1 time</option>
						<option value='animate__repeat-2'>2 times</option>
						<option value='animate__repeat-3'>3 times</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Animate
