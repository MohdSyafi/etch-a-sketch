
const gridContainer = document.querySelector(".grid-container");

for (let i =0;i<32;i++){
    const gridDiv = document.createElement("div");
    gridDiv.textContent = "1";
    gridContainer.appendChild(gridDiv);
}