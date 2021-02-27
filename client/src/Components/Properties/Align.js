import React, { useState, useEffect } from 'react'

const Align = ({
	small,
	setSmall,
	medium,
	setMedium,
	large,
	setLarge,
	xlarge,
	setXlarge,
	width
}) => {
	const [selfAlign, setSelfAlign] = useState('left')
	const [textAlign, setTextAlign] = useState('left')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setSelfAlignProperty(small, setSmall)
			} else if (width < 720) {
				setSelfAlignProperty(medium, setMedium)
			} else if (width < 970) {
				setSelfAlignProperty(large, setLarge)
			} else {
				setSelfAlignProperty(xlarge, setXlarge)
			}
		}
	}, [selfAlign])

	const setSelfAlignProperty = (obj, setObj) => {
		const temp = Object.assign({}, obj)
		if (selfAlign === 'left') {
			temp.marginLeft = '0px'
			temp.marginRight = 'auto'
		} else if (selfAlign === 'right') {
			temp.marginLeft = 'auto'
			temp.marginRight = '0px'
		} else if (selfAlign === 'center') {
			temp.marginLeft = 'auto'
			temp.marginRight = 'auto'
		}
		setObj(temp)
	}

	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setTextAlignProperty(small, setSmall)
			} else if (width < 720) {
				setTextAlignProperty(medium, setMedium)
			} else if (width < 970) {
				setTextAlignProperty(large, setLarge)
			} else {
				setTextAlignProperty(xlarge, setXlarge)
			}
		}
	}, [textAlign])

	const setTextAlignProperty = (obj, setObj) => {
		if (obj.textAlign !== textAlign) {
			const temp = Object.assign({}, obj)
			temp.textAlign = textAlign
			setObj(temp)
		}
	}

	return (
		<div className='align borders'>
			<p className='second-heading'>ALIGNMENT</p>
			<div>
				<ul className='align-ul'>
					<li className='one'>
						<label>Self Align: </label>
						<button onClick={() => setSelfAlign('left')}>L</button>
						<button onClick={() => setSelfAlign('center')}>
							C
						</button>
						<button onClick={() => setSelfAlign('right')}>R</button>
					</li>
					<li className='two'>
						<label>Text Align: </label>
						<button onClick={() => setTextAlign('left')}>L</button>
						<button onClick={() => setTextAlign('center')}>
							C
						</button>
						<button onClick={() => setTextAlign('right')}>R</button>
						<button onClick={() => setTextAlign('justify')}>
							J
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Align
