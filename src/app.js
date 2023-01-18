/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#apretar").addEventListener("click", () => {
    document.querySelector("#number1").innerHTML = generateRandomNumber();
    let igualdadIcono = generateRandomIcono();
    document.querySelector("#top").innerHTML = igualdadIcono;
    document.querySelector("#bottom").innerHTML = igualdadIcono;
  });

  setInterval(() => {
    document.querySelector("#number1").innerHTML = generateRandomNumber();
    let igualdadIcono = generateRandomIcono();
    document.querySelector("#top").innerHTML = igualdadIcono;
    document.querySelector("#bottom").innerHTML = igualdadIcono;
  }, 10000);

  document.querySelector("#ancho").addEventListener("change", create);
  document.querySelector("#alto").addEventListener("change", create2);
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let singleNumber = Math.floor(Math.random() * numbers.length);
  return numbers[singleNumber];
};

let generateRandomIcono = () => {
  let cards = ["♦", "♥", "♠", "♣"];

  let singleCard = Math.floor(Math.random() * cards.length);

  return cards[singleCard];
};

function create() {
  let ancho = document.querySelector("#ancho").value;
  let caja = document.querySelector("#caja");
  caja.style.width = ancho + "px";
}

function create2() {
  let alto = document.querySelector("#alto").value;
  let caja = document.querySelector("#caja");
  caja.style.height = alto + "px";
}
