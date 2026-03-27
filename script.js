// OPEN FOOD PAGE
function openFood(food){
  // store selected food
  localStorage.setItem("selectedFood", food);
  window.location.href = "food.html";
}

// FOOD DATA
let foods = [
  {
    name:"Burger",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Juicy grilled burger",
    nutrition:"450 kcal | 25g protein"
  },
  {
    name:"Pizza",
    model:"https://modelviewer.dev/shared-assets/models/Chair.glb",
    details:"Cheesy pizza",
    nutrition:"600 kcal | 20g protein"
  },
  {
    name:"Pasta",
    model:"https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    details:"Creamy pasta",
    nutrition:"400 kcal | 15g protein"
  },
  {
    name:"Sandwich",
    model:"https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    details:"Healthy sandwich",
    nutrition:"300 kcal | 12g protein"
  },
  {
    name:"Cake",
    model:"https://modelviewer.dev/shared-assets/models/Horse.glb",
    details:"Chocolate cake",
    nutrition:"500 kcal | 8g protein"
  },
  {
    name:"Coffee",
    model:"https://modelviewer.dev/shared-assets/models/CartoonLowPoly.glb",
    details:"Hot coffee",
    nutrition:"150 kcal | 3g protein"
  },
  {
    name:"Fries",
    model:"https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
    details:"Crispy fries",
    nutrition:"350 kcal | 5g protein"
  },
  {
    name:"Ice Cream",
    model:"https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    details:"Vanilla ice cream",
    nutrition:"250 kcal | 4g protein"
  }
];

let index = 0;

// LOAD SELECTED FOOD
function loadFood(){
  let selected = localStorage.getItem("selectedFood");

  if(selected){
    index = foods.findIndex(f => f.name.toLowerCase() === selected);
    if(index === -1) index = 0;
  }

  updateUI();
}

// UPDATE UI
function updateUI(){
  let viewer = document.getElementById("viewer");
  if(!viewer) return;

  viewer.src = foods[index].model;
  document.getElementById("foodTitle").innerText = foods[index].name;
  document.getElementById("details").innerText = foods[index].details;
  document.getElementById("nutrition").innerText = foods[index].nutrition;
}

// NEXT / PREVIOUS
function nextFood(){
  index = (index + 1) % foods.length;
  updateUI();
}

function prevFood(){
  index = (index - 1 + foods.length) % foods.length;
  updateUI();
}

// SWIPE DETECTION
let startX = 0;

document.addEventListener("touchstart", (e)=>{
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e)=>{
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    nextFood(); // swipe left
  }
  else if(endX - startX > 50){
    prevFood(); // swipe right
  }
});

// ORDER
function placeOrder(){
  alert("✅ Ordered: " + foods[index].name);
}

// LOAD ON PAGE
window.onload = loadFood;