document.addEventListener('DOMContentLoaded', function () {
	const notification = document.querySelector('.notification')
	const notificationCount = document.querySelector('.notification-count')
	const notificationList = document.querySelector('.notification-list ul')

	let newNotificationsCount = 0
	let isCounterPaused = false

	function addNotification() {
		if (!isCounterPaused) {
			newNotificationsCount++
			notificationCount.innerText = newNotificationsCount

			const newNotification = document.createElement('li')
			newNotification.innerText = 'Новое уведомление ' + newNotificationsCount
			notificationList.appendChild(newNotification)
		}
	}

	function updateNotifications() {
		setInterval(addNotification, 3000)
	}

	function pauseCounterFor(seconds) {
		isCounterPaused = true
		setTimeout(() => {
			isCounterPaused = false
		}, seconds * 1000)
	}

	notification.addEventListener('mouseover', function () {
		newNotificationsCount = 0
		notificationCount.innerText = newNotificationsCount
	})

	notification.addEventListener('click', function () {
		notificationList.innerHTML = ''
		pauseCounterFor(10)
	})

	updateNotifications()
})
