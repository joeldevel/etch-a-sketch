const container = document.querySelector('.container');

const X = 16;

for(let i = 0; i< X*X; i++) {
  // console.log(i);
  container.appendChild(document.createElement('div'))
}

const gridElements = document.querySelectorAll('.container>div');
// console.log(gridElements);

function paintElement() {
  // console.log(e.currentTarget);
  // e.currentTarget.classList.add('active');
  this.classList.add('active');
  console.log(this);
  // this.style.background = 'plum';
}
gridElements.forEach(item=>{
  item.addEventListener('mouseover', paintElement);
});
