function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

    const input = document.querySelector("#controls input");
    const createBtn = document.querySelector("[data-create]");
    const destroyBtn = document.querySelector("[data-destroy]");
    const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount){
  let boxSize = 30;
  const boxElements = [];
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++){
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    boxElements.push(box);
    boxSize += 10;
  }
  boxesContainer.append(...boxElements);
  input.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
destroyBtn.addEventListener("click", destroyBoxes);