import React, { useState } from 'react'

let oldx = 0
let oldy = 0

const UpperLayer = ({
	parentWidth,
	parentHeight,
	width,
	height,
	marginLeft,
	marginTop,
	setMarginLeft,
	setMarginTop
}) => {
	const [l, setL] = useState(marginLeft)
	const [t, setT] = useState(marginTop)
	const [w, setW] = useState(width)
	const [h, setH] = useState(height)

	const move = e => {
		if (e.pageX > oldx) {
			if (l < parentWidth - width) setL(l + 1)
		} else if (e.pageX < oldx) {
			if (l >= 0) setL(l - 1)
		}

		if (e.pageY > oldy) {
			if (t < parentHeight - height) setT(t + 1)
		} else if (e.pageY < oldy) {
			if (t >= 0) setT(t - 1)
		}

		oldy = e.pageY
		oldx = e.pageX
	}

	const widthHeight = e => {
		if (e.pageX > oldx) {
			if (width < parentWidth) setW(w + 1)
		} else if (e.pageX < oldx) {
			if (width >= 0) setW(w - 1)
		}

		if (e.pageY > oldy) {
			if (height < parentHeight) setH(h + 1)
		} else if (e.pageY < oldy) {
			if (height >= 0) setH(h - 1)
		}

		oldy = e.pageY
		oldx = e.pageX
	}

	return (
		<div id='ul-container' className='ul-container'>
			<div
				style={{ width: w, height: h, marginLeft: l, marginTop: t }}
				className='upper-layer'
				id='upper-layer'>
				<div
					onDrag={move}
					draggable='true'
					id='mover'
					className='mover'>
					<div className='line'></div>
				</div>
				<div
					draggable='true'
					onDrag={widthHeight}
					id='tl'
					className='top-left size'></div>
				<div
					draggable='true'
					id='tr'
					onDrag={widthHeight}
					className='top-right'></div>
				<div
					draggable='true'
					id='bl'
					onDrag={widthHeight}
					className='bottom-left'></div>
				<div
					draggable='true'
					id='br'
					onDrag={widthHeight}
					className='bottom-right'></div>
			</div>
		</div>
	)
}

export default UpperLayer
