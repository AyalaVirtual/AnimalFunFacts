import { animals } from './animals';
import React from "react";
import ReactDOM from "react-dom";

const title = "";

const background = (
  <img
    src="images/ocean.jpg" 
    alt="ocean" 
    class="background" />
)

const showBackground = true;

const images = [];

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">
      {images}
    </div>
  </div>
)

for (const animal in animals) {
  images.push(<img 
    src={animals[animal].image} 
    alt={animal} 
    className="animal" 
    key={animal} 
    aria-label={animal} 
    role="button" 
    onClick={displayFact} />)
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];

  document.getElementById("fact").innerHTML = funFact;
}


ReactDOM.render(animalFacts, document.getElementById("root"))

