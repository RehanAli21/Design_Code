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
	width,
	changedSmall,
	setChangedSmall,
	changedMedium,
	setChangedMedium,
	changedLarge,
	setChangedLarge,
	changedXlarge,
	setChangedXlarge
}) => {
	const [selfAlign, setSelfAlign] = useState('left')
	const [textAlign, setTextAlign] = useState('left')

	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setSelfAlignProperty(small, setSmall)
				setChangedSmall(true)
				if (!changedMedium) setSelfAlignProperty(medium, setMedium)
				if (!changedLarge) setSelfAlignProperty(large, setLarge)
				if (!changedXlarge) setSelfAlignProperty(xlarge, setXlarge)
			} else if (width < 720) {
				setSelfAlignProperty(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setSelfAlignProperty(small, setSmall)
				if (!changedLarge) setSelfAlignProperty(large, setLarge)
				if (!changedXlarge) setSelfAlignProperty(xlarge, setXlarge)
			} else if (width < 970) {
				setSelfAlignProperty(large, setLarge)
				setChangedLarge(true)
				if (!changedMedium) setSelfAlignProperty(medium, setMedium)
				if (!changedSmall) setSelfAlignProperty(small, setSmall)
				if (!changedXlarge) setSelfAlignProperty(xlarge, setXlarge)
			} else {
				setSelfAlignProperty(xlarge, setXlarge)
				setChangedXlarge(true)
				if (!setChangedMedium) setSelfAlignProperty(medium, setMedium)
				if (!setChangedLarge) setSelfAlignProperty(large, setLarge)
				if (!changedSmall) setSelfAlignProperty(small, setSmall)
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
				setChangedSmall(true)
				if (!changedMedium) setTextAlignProperty(medium, setMedium)
				if (!changedLarge) setTextAlignProperty(large, setLarge)
				if (!changedXlarge) setTextAlignProperty(xlarge, setXlarge)
			} else if (width < 720) {
				setTextAlignProperty(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setTextAlignProperty(small, setSmall)
				if (!changedLarge) setTextAlignProperty(large, setLarge)
				if (!changedXlarge) setTextAlignProperty(xlarge, setXlarge)
			} else if (width < 970) {
				setTextAlignProperty(large, setLarge)
				setChangedLarge(true)
				if (!changedMedium) setTextAlignProperty(medium, setMedium)
				if (!changedSmall) setTextAlignProperty(small, setSmall)
				if (!changedXlarge) setTextAlignProperty(xlarge, setXlarge)
			} else {
				setTextAlignProperty(xlarge, setXlarge)
				setChangedXlarge(true)
				if (!changedMedium) setTextAlignProperty(medium, setMedium)
				if (!changedLarge) setTextAlignProperty(large, setLarge)
				if (!changedSmall) setTextAlignProperty(small, setSmall)
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
						<button className={selfAlign === 'left' ? 'bb' : 'none'} onClick={() => setSelfAlign('left')}>
							L
						</button>
						<button className={selfAlign === 'center' ? 'bb' : 'none'} onClick={() => setSelfAlign('center')}>
							C
						</button>
						<button className={selfAlign === 'right' ? 'bb' : 'none'} onClick={() => setSelfAlign('right')}>
							R
						</button>
					</li>
					<li className='two'>
						<label>Text Align: </label>
						<button className={textAlign === 'left' ? 'bb' : 'none'} onClick={() => setTextAlign('left')}>
							L
						</button>
						<button className={textAlign === 'center' ? 'bb' : 'none'} onClick={() => setTextAlign('center')}>
							C
						</button>
						<button className={textAlign === 'right' ? 'bb' : 'none'} onClick={() => setTextAlign('right')}>
							R
						</button>
						<button className={textAlign === 'justify' ? 'bb' : 'none'} onClick={() => setTextAlign('justify')}>
							J
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Align
