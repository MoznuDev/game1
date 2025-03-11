// Frist Screen 
let oneInput = document.querySelector(".oneInput");
let startGameOne = document.querySelector(".startGameOne");
let oneError = document.querySelector(".oneError");
let gameScreenOne =document.querySelector(".gameScreenOne");
let gameScreenTwo =document.querySelector(".gameScreenTwo");

startGameOne.addEventListener("click", function(){
  if (oneInput.value == "") {
    oneError.style.display = "block";
  } else {
    oneError.style.display = "none";
    gameScreenOne.style.display = "none";
    gameScreenTwo.style.display ="block";
  }
});
// Second Screen 
let twoInput = document.querySelector(".twoInput");
let startGameTwo = document.querySelector(".startGameTwo");
let twoError = document.querySelector(".twoError");
let gameScreenThree =document.querySelector(".gameScreenThree");

startGameTwo.addEventListener("click", function(){
  if (twoInput.value == "") {
    twoError.style.display = "block";
  } else {
    twoError.style.display = "none";
    gameScreenTwo.style.display = "none";
    gameScreenThree.style.display = "block";
  }
});
// Three Screen 
let threeInput = document.querySelector(".threeInput");
let startGameThree = document.querySelector(".startGameThree");
let threeError = document.querySelector(".threeError");
let gameScreenFour = document.querySelector(".gameScreenFour");

startGameThree.addEventListener("click", function(){
  if (threeInput.value == "") {
    threeError.style.display = "block";
  } else {
    threeError.style.display = "none";
    gameScreenThree.style.display = "none";
    gameScreenFour.style.display = "block";
  }
});
// Four Screen 
let fourInput = document.querySelector(".fourInput");
let startGameFour = document.querySelector(".startGameFour");
let fourError = document.querySelector(".fourError");
let gameScreenFive = document.querySelector(".gameScreenFive");

startGameFour.addEventListener("click", function(){
  if (fourInput.value == "") {
    fourError.style.display = "block";
  } else {
    fourError.style.display = "none";
    gameScreenFour.style.display = "none";
    gameScreenFive.style.display = "block";
  }
});
// Five Screen 
let fiveInput = document.querySelector(".fiveInput");
let startGameFive = document.querySelector(".startGameFive");
let fiveError = document.querySelector(".fiveError");
let gameScreenSix = document.querySelector(".gameScreenSix");

startGameFive.addEventListener("click", function(){
  if (fiveInput.value == "") {
    fiveError.style.display = "block";
  } else {
    fiveError.style.display = "none";
    gameScreenFive.style.display = "none";
    gameScreenSix.style.display = "block";
  }
});
// Six Screen 
let sixInput = document.querySelector(".sixInput");
let startGameSix = document.querySelector(".startGameSix");
let sixError = document.querySelector(".sixError");
let gameScreenSeven = document.querySelector(".gameScreenSeven");

startGameSix.addEventListener("click", function(){
  if (sixInput.value == "") {
    sixError.style.display = "block";
  } else {
    sixError.style.display = "none";
    gameScreenSix.style.display = "none";
    gameScreenSeven.style.display = "block";
  }
});