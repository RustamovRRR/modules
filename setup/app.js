import { random, people } from "../modules/data.js";
import showPeople from "../modules/showPeople.js";

console.log(random);
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
