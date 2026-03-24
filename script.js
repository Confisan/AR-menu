let foods = [
  {
    name: "Burger",
    model: "https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details: "Juicy grilled burger",
    nutrition: "Calories: 450 | Protein: 25g"
  },
  {
    name: "Pizza",
    model: "https://modelviewer.dev/shared-assets/models/Chair.glb",
    details: "Cheesy pizza",
    nutrition: "Calories: 600 | Protein: 20g"
  },
  {
    name: "Pasta",
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    details: "Creamy pasta",
    nutrition: "Calories: 400 | Protein: 15g"
  },
  {
    name: "Sandwich",
    model: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    details: "Healthy sandwich",
    nutrition: "Calories: 300 | Protein: 12g"
  },
  {
    name: "Cake",
    model: "https://modelviewer.dev/shared-assets/models/Horse.glb",
    details: "Chocolate cake",
    nutrition: "Calories: 500 | Protein: 8g"
  },
  {
    name: "Coffee",
    model: "https://modelviewer.dev/shared-assets/models/CartoonLowPoly.glb",
    details: "Hot coffee",
    nutrition: "Calories: 150 | Protein: 3g"
  },
  {
    name: "Fries",
    model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
    details: "Crispy fries",
    nutrition: "Calories: 350 | Protein: 5g"
  },
  {
    name: "Ice Cream",
    model: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    details: "Vanilla ice cream",
    nutrition: "Calories: 250 | Protein: 4g"
  }
];

let index = 0;

function loadFood(){
  document.getElementById("viewer").src = foods[index].model;
  document.getElementById("foodTitle").innerText = foods[index].name;
  document.getElementById("details").innerText = foods[index].details;
  document.getElementById("nutrition").innerText = foods[index].nutrition;
}

function nextFood(){
  index = (index + 1) % foods.length;
  loadFood();
}

function placeOrder(){
  alert("✅ Order placed: " + foods[index].name);
}

window.onload = loadFood;