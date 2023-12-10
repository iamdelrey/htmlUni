//1
document.getElementById("contents").addEventListener("click", function (event) {
  var targetElement = event.target;

  if (targetElement.tagName === "A" || targetElement.closest("a")) {
    var userConfirmation = confirm("Вы уверены, что хотите покинуть страницу?");

    if (!userConfirmation) {
      event.preventDefault();
    }
  }
});

//2
function changeImage(imagePath) {
  var mainImage = document.getElementById("mainImage");
  mainImage.src = imagePath;
}

//3
document.addEventListener("DOMContentLoaded", function () {
  var list = document.getElementById("myList");
  var items = list.getElementsByTagName("li");

  list.addEventListener("click", function (event) {
    var clickedItem = event.target;

    if (event.ctrlKey || event.metaKey) {
      clickedItem.classList.toggle("selected");
    } else {
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("selected");
      }
      clickedItem.classList.add("selected");
    }
  });
});

//4
const track = document.getElementById("track");
const handle = document.getElementById("handle");

let isDragging = false;

handle.addEventListener("mousedown", (e) => {
  isDragging = true;
  handle.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  handle.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const trackRect = track.getBoundingClientRect();
  let leftPosition = e.clientX - trackRect.left;

  if (leftPosition < 0) {
    leftPosition = 0;
  } else if (leftPosition > trackRect.width) {
    leftPosition = trackRect.width;
  }

  handle.style.left = `${leftPosition}px`;
});

//5
function drag(event) {
  event.dataTransfer.setData(
    "text/plain",
    JSON.stringify({
      price: event.target.dataset.price,
      name: event.target.dataset.name,
    })
  );
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let data = JSON.parse(event.dataTransfer.getData("text/plain"));

  let cartItem = document.createElement("li");
  cartItem.textContent = data.name + " - $" + data.price;

  document.getElementById("cartItems").appendChild(cartItem);

  updateTotal();
}

function updateTotal() {
  let cartItems = document.getElementById("cartItems").children;
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let price = parseInt(cartItems[i].textContent.split("$")[1]);
    total += price;
  }

  document.getElementById("total").textContent = total.toString();
}

//6
document.addEventListener("DOMContentLoaded", function () {
  var fadeInElements = document.querySelectorAll(".fade-in");

  fadeInElements.forEach(function (element, index) {
    element.style.opacity = 0;

    element.style.transition = "opacity 1s ease-in-out";

    setTimeout(function () {
      element.style.opacity = 1;
    }, 200 * 3);
  });
});

var thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("mouseenter", function () {
    thumbnail.style.transform = "scale(1.3)";
    thumbnail.style.transition = "transform 0.5s ease";
  });

  thumbnail.addEventListener("mouseleave", function () {
    thumbnail.style.transform = "scale(1)";
    thumbnail.style.transition = "transform 0.5s ease";
  });
});

document
  .getElementById("myList")
  .addEventListener("mouseover", function (event) {
    var hoveredItem = event.target;

    if (hoveredItem.tagName === "LI") {
      hoveredItem.style.transition = "background-color 0.3s ease";
      hoveredItem.style.backgroundColor = "#0b4d05";
      hoveredItem.style.color = "#fff";
      hoveredItem.style.borderRadius = "20px";
    }
  });

document
  .getElementById("myList")
  .addEventListener("mouseout", function (event) {
    var hoveredItem = event.target;

    if (hoveredItem.tagName === "LI") {
      hoveredItem.style.transition = "background-color 0.3s ease";
      hoveredItem.style.backgroundColor = "";
      hoveredItem.style.color = "";
      hoveredItem.style.borderRadius = "";
    }
  });
