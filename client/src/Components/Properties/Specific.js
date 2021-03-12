import React from 'react'
import DivProperties from './DivProperties'

const Specific = ({ type }) => {
	return type === 'div' ? <DivProperties /> : <div></div>
}

export default Specific
