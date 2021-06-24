// effect 1
export const goRightEffect1 = (slides, activeSlide) => {
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
				activeSlide = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect1 = (slides, activeSlide) => {
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
				activeSlide = slides[index - 1]
				return
			}
		}
	}
}

// effect 2
export const goRightEffect2 = (slides, activeSlide) => {
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
				activeSlide = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect2 = (slides, activeSlide) => {
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
				activeSlide = slides[index - 1]
				return
			}
		}
	}
}

// effect 3
export const goRightEffect3 = (slides, activeSlide) => {
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
				activeSlide = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect3 = (slides, activeSlide) => {
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
				activeSlide = slides[index - 1]
				return
			}
		}
	}
}

// effect 4
export const goRightEffect4 = (slides, activeSlide) => {
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
				activeSlide = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect4 = (slides, activeSlide) => {
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
				activeSlide = slides[index - 1]
				return
			}
		}
	}
}

// effect 5
export const goRightEffect5 = (slides, activeSlide) => {
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
				activeSlide = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect5 = (slides, activeSlide) => {
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
				activeSlide = slides[index - 1]
				return
			}
		}
	}
}

// effect 6
export const goRightEffect6 = (slides, activeSlide) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === slides.length - 1 ? -1 : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index + 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '0'
				newActiveSlide.style.opacity = '1'
				activeSlide = slides[index + 1]
				return
			}
		}
	}
}

export const goLeftEffect6 = (slides, activeSlide) => {
	for (let i = 0; i < slides.length; i++) {
		if (activeSlide === slides[i]) {
			const index = i === 0 ? slides.length : i
			const oldActiveSlide = document.getElementById(activeSlide)
			const newActiveSlide = document.getElementById(slides[index - 1])

			if (activeSlide && newActiveSlide) {
				oldActiveSlide.style.opacity = '0'
				newActiveSlide.style.opacity = '1'
				activeSlide = slides[index - 1]
				return
			}
		}
	}
}
