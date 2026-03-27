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
    details:"Juicy grilled burger with fresh veggies",
    nutrition:"450 kcal | Protein: 25g"
  },
  {
    name:"Pizza",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Cheesy pizza with toppings",
    nutrition:"600 kcal | Protein: 20g"
  },
  {
    name:"Pasta",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Creamy pasta",
    nutrition:"400 kcal | Protein: 15g"
  },
  {
    name:"Sandwich",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Healthy sandwich",
    nutrition:"300 kcal | Protein: 12g"
  },
  {
    name:"Cake",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Chocolate cake",
    nutrition:"500 kcal | Protein: 8g"
  },
  {
    name:"Coffee",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Hot coffee",
    nutrition:"150 kcal | Protein: 3g"
  },
  {
    name:"Fries",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Crispy fries",
    nutrition:"350 kcal | Protein: 5g"
  },
  {
    name:"Ice Cream",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Vanilla ice cream",
    nutrition:"250 kcal | Protein: 4g"
  }
];

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
function startVoice(){
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = function(event){
    let speech = event.results[0][0].transcript.toLowerCase();

    alert("You said: " + speech);

    if(speech.includes("cheese")){
      alert("🧀 Extra cheese added!");
    }
    if(speech.includes("spicy")){
      alert("🌶️ Spicy option selected!");
    }
  };

  recognition.start();
}
function openAR(){
  const viewer = document.getElementById("viewer");

  if(viewer){
    viewer.activateAR();
  }
}
function startVoice(){
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = function(event){
    let speech = event.results[0][0].transcript.toLowerCase();

    let output = "";

    if(speech.includes("cheese")){
      output += "🧀 Extra cheese added\n";
    }
    if(speech.includes("spicy")){
      output += "🌶️ Spicy option selected\n";
    }
    if(speech.includes("no onion")){
      output += "🚫 Removed onions\n";
    }

    if(output === ""){
      output = "Try saying: extra cheese / spicy";
    }

    document.getElementById("customizeText").innerText = output;
  };

  recognition.start();
}
