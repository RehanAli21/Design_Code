import React, { useContext } from 'react'
import { PropertiesContext } from '../../Contexts/PropertiesContext'

const Animate = () => {
	const { showAnimateProperties, setShowAnimateProperties } = useContext(PropertiesContext)
	return (
		<div className='borders'>
			<p className='second-heading' onClick={() => setShowAnimateProperties(!showAnimateProperties)}>
				Animations <span style={{ display: showAnimateProperties ? 'inline' : 'none' }}>&#9660;</span>
				<span style={{ display: showAnimateProperties ? 'none' : 'inline' }}>&#9654;</span>
			</p>
			<div className='btn-specific'>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '20px 130px auto',
						marginLeft: '25px',
						textAlign: 'left',
					}}>
					<input id='animate-scroll-checkbox' style={{ marginTop: '5px' }} type='checkbox' />
					<label>On Scroll</label>
				</div>
				<div className='two'>
					<label>Animation:</label>
					<select id='animate-animation-select'>
						<option value='none'>None</option>
						<option value='bounce'>Bounce</option>
						<option value='flash'>Flash</option>
						<option value='pulse'>Pulse</option>
						<option value='rubberBand'>RubberBand</option>
						<option value='shakeX'>ShakeX</option>
						<option value='shakeY'>ShakeY</option>
						<option value='headShake'>HeadShake</option>
						<option value='swing'>Swing</option>
						<option value='tada'>Tada</option>
						<option value='wobble'>Wobble</option>
						<option value='jello'>Jello</option>
						<option value='heartBeat'>HeartBeat</option>
						<option value='hinge'>Hinge</option>
						<option value='jackInTheBox'>JackInTheBox</option>
						<option value='rollIn'>RollIn</option>
						<option value='rollOut'>RollOut</option>
						<option value='backInDown'>BackInDown</option>
						<option value='backInLeft'>BackInLeft</option>
						<option value='backInRight'>BackInRight</option>
						<option value='backInUp'>BackInUp</option>
						<option value='bounceIn'>BounceIn</option>
						<option value='bounceInDown'>BounceInDown</option>
						<option value='bounceInLeft'>BounceInLeft</option>
						<option value='bounceInRight'>BounceInRight</option>
						<option value='bounceInUp'>BounceInUp</option>
						<option value='fadeIn'>FadeIn</option>
						<option value='fadeInDown'>FadeInDown</option>
						<option value='fadeInDownBig'>FadeInDownBig</option>
						<option value='fadeInLeft'>FadeInLeft</option>
						<option value='fadeInLeftBig'>FadeInLeftBig</option>
						<option value='fadeInRight'>FadeInRight</option>
						<option value='fadeInRightBig'>FadeInRightBig</option>
						<option value='fadeInUp'>FadeInUp</option>
						<option value='fadeInUpBig'>FadeInUpBig</option>
						<option value='fadeInTopLeft'>FadeInTopLeft</option>
						<option value='fadeInTopRight'>FadeInTopRight</option>
						<option value='fadeInBottomLeft'>FadeInBottomLeft</option>
						<option value='fadeInBottomRight'>FadeInBottomRight</option>
						<option value='flip'>Flip</option>
						<option value='flipInX'>FlipInX</option>
						<option value='flipInY'>FlipInY</option>
						<option value='lightSpeedInRight'>LightSpeedInRight</option>
						<option value='lightSpeedInLeft'>LightSpeedInLeft</option>
						<option value='rotateIn'>RotateIn</option>
						<option value='rotateInDownLeft'>RotateInDownLeft</option>
						<option value='rotateInDownRight'>RotateInDownRight</option>
						<option value='rotateInUpLeft'>RotateInUpLeft</option>
						<option value='rotateInUpRight'>RotateInUpRight</option>
						<option value='zoomIn'>ZoomIn</option>
						<option value='zoomInDown'>ZoomInDown</option>
						<option value='zoomInLeft'>ZoomInLeft</option>
						<option value='zoomInRight'>ZoomInRight</option>
						<option value='zoomInUp'>ZoomInUp</option>
						<option value='slideInDown'>SlideInDown</option>
						<option value='slideInLeft'>SlideInLeft</option>
						<option value='slideInRight'>SlideInRight</option>
						<option value='slideInUp'>SlideInUp</option>
					</select>
				</div>
				<div className='two'>
					<label>Delay:</label>
					<select id='animate-delay-select'>
						<option value='no-delay'>No Delay</option>
						<option value='animate_delay-2s'>2s</option>
						<option value='animate_delay-3s'>3s</option>
						<option value='animate_delay-4s'>4s</option>
						<option value='animate_delay-5s'>5s</option>
					</select>
				</div>
				<div className='two'>
					<label>Speed:</label>
					<select id='animate-speed-select'>
						<option value='normal'>Normal (1s)</option>
						<option value='animate_fast'>Fast (800ms)</option>
						<option value='animate_faster'>Faster (500ms)</option>
						<option value='animate_slow'>Slow (2s)</option>
						<option value='animate_slower'>Slower (3s)</option>
					</select>
				</div>
				<div className='two'>
					<label>Repeat:</label>
					<select id='animate-repeat-select'>
						<option value='no-repeat'>0 time</option>
						<option value='animate_repeat-1'>1 time</option>
						<option value='animate_repeat-2'>2 times</option>
						<option value='animate_repeat-3'>3 times</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default Animate
