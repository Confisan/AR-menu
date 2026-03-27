const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let orders = [];

app.post("/order",(req,res)=>{
  orders.push(req.body);
  res.send({message:"Order placed successfully"});
});

app.get("/orders",(req,res)=>{
  res.send(orders);
});

app.listen(5000,()=>{
  console.log("Server running on port 5000");
});