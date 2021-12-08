const people = [
  { name: "walter", job: "scientist" },
  { name: "peter", job: "consultant" },
  { name: "olivia", job: "agent" },
];

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");
  container.innerHTML = newPeople;
};

btn.addEventListener("click", () => {
  showPeople();
});