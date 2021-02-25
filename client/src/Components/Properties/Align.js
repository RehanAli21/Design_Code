import React, { useState } from 'react'

const Align = () => {
	const [selfAlign, setSelfAlign] = useState('left')
	const [textAlign, setTextAlign] = useState('left')

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
