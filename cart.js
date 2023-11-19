document.addEventListener("DOMContentLoaded", function () {
    var cartItems = [
      { name: "Черное море", price: 49, quantity: 0 },
      { name: "Черный квадрат", price: 99, quantity: 0 },
      { name: "Давид", price: 149, quantity: 0 },
      { name: "Кисть))))", price: 297, quantity: 0 },
    ];
  
    function updateCart() {
      var totalAmount = 0;
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var row = document.getElementById("myTable").rows[i + 1];
        var quantityInput = row.querySelector(".qty");
        var priceInput = row.querySelector(".price");
        var amountSpan = row.querySelector(".amount");
  
        quantityInput.value = item.quantity;
  
        var itemAmount = item.quantity * item.price;
        amountSpan.textContent = itemAmount;
  
        totalAmount += itemAmount;
      }
  
      document.getElementById("total").textContent = totalAmount;
    }

    var removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var rowIndex = button.closest("tr").rowIndex - 1;
        var item = cartItems[rowIndex];
        item.quantity = 0;
        updateCart();
      });
    });
  
    function handleButtonClick(event) {
      var button = event.target;
      var rowIndex = button.closest("tr").rowIndex - 1;
      var item = cartItems[rowIndex];
  
      if (button.value === "+") {
        item.quantity++;
      }
      else if (button.value === "-" && item.quantity > 0) {
        item.quantity--;
      }
      updateCart();
    }
  
    var plusButtons = document.querySelectorAll(".cart-qty-plus");
    var minusButtons = document.querySelectorAll(".cart-qty-minus");
  
    plusButtons.forEach(function (button) {
      button.addEventListener("click", handleButtonClick);
    });
  
    minusButtons.forEach(function (button) {
      button.addEventListener("click", handleButtonClick);
    });
});