let isLiked = false

function toggleLike() {
	let button = document.querySelector('.like-button')
	isLiked = !isLiked

	if (isLiked) {
		button.style.backgroundColor = '#ff6600'
		startDrawing()
	} else {
		button.style.backgroundColor = '#333'
		stopDrawing()
	}
}

let isDrawing = false

function startDrawing() {
	isDrawing = true
	let canvas = document.createElement('div')
	canvas.classList.add('drawing-canvas')
	document.body.appendChild(canvas)

	canvas.addEventListener('mousemove', drawElement)
}

function stopDrawing() {
	isDrawing = false
	let canvas = document.querySelector('.drawing-canvas')
	if (canvas) {
		canvas.removeEventListener('mousemove', drawElement)
		document.body.removeChild(canvas)
	}
}

function drawElement(event) {
	if (isDrawing) {
		let element = document.createElement('div')
		element.style.position = 'absolute'
		element.style.top = event.clientY - 10 + 'px'
		element.style.left = event.clientX - 10 + 'px'
		element.style.width = '50px'
		element.style.height = '50px'
		element.style.backgroundColor = '#ff6600'
		element.style.borderRadius = '0%'
		element.style.zIndex = '-1'

		let canvas = document.querySelector('.drawing-canvas')
		canvas.appendChild(element)
	}
}
