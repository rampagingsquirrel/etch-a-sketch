
const windowSize = 480; // Gameplay window size (both height & width)
const gridMin = 8;
const gridMax = 96;

const btnGrow = document.querySelector('#btnGrow');
const btnShrink = document.querySelector('#btnShrink');
const btnReset = document.querySelector('#btnReset');

// Default values for grid size & cells (both height & width)
// cell size is determined by windowsize / gridsize (480/16 = 30)
// numberOfCells is gridSize * gridSize
let gridSize = 16;
let cellSize = 30;
let numberOfCells = 256;

btnGrow.addEventListener('click', () => { GrowGrid(); });
btnShrink.addEventListener('click', () => { ShrinkGrid(); });
btnReset.addEventListener('click', () => { ResetGrid(); });

PopulateGrid();

function PopulateGrid() {

    const grid = document.querySelector('#gridContainer');
    
        for (i=1; i<=numberOfCells; i++) {

        let newCell = document.createElement('div');
        newCell.className = "gridCell";
        newCell.style.width = `${cellSize}px`;
        newCell.style.height = `${cellSize}px`;
        newCell.style.backgroundColor = "rgb(255, 255, 255";
        newCell.addEventListener('mouseover', () => { DarkenCell(newCell) });

        grid.appendChild(newCell);

    }

}

function DarkenCell(cell) {

    let currentRGB = cell.style.backgroundColor;
    if (currentRGB == "rgb(0, 0, 0"){ return; }

    let colorIncrement = 50;
    currentRGB = currentRGB.replace(/[^\d,]/g, '').split(',');

    // all three RGB values will be the same number, so we'll only need to sample one
    let newRGB = currentRGB[0] - colorIncrement;
    if (newRGB < 0) { newRGB = 0; }
    cell.style.backgroundColor = `rgb(${newRGB}, ${newRGB}, ${newRGB})`; 
    
}

function GrowGrid() {

    // increase number of cells by 8, to a maximum of 'gridMax'

    if (gridSize == gridMax) {
        ResetGrid();
        return;
    }

    const grid = document.getElementById("gridContainer");

    gridSize = gridSize + 8;
    cellSize = windowSize / gridSize;
    numberOfCells = gridSize * gridSize;

    // adjust CSS grid to match new size
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    ResetGrid();

}

function ShrinkGrid() {

    // increase number of cells by 8, to a maximum of 'gridMax'

    if (gridSize == gridMin) {
        ResetGrid();
        return;
    }

    const grid = document.getElementById("gridContainer");

    gridSize = gridSize - 4;
    cellSize = windowSize / gridSize;
    numberOfCells = gridSize * gridSize;

    // adjust CSS grid to match new size
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    ResetGrid();
}

function ResetGrid() {
    
    // Remove all grid cells from the container, then rebuild. 
    const grid = document.querySelector('#gridContainer');

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    PopulateGrid();
}

