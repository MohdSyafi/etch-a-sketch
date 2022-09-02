
let btn = document.querySelector('.button');
const gridContainer = document.querySelector(".grid-container");
let squareNo = 16;

function createGrid(){
    for (let i =0;i<squareNo;i++){
        const gridRow = document.createElement("div");
        gridContainer.appendChild(gridRow);
    
        for(let j = 0;j<squareNo;j++){
            const gridBox = document.createElement("div");
            gridRow.appendChild(gridBox);
            gridRow.classList.add('grid-Row');
            gridBox.classList.add('grid-box');
    
            gridBox.addEventListener('mouseover',changeBoxColor)
        }
    
    }
}

function clearBox()
{
    const container = document.querySelector(".grid-container");
    container.innerHTML = "";
}

function changeBoxColor(){
    this.classList.add('changeBoxColor');
}

function showPrompt(){

   squareNo = parseInt(prompt('No of squares per side :', "16"));

   if (!Number.isInteger(squareNo)){
    alert("Only number is accepted");
    squareNo = 16;
    return;
   }

   if(squareNo>100){
    alert("Maximum no of square is 100");
    squareNo = 16;
    return;
   }

   clearBox();
   createGrid();
}

btn.addEventListener('click',showPrompt);

