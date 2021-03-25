import React, { useContext, useEffect, useState } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const DivProperties = ({ width, activeElement }) => {
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
	} = useContext(PropertiesContext)

	const [grid, setGrid] = useState(false)
	const [rowGap, setRowGap] = useState('0px')
	const [columnGap, setColumnGap] = useState('0px')

	//For applying grid
	useEffect(() => {
		if (small && medium && large && xlarge) {
			if (width < 540) {
				setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
			} else if (width < 720) {
				setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
			} else if (width < 970) {
				setProperties(large, setLarge, 'display', grid ? 'grid' : '')
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
			} else {
				setProperties(xlarge, setXlarge, 'display', grid ? 'grid' : '')
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'display', grid ? 'grid' : '')
				if (!changedMedium) setProperties(medium, setMedium, 'display', grid ? 'grid' : '')
				if (!changedLarge) setProperties(large, setLarge, 'display', grid ? 'grid' : '')
			}
		}
	}, [grid])

	//For Row-Gap
	useEffect(() => {
		if (small && medium && large && xlarge && grid) {
			if (width < 540) {
				setProperties(small, setSmall, 'rowGap', rowGap)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'rowGap', rowGap)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else if (width < 970) {
				setProperties(large, setLarge, 'rowGap', rowGap)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'rowGap', rowGap)
				if (!changedMedium) setProperties(medium, setMedium, 'rowGap', rowGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'rowGap', rowGap)
			} else {
				setProperties(xlarge, setXlarge, 'rowGap', rowGap)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'rowGap', rowGap)
				if (!changedMedium) setProperties(medium, setMedium, 'rowGap', rowGap)
				if (!changedLarge) setProperties(large, setLarge, 'rowGap', rowGap)
			}
		}
	}, [rowGap])

	//For Col-Gap
	useEffect(() => {
		if (small && medium && large && xlarge && grid) {
			if (width < 540) {
				setProperties(small, setSmall, 'columnGap', columnGap)
				setChangedSmall(true)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', columnGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', columnGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', columnGap)
			} else if (width < 720) {
				setProperties(medium, setMedium, 'columnGap', columnGap)
				setChangedMedium(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', columnGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', columnGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', columnGap)
			} else if (width < 970) {
				setProperties(large, setLarge, 'columnGap', columnGap)
				setChangedLarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', columnGap)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', columnGap)
				if (!changedXlarge) setProperties(xlarge, setXlarge, 'columnGap', columnGap)
			} else {
				setProperties(xlarge, setXlarge, 'columnGap', columnGap)
				setChangedXlarge(true)
				if (!changedSmall) setProperties(small, setSmall, 'columnGap', columnGap)
				if (!changedMedium) setProperties(medium, setMedium, 'columnGap', columnGap)
				if (!changedLarge) setProperties(large, setLarge, 'columnGap', columnGap)
			}
		}
	}, [columnGap])

	const setProperties = (obj, setObj, propertyName, property) => {
		const temp = Object.assign({}, obj)
		temp[propertyName] = property
		setObj(temp)
	}

	return (
		<div className='borders r-c'>
			<p className='second-heading'>Div Properties</p>
			<div className='grid'>
				<input onChange={e => setGrid(!grid)} id='r-c-grid' type='checkbox' />
				<label>Rows / Columns</label>
			</div>
			<div className='row-col-div' style={{ display: grid ? 'grid' : 'none' }}>
				<div className='margins two-rows'>
					<div className='gap'>
						<label>Row Gap: </label>
						<input
							onChange={e => setRowGap(`${e.target.value}px`)}
							type='number'
							defaultValue='0'
							min='0'
							id='r-c-rowgap'
						/>
					</div>
					<div className='gap'>
						<label>Column Gap: </label>
						<input
							onChange={e => setColumnGap(`${e.target.value}px`)}
							type='number'
							defaultValue='0'
							min='0'
							id='r-c-colgap'
						/>
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
