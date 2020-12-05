
const windowSize = 480; // Gameplay window size (both height & width)
const gridMin = 8;
const gridMax = 96;

// Default values for grid size & cells (both height & width)
// cell size is determined by windowsize / gridsize (480/16 = 30)
let gridSize = 16;
let cellsize = 30;
let numberOfCells = 256;

PopulateGrid();

function PopulateGrid() {

    const grid = document.querySelector('#gridContainer');
    
        for (i=1; i<=numberOfCells; i++) {

        let newCell = document.createElement('div');
        newCell.className = "gridCell";

        grid.appendChild(newCell);

    }

}

