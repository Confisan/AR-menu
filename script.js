let index = 0;

let foods = [
  {
    name:"burger",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Juicy burger",
    nutrition:"450 kcal"
  },
  {
    name:"pizza",
    model:"https://modelviewer.dev/shared-assets/models/Hamburger.glb",
    details:"Cheesy pizza",
    nutrition:"600 kcal"
  }
];

function openFood(food){
  localStorage.setItem("selectedFood", food);
  window.location.href = "food.html";
}

function loadFood(){
  let selected = localStorage.getItem("selectedFood");

  index = foods.findIndex(f => f.name === selected);
  if(index === -1) index = 0;

  updateUI();
}

function updateUI(){
  let viewer = document.getElementById("viewer");
  if(!viewer) return;

  viewer.src = foods[index].model;

  document.getElementById("foodTitle").innerText = foods[index].name;
  document.getElementById("details").innerText = foods[index].details;
  document.getElementById("nutrition").innerText = foods[index].nutrition;
}

function openAR(){
  document.getElementById("viewer").activateAR();
}

function placeOrder(){
  fetch("http://localhost:5000/order",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({food: foods[index].name})
  })
  .then(res=>res.json())
  .then(data=>alert(data.message));
}

function startVoice(){
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = (e)=>{
    let text = e.results[0][0].transcript;
    document.getElementById("customizeText").innerText = text;
  };
  recognition.start();
}

window.onload = loadFood;