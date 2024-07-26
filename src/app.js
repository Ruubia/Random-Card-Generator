/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateRandomCard();

  setInterval(generateRandomCard, 10000);
};

function generateRandomCard() {
  const suits = ["heart", "spade", "club", "diamond"];
  const values = [
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
    "K",
    "A"
  ];
  const symbols = {
    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"
  };
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardElement = document.getElementById("card");
  cardElement.className = `card ${randomSuit}`;
  cardElement.innerHTML = `
    <div class="top-left">${randomValue}<br>${symbols[randomSuit]}</div>
    <div class="symbol">${symbols[randomSuit]}</div>
    <div class="bottom-right">${randomValue}<br>${symbols[randomSuit]}</div>
  `;
}

function setCardSize() {
  const widthInput = document.getElementById("width-input").value;
  const heightInput = document.getElementById("height-input").value;

  const cardElement = document.getElementById("card");

  const minWidth = 80;
  const minHeight = 100;
  const maxWidth = 550;
  const maxHeight = 600;

  if (widthInput) {
    const width = Math.max(minWidth, Math.min(maxWidth, widthInput));
    cardElement.style.width = `${width}px`;
  }
  if (heightInput) {
    const height = Math.max(minHeight, Math.min(maxHeight, heightInput));
    cardElement.style.height = `${height}px`;
  }
}

document
  .getElementById("generateNewCard")
  .addEventListener("click", generateRandomCard);
document.getElementById("setSize").addEventListener("click", setCardSize);
