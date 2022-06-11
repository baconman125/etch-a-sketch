let bool = false;
function createGrid(num){
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for(let i = 1;i<=num*num;i++){
        let div = document.createElement('div');
        div.classList.add('grid-box');
        gridContainer.appendChild(div);
    }
    document.querySelector(".grid-dimensions").textContent=`${num} x ${num}`;
}
function changeColor(e){
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    if(bool)
        e.target.style.backgroundColor = `${color}`;
    else
        e.target.style.backgroundColor = "black";
}
function clearGrid(){
    let gridBoxList = document.querySelectorAll('.grid-box');
    gridBoxList.forEach(gridBox =>{
        gridBox.style.backgroundColor = null;
    });
}
function start(a){
    createGrid(a);
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}
function resetGrid(){
    let num = prompt("Please enter num. of squares <= 100");
    const gridContainer = document.querySelector('.grid-container');
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    start(num);
}
function rainbowMode(){
    bool = true;
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}
function blackMode(){
    bool = false;
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}
let numGrid = 16;
start(numGrid);