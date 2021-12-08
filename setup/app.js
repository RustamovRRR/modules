import { random, people } from "../modules/data.js";
import showPeople from "../modules/showPeople.js";
import getElement from "../modules/getElement.js";

console.log(random);
const container = getElement(".container");
const btn = getElement(".btn");

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
