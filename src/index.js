import React from "react";
import ReactDOM from "react-dom";


let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
const csscolor= {};

if (currDate > 1 && currDate < 12) {
  greeting = "Good Morning";
  csscolor.color = 'green';
} else if (currDate >=12 && currDate < 19){
  greeting = "Good Afternoon";
  csscolor.color= 'orange';
} else{
  greeting = "Good Night";
  csscolor.color = "blue";
}



ReactDOM.render(<>
<h1>Hello Sir, <span style= {csscolor}>{greeting}</span> </h1>
  
  </>,document.getElementById("root"));