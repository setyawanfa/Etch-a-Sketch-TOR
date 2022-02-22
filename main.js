const defaultSize = 16;
const defaultColor = "black";
const tableGrid = document.getElementById("table-grid");
const color = document.getElementsByClassName('color');
const clearGrid = document.getElementById('clearGrid');
const gridsize = document.getElementById('gridSize');
const changeGrid = document.getElementById('changeGrid');
color[0].value = defaultColor;
gridsize.value = defaultSize;

let size = gridsize.value;
let draw = false;

// window.onmousedown(function(){
//   draw = true;
// })
// window.onmouseup(function(){
//   draw=false
// })

window.addEventListener('mousedown',function(){
  draw = true;
})


window.addEventListener('mouseup',function(){
  draw = false;
})
function colorPixel(event){
  this.style.backgroundColor = color[0].value;
}
function colorHover(event){
  if(draw){
    this.style.backgroundColor = color[0].value;
  }
}
//populate the grid by using css grid
//for each of 'pixel' class have event listener that change the color for each grid.
function populate(size){
  tableGrid.style.setProperty('--size',size);
  for (let i=0;i<size * size;i++){
    const pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.onmouseover = colorHover;
    pixel.onmousedown = colorPixel;
    
    tableGrid.appendChild(pixel);
  }
}



function reset(){
  tableGrid.innerHTML = '';
  populate(size)
}




populate(size);

changeGrid.addEventListener('click',function(){
  tableGrid.innerHTML ='';
  populate(gridsize.value);
})


//clear the grid color by changing the background color to white
clearGrid.addEventListener('click',function(){
  $('.pixel').css("background-color",'white');
})