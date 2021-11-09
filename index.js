// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  saveEl.textContent += count + " - ";
  count = 0;
  countEl.textContent = count;
}

function reset() {
  saveEl.textContent = "Last saved number: ";
}
