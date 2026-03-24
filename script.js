let selectedFood = "";

// When user clicks food card
function openFood(food){
  selectedFood = food;
  window.location.href = "food.html?food=" + food;
}

// Go to AR page
function goToAR(){
  window.location.href = "ar.html?food=" + selectedFood;
}

// Place order
function placeOrder(){
  fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      item: selectedFood,
      time: new Date().toLocaleString()
    })
  });

  alert("✅ Order placed!");
}