import React from 'react'
import DivProperties from './DivProperties'

const Specific = ({
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
	setChangedXlarge,
	activeElement,
	activePage,
}) => {
	const ele = document.getElementById(activeElement)

	if (activeElement === activePage || !ele) return <div></div>

	return ele.tagName === 'DIV' ? (
		<DivProperties
			small={small}
			setSmall={setSmall}
			medium={medium}
			setMedium={setMedium}
			large={large}
			setLarge={setLarge}
			xlarge={xlarge}
			setXlarge={setXlarge}
			width={width}
			changedSmall={changedSmall}
			setChangedSmall={setChangedSmall}
			changedMedium={changedMedium}
			setChangedMedium={setChangedMedium}
			changedLarge={changedLarge}
			setChangedLarge={setChangedLarge}
			changedXlarge={changedXlarge}
			setChangedXlarge={setChangedXlarge}
		/>
	) : (
		<div></div>
	)
}

export default Specific
