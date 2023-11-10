var btnvar1 = document.getElementById('btnh1')
var likeCount = document.getElementById('like-count')
var likes = 0

function Toggle1() {
	if (btnvar1.style.color == 'red') {
		btnvar1.style.color = 'grey'
		likes--
	} else {
		btnvar1.style.color = 'red'
		likes++
	}
	likeCount.textContent = likes
}
