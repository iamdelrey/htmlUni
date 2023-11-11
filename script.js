function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 1) + '…'
	} else {
		return str
	}
}

document.addEventListener('DOMContentLoaded', function () {
	var paragraphs = document.querySelectorAll(
		'.snake-card-container .card .content p'
	)

	paragraphs.forEach(function (paragraph) {
		paragraph.textContent = truncate(paragraph.textContent, 350)
	})
})
