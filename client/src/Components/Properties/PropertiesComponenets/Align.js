import React, { useState, useEffect, useContext } from 'react'
import Tip from './Tip'
import { PageContext } from '../../Contexts/PageContext'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Align = () => {
	const {
		small,
		setSmall,
		medium,
		setMedium,
		large,
		setLarge,
		xlarge,
		setXlarge,
		changedSmall,
		setChangedSmall,
		changedMedium,
		setChangedMedium,
		changedLarge,
		setChangedLarge,
		changedXlarge,
		setChangedXlarge,
		showAlignProperties,
		setShowAlignProperties,
	} = useContext(PropertiesContext)

	const { width, activeElement, sBreakPoint, mBreakPoint, lBreakPoint } = useContext(PageContext)

	const [selfAlign, setSelfAlign] = useState('left')
	const [textAlign, setTextAlign] = useState('left')

	const [isDiv, setIsDiv] = useState(false)
	const [isImg, setIsImg] = useState(false)
	const [isDivGrid, setIsDivGrid] = useState(false)
	const [isList, setIsList] = useState(false)

	//For setting default values
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < sBreakPoint) {
				setTextAlign(small.textAlign)
				if (small.marginLeft === 'auto' && small.marginRight === 'auto') {
					setSelfAlign('center')
				} else if (small.marginLeft === '0px' && small.marginRight === 'auto') {
					setSelfAlign('left')
				} else if (small.marginLeft === 'auto' && small.marginRight === '0px') {
					setSelfAlign('right')
				}
			} else if (width < mBreakPoint) {
				setTextAlign(medium.textAlign)
				if (medium.marginLeft === 'auto' && medium.marginRight === 'auto') {
					setSelfAlign('center')
				} else if (medium.marginLeft === '0px' && medium.marginRight === 'auto') {
					setSelfAlign('left')
				} else if (medium.marginLeft === 'auto' && medium.marginRight === '0px') {
					setSelfAlign('right')
				}
			} else if (width < lBreakPoint) {
				setTextAlign(large.textAlign)
				if (large.marginLeft === 'auto' && large.marginRight === 'auto') {
					setSelfAlign('center')
				} else if (large.marginLeft === '0px' && large.marginRight === 'auto') {
					setSelfAlign('left')
				} else if (large.marginLeft === 'auto' && large.marginRight === '0px') {
					setSelfAlign('right')
				}
			} else {
				setTextAlign(xlarge.textAlign)
				if (xlarge.marginLeft === 'auto' && xlarge.marginRight === 'auto') {
					setSelfAlign('center')
				} else if (xlarge.marginLeft === '0px' && xlarge.marginRight === 'auto') {
					setSelfAlign('left')
				} else if (xlarge.marginLeft === 'auto' && xlarge.marginRight === '0px') {
					setSelfAlign('right')
				}
			}
		}
	}, [width, activeElement, small, medium, large, xlarge])

	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < sBreakPoint) {
				setSelfAlignProperty(small, setSmall)
				setChangedSmall(true)
				if (!changedMedium) setSelfAlignProperty(medium, setMedium)
				if (!changedLarge) setSelfAlignProperty(large, setLarge)
				if (!changedXlarge) setSelfAlignProperty(xlarge, setXlarge)
			} else if (width < mBreakPoint) {
				setSelfAlignProperty(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setSelfAlignProperty(small, setSmall)
				if (!changedLarge) setSelfAlignProperty(large, setLarge)
				if (!changedXlarge) setSelfAlignProperty(xlarge, setXlarge)
			} else if (width < lBreakPoint) {
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
			if (width < sBreakPoint) {
				setTextAlignProperty(small, setSmall)
				setChangedSmall(true)
				if (!changedMedium) setTextAlignProperty(medium, setMedium)
				if (!changedLarge) setTextAlignProperty(large, setLarge)
				if (!changedXlarge) setTextAlignProperty(xlarge, setXlarge)
			} else if (width < mBreakPoint) {
				setTextAlignProperty(medium, setMedium)
				setChangedMedium(true)
				if (!changedSmall) setTextAlignProperty(small, setSmall)
				if (!changedLarge) setTextAlignProperty(large, setLarge)
				if (!changedXlarge) setTextAlignProperty(xlarge, setXlarge)
			} else if (width < lBreakPoint) {
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

	//For setting align properties for different components
	useEffect(() => {
		const ele = document.getElementById(activeElement)
		if (ele) {
			if (ele.tagName === 'DIV') {
				setIsDiv(true)
				if (width < sBreakPoint) {
					setIsDivGrid(small.display === 'grid')
				} else if (width < mBreakPoint) {
					setIsDivGrid(medium.display === 'grid')
				} else if (width < lBreakPoint) {
					setIsDivGrid(large.display === 'grid')
				} else {
					setIsDivGrid(xlarge.display === 'grid')
				}
				setIsImg(false)
				setIsList(false)
			} else if (ele.tagName === 'IMG') {
				setIsImg(true)
				setIsDiv(false)
				setIsDivGrid(false)
				setIsList(false)
			} else if (ele.tagName === 'OL' || ele.tagName === 'UL' || ele.tagName === 'LI') {
				setIsImg(false)
				setIsDiv(false)
				setIsDivGrid(false)
				setIsList(true)
			} else {
				setIsImg(false)
				setIsDiv(false)
				setIsDivGrid(false)
				setIsList(false)
			}
		}
	}, [activeElement, small, medium, large, xlarge])

	return (
		<div className='align borders' style={{ display: isImg || isList ? 'none' : 'block' }}>
			<p className='second-heading' onClick={() => setShowAlignProperties(!showAlignProperties)}>
				ALIGNMENT <span style={{ display: showAlignProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showAlignProperties ? 'none' : 'inline' }}>&#9654;</span>
				<Tip
					msg={[
						"This component is for alignment of the elements it changes according to element and it's style.",
						<hr className='tipHr' />,
						"Self Align is for element's own alignment, and ",
						<hr className='tipHr' />,
						"Object Align is for element's children (inner elements) alignment",
					]}
				/>
			</p>
			<div style={{ display: showAlignProperties ? 'block' : 'none' }}>
				<ul className='align-ul'>
					<li style={{ display: isDiv ? 'grid' : 'none' }} className='one'>
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
					<li className='two' style={{ display: isDivGrid ? 'none' : 'grid' }}>
						<label>{isDiv ? 'ObjectAlign: ' : 'Text Align: '}</label>
						<button className={textAlign === 'left' ? 'bb' : 'none'} onClick={() => setTextAlign('left')}>
							L
						</button>
						<button className={textAlign === 'center' ? 'bb' : 'none'} onClick={() => setTextAlign('center')}>
							C
						</button>
						<button className={textAlign === 'right' ? 'bb' : 'none'} onClick={() => setTextAlign('right')}>
							R
						</button>
						<button
							style={{ display: isDiv ? 'none' : 'block' }}
							className={textAlign === 'justify' ? 'bb' : 'none'}
							onClick={() => setTextAlign('justify')}>
							J
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Align
