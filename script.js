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
  })
  .then(() => {
    alert("✅ Order placed successfully!");
  });
}
function openFood(food){
  window.location.href = "food.html?food=" + food;
}