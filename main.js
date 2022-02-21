const tableGrid = document.getElementById("table-grid");
const color = document.getElementsByClassName('color');
const resetBtn = document.getElementById('resetBtn');
const gridsize = document.getElementById('gridSize');
const changeGrid = document.getElementById('changeGrid');
const defaultSize = 16
gridsize.value = defaultSize

let size = gridsize.value;
let draw = false;

function populate(size){
  tableGrid.style.setProperty('--size',size);
  for (let i=0;i<size * size;i++){
    const div = document.createElement('div')
    div.classList.add('pixel')
  
    tableGrid.appendChild(div);
  }
}

window.addEventListener("mousedown",function(){
  draw = true;
})
window.addEventListener("mouseup",function(){
  draw = false;
})

function reset(){
  tableGrid.innerHTML = '';
  populate(size)
}

function addColor(){
  $('pixel').mousedown()
}

populate(size);

changeGrid.addEventListener('click',function(){
  tableGrid.innerHTML ='';
  populate(gridsize.value);
})