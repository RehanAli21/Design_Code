import React, { useEffect, useState } from 'react'

let oldx = 0
let oldy = 0
const Transform = ({
	pages,
	render,
	activePage,
	small,
	setSmall,
	medium,
	setMedium,
	large,
	setLarge,
	xlarge,
	setXlarge,
	width,
	activeElement,
	changedSmall,
	setChangedSmall,
	changedMedium,
	setChangedMedium,
	changedLarge,
	setChangedLarge,
	changedXlarge,
	setChangedXlarge,
	showLayer,
}) => {
	const [widthUnit, setWidthUnit] = useState('px')
	const [heightUnit, setHeighthUnit] = useState('px')
	const [widths, setWidths] = useState(`0`)
	const [heights, setHeights] = useState(`0`)
	const [mlUnit, setMLUnit] = useState('em')
	const [mtUnit, setMTUnit] = useState('em')
	const [marginLeft, setMarginLeft] = useState(`0`)
	const [marginTop, setMarginTop] = useState(`0`)

	//For Default input values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const widthInput = document.getElementById('a-t-w')
			const heightInput = document.getElementById('a-t-h')
			const marginLeftInput = document.getElementById('a-t-ml')
			const marginTopInput = document.getElementById('a-t-mt')

			if (width < 540) {
				widthInput.value = small.width ? small.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = small.height ? small.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = small.marginLeft ? small.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = small.marginTop ? small.marginTop.replace(/[^\d.-]/g, '') : '0'
			} else if (width < 720) {
				widthInput.value = medium.width ? medium.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = medium.height ? medium.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = medium.marginLeft ? medium.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = medium.marginTop ? medium.marginTop.replace(/[^\d.-]/g, '') : '0'
			} else if (width < 970) {
				widthInput.value = large.width ? large.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = large.height ? large.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = large.marginLeft ? large.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = large.marginTop ? large.marginTop.replace(/[^\d.-]/g, '') : '0'
			} else {
				widthInput.value = xlarge.width ? xlarge.width.replace(/[^\d.-]/g, '') : '0'
				heightInput.value = xlarge.height ? xlarge.height.replace(/[^\d.-]/g, '') : '0'
				marginLeftInput.value = xlarge.marginLeft ? xlarge.marginLeft.replace(/[^\d.-]/g, '') : '0'
				marginTopInput.value = xlarge.marginTop ? xlarge.marginTop.replace(/[^\d.-]/g, '') : '0'
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	useEffect(() => {
		const conditions = activeElement !== '' && activeElement !== activePage && showLayer

		if (conditions) {
			let e = document.getElementById(activeElement)
			if (e !== null) {
				let p = document.getElementById(activeElement).parentElement

				const upperLayer = document.getElementById('ul-container')
				if (upperLayer !== null) {
					upperLayer.remove()
				}

				const element = document.createElement('div')
				element.innerHTML += `<div id='ul-container' class='ul-container'>
			<div
			style="width: ${e.clientWidth}px; height: ${e.clientHeight}px; margin-left: ${e.offsetLeft}px; margin-top: ${e.offsetTop}px;"
					class='upper-layer'
					id='upper-layer'>
					<div
						draggable='true'
						id='mover'
						class='mover'
						style="left: ${(e.clientWidth - 10) / 2.1}px">
						<div class='line'></div>
					</div>
					<div
						draggable='true'
						class='top'
						id='upperlayer-t'
						style="left: ${(e.clientWidth - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='bottom'
						id='upperlayer-b'
						style="left: ${(e.clientWidth - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='left'
						id='upperlayer-l'
						style="top: ${(e.clientHeight - 10) / 2.1}px"></div>
					<div
						draggable='true'
						class='right'
						id='upperlayer-r'
						style="top: ${(e.clientHeight - 10) / 2.1}px"></div>
				</div>
			</div>`
				p.appendChild(element)

				addEvent('mover', move)

				addEvent('upperlayer-l', WidthChange)
				addEvent('upperlayer-r', WidthChange)
				addEvent('upperlayer-b', HeightChange)
				addEvent('upperlayer-t', HeightChange)
			}
		} else if (activeElement === activePage || !showLayer) {
			const upperLayer = document.getElementById('ul-container')
			if (upperLayer !== null) {
				upperLayer.remove()
			}
		}
	}, [activePage, activeElement, width, pages, render, showLayer])

	const addEvent = (e, func) => document.getElementById(e).addEventListener('drag', func)

	const move = e => {
		let ele = document.getElementById(activeElement)
		let upperlayer = document.getElementById('ul-container')
		let ml = ele.style.marginLeft.split('p')[0]
		let mt = ele.style.marginTop.split('p')[0]

		if (e.pageX > oldx) {
			ml++
		} else if (e.pageX < oldx) {
			if (ml > 0) ml--
		}

		if (e.pageY > oldy) {
			mt++
		} else if (e.pageY < oldy) {
			if (ml > 0) mt--
		}

		if (upperlayer) {
			upperlayer.style.marginLeft = `${ml}px`
			upperlayer.style.marginTop = `${mt}px`
		}

		setMLUnit('px')
		setMarginLeft(ml)
		setMTUnit('px')
		setMarginTop(mt)
		if (document.getElementById('a-t-mlu')) document.getElementById('a-t-mlu').value = 'px'
		if (document.getElementById('a-t-mtu')) document.getElementById('a-t-mtu').value = 'px'

		oldy = e.pageY
		oldx = e.pageX
	}

	const HeightChange = e => {
		const ele = document.getElementById(activeElement)
		const upperlayer = document.getElementById('ul-container')

		let height = ele.style.height.split('p')[0]

		if (e.pageY > oldy) {
			height++
		} else if (e.pageY < oldy) {
			height--
		}

		upperlayer.style.height = `${height}px`
		setHeights(height)
		setHeighthUnit('px')

		oldy = e.pageY
	}

	const WidthChange = e => {
		const ele = document.getElementById(activeElement)
		const upperlayer = document.getElementById('ul-container')

		let width = ele.style.width.split('p')[0]

		if (e.pageX > oldx) {
			width++
		} else if (e.pageX < oldx) {
			width--
		}

		upperlayer.style.width = `${width}px`
		setWidths(width)
		setWidthUnit('px')

		oldx = e.pageX
	}

	//For width change from input
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedWidth = `${widths}${widthUnit}`
			if (width < 540) {
				setProperties(small, setSmall, 'width', changedWidth)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'width', changedWidth)
				if (!changedLarge) setProperties(large, setLarge, 'width', changedWidth)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'width', changedWidth)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'width', changedWidth)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'width', changedWidth)
				if (!changedLarge) setProperties(large, setLarge, 'width', changedWidth)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'width', changedWidth)
			} else if (width < 970) {
				setProperties(large, setLarge, 'width', changedWidth)
				setChangedLarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'width', changedWidth)
				if (!changedSmall) setProperties(small, setSmall, 'width', changedWidth)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'width', changedWidth)
			} else {
				setProperties(xlarge, setXlarge, 'width', changedWidth)
				setChangedXlarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'width', changedWidth)
				if (!changedLarge) setProperties(large, setLarge, 'width', changedWidth)
				if (!changedSmall) setProperties(small, setSmall, 'width', changedWidth)
			}
		}
	}, [widths, widthUnit])

	//For height change from input
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedHeight = `${heights}${heightUnit}`
			if (width < 540) {
				setProperties(small, setSmall, 'height', changedHeight)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'height', changedHeight)
				if (!changedLarge) setProperties(large, setLarge, 'height', changedHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'height', changedHeight)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'height', changedHeight)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'height', changedHeight)
				if (!changedLarge) setProperties(large, setLarge, 'height', changedHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'height', changedHeight)
			} else if (width < 970) {
				setProperties(large, setLarge, 'height', changedHeight)
				setChangedLarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'height', changedHeight)
				if (!changedSmall) setProperties(small, setSmall, 'height', changedHeight)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'height', changedHeight)
			} else {
				setProperties(xlarge, setXlarge, 'height', changedHeight)
				setChangedXlarge(true)
				if (!changedMedium) setProperties(medium, setMedium, 'height', changedHeight)
				if (!changedLarge) setProperties(large, setLarge, 'height', changedHeight)
				if (!changedSmall) setProperties(small, setSmall, 'height', changedHeight)
			}
		}
	}, [heights, heightUnit])

	//For margin left change from input
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedmarginLeft = `${marginLeft}${mlUnit}`
			if (width < 540) {
				setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				if (!changedLarge) setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				if (!changedLarge) setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
			} else if (width < 970) {
				setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
				setChangedLarge(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				if (!changedMedium) setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
			} else {
				setProperties(xlarge, setXlarge, 'marginLeft', changedmarginLeft)
				setChangedXlarge(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginLeft', changedmarginLeft)
				if (!changedMedium) setProperties(medium, setMedium, 'marginLeft', changedmarginLeft)
				if (!changedLarge) setProperties(large, setLarge, 'marginLeft', changedmarginLeft)
			}
		}
	}, [marginLeft, mlUnit])

	//For margin top change from input
	useEffect(() => {
		if (small && medium && large && xlarge) {
			const changedmarginTop = `${marginTop}${mtUnit}`
			if (width < 540) {
				setProperties(small, setSmall, 'marginTop', changedmarginTop)
				setChangedSmall(true)

				if (!changedMedium) setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				if (!changedLarge) setProperties(large, setLarge, 'marginTop', changedmarginTop)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				setChangedMedium(true)

				if (!changedSmall) setProperties(small, setSmall, 'marginTop', changedmarginTop)
				if (!changedLarge) setProperties(large, setLarge, 'marginTop', changedmarginTop)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
			} else if (width < 970) {
				setProperties(large, setLarge, 'marginTop', changedmarginTop)
				setChangedLarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				if (!changedSmall) setProperties(small, setSmall, 'marginTop', changedmarginTop)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
			} else {
				setProperties(xlarge, setXlarge, 'marginTop', changedmarginTop)
				setChangedXlarge(true)

				if (!changedMedium) setProperties(medium, setMedium, 'marginTop', changedmarginTop)
				if (!changedLarge) setProperties(large, setLarge, 'marginTop', changedmarginTop)
				if (!changedSmall) setProperties(small, setSmall, 'marginTop', changedmarginTop)
			}
		}
	}, [marginTop, mtUnit])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='w-h borders'>
			<p className='second-heading'>TRANSFORM</p>
			<div className='one'>
				<div className='w'>
					<label>W : </label>
					<input
						id='a-t-w'
						onChange={e => setWidths(e.target.value)}
						type='number'
						min='0'
						max={widthUnit === '%' ? '100' : ''}
					/>
					<select onChange={e => setWidthUnit(e.target.value.toLowerCase())}>
						<option>PX</option>
						<option>%</option>
					</select>
				</div>
				<div className='h'>
					<label>H : </label>
					<input
						id='a-t-h'
						onChange={e => setHeights(e.target.value)}
						type='number'
						min='0'
						max={heightUnit === '%' ? '100' : ''}
					/>
					<select onChange={e => setHeighthUnit(e.target.value.toLowerCase())}>
						<option>PX</option>
						<option>VH</option>
						<option>%</option>
					</select>
				</div>
				<div className='x'>
					<label>X : </label>
					<input id='a-t-ml' onChange={e => setMarginLeft(e.target.value)} type='number' min='0' />
					<select id='a-t-mlu' onChange={e => setMLUnit(e.target.value.toLowerCase())}>
						<option>EM</option>
						<option>REM</option>
						<option>PX</option>
					</select>
				</div>
				<div className='y'>
					<label>Y : </label>
					<input id='a-t-mt' onChange={e => setMarginTop(e.target.value)} type='number' min='0' />
					<select id='a-t-mtu' onChange={e => setMTUnit(e.target.value.toLowerCase())}>
						<option>EM</option>
						<option>REM</option>
						<option>PX</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Transform
