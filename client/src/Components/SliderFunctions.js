// effect 1
export const goRightEffect1 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === slides.length - 1 ? -1 : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index + 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__backOutLeft`
				nNC += ` animate__animated animate__backInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect1 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === 0 ? slides.length : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index - 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__backOutRight`
				nNC += ` animate__animated animate__backInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index - 1]
				return
			}
		}
	}
}

export const goRightEffect1NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length - 1; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i + 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__backOutLeft`
				nNC += ` animate__animated animate__backInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i + 1]
				return
			}
		}
	}
}

export const goLeftEffect1NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 1; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i - 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__backOutRight`
				nNC += ` animate__animated animate__backInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i - 1]
				return
			}
		}
	}
}

// effect 2
export const goRightEffect2 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === slides.length - 1 ? -1 : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index + 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__fadeOutLeft`
				nNC += ` animate__animated animate__fadeInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect2 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === 0 ? slides.length : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index - 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__fadeOutRight`
				nNC += ` animate__animated animate__fadeInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index - 1]
				return
			}
		}
	}
}

export const goRightEffect2NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length - 1; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i + 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__fadeOutLeft`
				nNC += ` animate__animated animate__fadeInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i + 1]
				return
			}
		}
	}
}

export const goLeftEffect2NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 1; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i - 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__fadeOutRight`
				nNC += ` animate__animated animate__fadeInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i - 1]
				return
			}
		}
	}
}

// effect 3
export const goRightEffect3 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === slides.length - 1 ? -1 : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index + 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutLeft`
				nNC += ` animate__animated animate__bounceInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect3 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === 0 ? slides.length : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index - 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutRight`
				nNC += ` animate__animated animate__bounceInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index - 1]
				return
			}
		}
	}
}

export const goRightEffect3NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length - 1; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i + 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutLeft`
				nNC += ` animate__animated animate__bounceInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i + 1]
				return
			}
		}
	}
}

export const goLeftEffect3NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 1; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i - 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutRight`
				nNC += ` animate__animated animate__bounceInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i - 1]
				return
			}
		}
	}
}

// effect 4
export const goRightEffect4 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === slides.length - 1 ? -1 : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index + 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutUp`
				nNC += ` animate__animated animate__bounceInUp`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect4 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === 0 ? slides.length : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index - 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutDown`
				nNC += ` animate__animated animate__bounceInDown`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index - 1]
				return
			}
		}
	}
}

export const goRightEffect4NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length - 1; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i + 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutUp`
				nNC += ` animate__animated animate__bounceInUp`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i + 1]
				return
			}
		}
	}
}

export const goLeftEffect4NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 1; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i - 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__bounceOutDown`
				nNC += ` animate__animated animate__bounceInDown`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i - 1]
				return
			}
		}
	}
}

// effect 5
export const goRightEffect5 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === slides.length - 1 ? -1 : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index + 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__zoomOutLeft`
				nNC += ` animate__animated animate__zoomInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect5 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === 0 ? slides.length : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index - 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '1'
				newActiveSlide.style.opacity = '1'
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__zoomOutRight`
				nNC += ` animate__animated animate__zoomInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index - 1]
				return
			}
		}
	}
}

export const goRightEffect5NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length - 1; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i + 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__zoomOutLeft`
				nNC += ` animate__animated animate__zoomInRight`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i + 1]
				return
			}
		}
	}
}

export const goLeftEffect5NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 1; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i - 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__zoomOutRight`
				nNC += ` animate__animated animate__zoomInLeft`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i - 1]
				return
			}
		}
	}
}

export const goRightEffect6 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === slides.length - 1 ? -1 : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index + 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__opacityOut`
				nNC += ` animate__animated animate__opacityIn`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect6 = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === 0 ? slides.length : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index - 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__opacityOut`
				nNC += ` animate__animated animate__opacityIn`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[index - 1]
				return
			}
		}
	}
}

export const goRightEffect6NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 0; i < slides.length - 1; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i + 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__opacityOut`
				nNC += ` animate__animated animate__opacityIn`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i + 1]
				return
			}
		}
	}
}

export const goLeftEffect6NoLoop = (activeSlide, slides, id, slidersData) => {
	for (let i = 1; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[i - 1])

			if (activeSlide && newActiveSlide) {
				const oldClasses = oldActiveSlide.classList
				let nOC = ''
				const newClasses = newActiveSlide.classList
				let nNC = ''

				oldClasses.forEach(e => (e.search('animate') === -1 ? (nOC += ` ${e}`) : null))
				newClasses.forEach(e => (e.search('animate') === -1 ? (nNC += ` ${e}`) : null))

				nOC += ` animate__animated animate__opacityOut`
				nNC += ` animate__animated animate__opacityIn`

				oldActiveSlide.classList = nOC
				newActiveSlide.classList = nNC
				slidersData[id] = slides[i - 1]
				return
			}
		}
	}
}
