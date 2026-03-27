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

  let viewer = document.getElementById("viewer");

  if(viewer){
    viewer.src = foods[index].model;
    document.getElementById("foodTitle").innerText = foods[index].name;
    document.getElementById("details").innerText = foods[index].details;
    document.getElementById("nutrition").innerText = foods[index].nutrition;
  }
}

function openAR(){
  let viewer = document.getElementById("viewer");
  if(viewer){
    viewer.activateAR();
  }
}

function placeOrder(){
  alert("Order placed: " + foods[index].name);
}

/* FIXED VOICE */
function startVoice(){
  if(!('webkitSpeechRecognition' in window)){
    alert("Voice not supported in this browser");
    return;
  }

  const recognition = new webkitSpeechRecognition();

  recognition.onresult = function(e){
    let text = e.results[0][0].transcript;

    document.getElementById("customizeText").innerText =
      "You said: " + text;
  };

  recognition.start();
}

/* SAFE LOAD */
window.onload = function(){
  if(document.getElementById("viewer")){
    loadFood();
  }
};