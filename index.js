const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear-button');
const toggleGapButton = document.querySelector('.toggle-gap');
const containerWidth = '400';
// let gridElements = null;

// firstTime
// newPlayground();
let squaresPerSide = 16;
setGrid(squaresPerSide);
populateGrid(squaresPerSide*squaresPerSide, containerWidth/squaresPerSide);

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
let gridElements = document.querySelectorAll('.container>div') ;

// console.log(gridElements);

function paintElement() {
  this.classList.add('active');
}

function toggleGap() {
  container.classList.toggle('no-gap');
}


// clearButton.addEventListener('click', newPlayground);

toggleGapButton.addEventListener('click', toggleGap);

gridElements.forEach(item=>{
  item.addEventListener('mouseover', paintElement);
});
