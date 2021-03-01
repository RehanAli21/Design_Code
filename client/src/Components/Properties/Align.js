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
				if (medium.marginLeft === '' && medium.marginRight === '')
					setSelfAlignProperty(medium, setMedium)
				if (large.marginLeft === '' && large.marginRight === '')
					setSelfAlignProperty(large, setLarge)
				if (xlarge.marginLeft === '' && xlarge.marginRight === '')
					setSelfAlignProperty(xlarge, setXlarge)
			} else if (width < 720) {
				setSelfAlignProperty(medium, setMedium)
				if (small.marginLeft === '' && small.marginRight === '')
					setSelfAlignProperty(small, setSmall)
				if (large.marginLeft === '' && large.marginRight === '')
					setSelfAlignProperty(large, setLarge)
				if (xlarge.marginLeft === '' && xlarge.marginRight === '')
					setSelfAlignProperty(xlarge, setXlarge)
			} else if (width < 970) {
				setSelfAlignProperty(large, setLarge)
				if (medium.marginLeft === '' && medium.marginRight === '')
					setSelfAlignProperty(medium, setMedium)
				if (small.marginLeft === '' && small.marginRight === '')
					setSelfAlignProperty(small, setSmall)
				if (xlarge.marginLeft === '' && xlarge.marginRight === '')
					setSelfAlignProperty(xlarge, setXlarge)
			} else {
				setSelfAlignProperty(xlarge, setXlarge)
				if (medium.marginLeft === '' && medium.marginRight === '')
					setSelfAlignProperty(medium, setMedium)
				if (large.marginLeft === '' && large.marginRight === '')
					setSelfAlignProperty(large, setLarge)
				if (small.marginLeft === '' && small.marginRight === '')
					setSelfAlignProperty(small, setSmall)
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
				if (medium.textAlign) setTextAlignProperty(medium, setMedium)
				if (large.textAlign) setTextAlignProperty(large, setLarge)
				if (xlarge.textAlign) setTextAlignProperty(xlarge, setXlarge)
			} else if (width < 720) {
				setTextAlignProperty(medium, setMedium)
				if (small.textAlign) setTextAlignProperty(small, setSmall)
				if (large.textAlign) setTextAlignProperty(large, setLarge)
				if (xlarge.textAlign) setTextAlignProperty(xlarge, setXlarge)
			} else if (width < 970) {
				setTextAlignProperty(large, setLarge)
				if (medium.textAlign) setTextAlignProperty(medium, setMedium)
				if (small.textAlign) setTextAlignProperty(small, setSmall)
				if (xlarge.textAlign) setTextAlignProperty(xlarge, setXlarge)
			} else {
				setTextAlignProperty(xlarge, setXlarge)
				if (medium.textAlign) setTextAlignProperty(medium, setMedium)
				if (large.textAlign) setTextAlignProperty(large, setLarge)
				if (small.textAlign) setTextAlignProperty(small, setSmall)
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
