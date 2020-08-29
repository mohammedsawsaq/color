let numberofsquares=6;
let colors=generateRandomColor(numberofsquares);
let squares=document.querySelectorAll(".square");
let colorDisplay=document.getElementById("colorDisplay");
let msg=document.querySelector("#msg")
let resetbutton=document.getElementById('reset')
let hd= document.querySelector("h1")
let pickedcolor=colors[winningcolor()];
let easybutton=document.getElementById('easy');
let hardbutton=document.getElementById('hard');



easybutton.addEventListener("click",function(){
 easybutton.classList.add("selected");
 hardbutton.classList.remove("selected");
 numberofsquares=3
 colors=generateRandomColor(numberofsquares);
 pickedcolor=colors[winningcolor()];
 colorDisplay.textContent=pickedcolor;
 hd.style.backgroundColor="steelblue";
 msg.textContent="";
 for(let i =0;i<squares.length;i++){
   if(colors[i]){
     squares[i].style.backgroundColor = colors[i]
   }else{
      squares[i].style.display="none"
   }
 }

});

hardbutton.addEventListener("click",function(){
 hardbutton.classList.add("selected");
 easybutton.classList.remove("selected");
 numberofsquares=6;
 colors=generateRandomColor(numberofsquares);
 pickedcolor=colors[winningcolor()];
 colorDisplay.textContent=pickedcolor;
 hd.style.backgroundColor="steelblue";
 msg.textContent="";
 for(let i =0;i<squares.length;i++){
     squares[i].style.backgroundColor = colors[i];
     squares[i].style.display="block";

 }
});


//reaset the game
resetbutton.addEventListener("click",function(){
  resetbutton.textContent="New Colors";
  //generateRandomColors array
  colors=generateRandomColor(numberofsquares);
  //chose the correct color
  pickedcolor=colors[winningcolor()];
  //display the RGB value
  colorDisplay.textContent=pickedcolor;
  //set the square to the new color array
  for(let i = 0 ; i < squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];}
  //cahnge the h1 backgroungcolor
  hd.style.backgroundColor="steelblue";
  msg.textContent="";

});

colorDisplay.textContent=pickedcolor;

for(let i = 0 ; i < squares.length ; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click",function(){
    let clickedcolor = this.style.backgroundColor;
    // console.log(clickedcolor)
    if(clickedcolor === pickedcolor){
      // console.log("correct!");
      msg.textContent="Correct :) ";
      hd.style.backgroundColor=pickedcolor;
      //change the text of the button
      resetbutton.textContent="Play Again?";
      //after winning turn all squares to the same color
      for(let i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = pickedcolor;
      };
    }else{
      this.style.backgroundColor="#232323";
      msg.textContent="Try Again :( ";
      // console.log("lol");
    };
  });
};

//////////////

function winningcolor(){
  let rC= Math.floor(Math.random() * colors.length)
  // console.log(rC);
  return rC;
};
////////////

function generateRandomColor(num){
//creat array
  let arr=[];
  //add num random colors ti array
  for (let i =0 ; i < num ; i++){
    arr.push(randomColor());
    }
  //return the array
  return arr;
};

function randomColor(){
    //make random colors.
    // pick a red from 0 - 255
    let r = Math.floor(Math.random()*256);
    // pick a green from 0 - 255
    let g = Math.floor(Math.random()*256);

    // pick a blue from 0 - 255
    let b = Math.floor(Math.random()*256);
    //return
    return"rgb("+r+", "+g+", "+b+")";

};
// let colors = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ];
