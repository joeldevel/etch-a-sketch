// ****************************************************
//                      grab elements
// ****************************************************
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear-button');
const toggleGapButton = document.querySelector('.toggle-gap');

const containerWidth = '400';
//for first time round
let squaresPerSide = 16;


// wait grid items exists
setTimeout(function(){
  let gridElements = document.querySelectorAll('.container>div') ;
  putElementsToListen(gridElements);
},0);


setGrid(squaresPerSide);
populateGrid(squaresPerSide*squaresPerSide, containerWidth/squaresPerSide);


// ****************************************************
//                      functions
// ****************************************************

function setGrid(squares) {
  container.style.gridTemplateColumns=`repeat(${squares}, 1fr)`;
  container.style.width = `${containerWidth}px`;
}

function populateGrid(amount, squareHeight) {
  for(let i = 0; i< amount; i++) {
    const div = document.createElement('div');
    div.style.height =`${squareHeight}px`;
    container.appendChild(div);
  }
}

function newPlayground() {
  let newSquareSide = prompt('How many square per side?');
  if( newSquareSide < 1 || newSquareSide > 100) {
    newSquareSide = 16;
  }
  clearGrid();
  setGrid(newSquareSide);
  populateGrid(newSquareSide*newSquareSide, containerWidth/newSquareSide);
  putElementsToListen(document.querySelectorAll('.container>div'));
}

function clearGrid() {
  const elements = document.querySelectorAll('.container>div');
  // console.log(elements);
  for(let i =0; i< elements.length; i++) {
    container.removeChild(elements[i]);
  }
}

function paintElement() {
  this.classList.add('active');
}

function toggleGap() {
  container.classList.toggle('no-gap');
}

function putElementsToListen(elements) {
  elements.forEach(item=>{
    item.addEventListener('mouseover', paintElement);
  });
}

// *************************************************
//                   actions
// ************************************************

clearButton.addEventListener('click', newPlayground);

toggleGapButton.addEventListener('click', toggleGap);
