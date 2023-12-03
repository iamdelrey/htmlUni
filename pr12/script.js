document.addEventListener("DOMContentLoaded", function () {
  const notificationList = document.querySelector(".notification-list ul");
  const notificationCount = document.querySelector(".notification-count");
  const pauseButton = document.getElementById("pauseButton");
  const timerElement = document.getElementById("timer");

  let counter = 1;
  let isPaused = false;
  let remainingTime = 10;

  function updateNotificationCount() {
    notificationCount.textContent = counter;
  }

  function updateTimer() {
    timerElement.textContent = remainingTime;
  }

  function addNotification() {
    if (!isPaused) {
      updateNotificationCount();
      const notification = document.createElement("li");
      notification.textContent = `Новое уведомление ${counter}`;
      notificationList.appendChild(notification);
      counter++;
    }
  }

  function notificationDecorator(originalFunction) {
    return function () {
      if (!isPaused) {
        updateNotificationCount();
        originalFunction.apply(this, arguments);
      }
    };
  }

  addNotification = notificationDecorator(addNotification);

  const intervalId = setInterval(function () {
    addNotification();
    updateTimer();
  }, 3000);

  pauseButton.addEventListener("click", function () {
    isPaused = true;
    timerElement.style.display = "inline";

    const timerIntervalId = setInterval(function () {
      remainingTime--;
      updateTimer();

      if (remainingTime <= 0) {
        clearInterval(timerIntervalId);
        isPaused = false;
        timerElement.style.display = "none";
        remainingTime = 10;
      }
    }, 1000);
  });

  setTimeout(function () {
    clearInterval(intervalId);
  }, 30000);
});
