/* eslint-disable */

import "./style.css";

window.onload = () => {
  //write your code here

  document.getElementById("boton").addEventListener("click", () => {
    let palo = generadorPalosPoker();
    //dar color a las cartas dependiendo del palo

    document.getElementById("card").innerHTML =
      `<p class='paloArriba ${palo}'>` +
      palo +
      "</p>" +
      "<p class='numero'>" +
      generadorNumeros() +
      "</p>" +
      `<p class='paloAbajo ${palo}'>` +
      palo +
      "</p>";
    let disparo = document.getElementById("disparo");
    disparo.play();
  });
};

const generadorPalosPoker = () => {
  let palos = ["♦️", "♣️", "♥️", "♠️"];
  let indicePalos = [Math.floor(Math.random() * palos.length)];

  return palos[indicePalos];
};

const generadorNumeros = () => {
  let numeros = [
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
    "k"
  ];
  let indiceNumeros = Math.floor(Math.random() * numeros.length);
  console.log(indiceNumeros);
  return numeros[indiceNumeros];
};
