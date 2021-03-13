import React from 'react'
import DivProperties from './DivProperties'

const Specific = ({ activeElement }) => {
	const ele = document.getElementById(activeElement)

	return ele && ele.tagName === 'DIV' ? <DivProperties /> : <div></div>
}

export default Specific
