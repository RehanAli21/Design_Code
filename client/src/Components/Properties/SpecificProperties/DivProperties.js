import React, { useState } from 'react'

const DivProperties = () => {
	const [showGrid, setShowGrid] = useState(false)

	return (
		<div className='borders r-c'>
			<p className='second-heading'>Div Properties</p>
			<div className='grid'>
				<input onChange={() => setShowGrid(!showGrid)} id='r-c-grid' type='checkbox' />
				<label>Rows / Columns</label>
			</div>
			<div className='row-col-div' style={{ display: showGrid ? 'grid' : 'none' }}>
				<div className='margins two-rows'>
					<div className='gap'>
						<label>Row Gap: </label>
						<input type='number' defaultValue='0' min='0' id='r-c-rowgap' />
					</div>
					<div className='gap'>
						<label>Column Gap: </label>
						<input type='number' defaultValue='0' min='0' id='r-c-colgap' />
					</div>
				</div>
				<div className='margins'>
					<div>
						<div className='two'>
							<label>No: Rows</label>
							<input type='number' min='0' max='12' placeholder='No: rows' id='r-c-row' />
						</div>
						<div className='two'>
							<label>No: Columns</label>
							<input type='number' min='0' max='12' placeholder='No: cols' id='r-c-col' />
						</div>
					</div>
					<div className='two'>
						<div className='rows'>
							<div className='invalue'>
								<input type='number' defaultValue='0' />
								<select>
									<option>PX</option>
									<option>VH</option>
									<option>EM</option>
									<option>REM</option>
								</select>
							</div>
						</div>
						<div className='cols'>
							<div className='invalue'>
								<input type='number' defaultValue='0' />
								<select>
									<option>%</option>
									<option>VW</option>
									<option>FR</option>
									<option>PX</option>
									<option>EM</option>
									<option>REM</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DivProperties
