import React, {useState, useEffect} from 'react';
import TreasureBlock from './TreasureBlock';
import Button from './Button';

const Grid = ({rowVal, colVal}) => {

  let grid, rowsNumVal, colsNumVal; 
  rowsNumVal = Number(rowVal);
  colsNumVal = Number(colVal);

  grid = Array(rowsNumVal).fill(0);
  for(let i = 0; i < grid.length; i++) {
    grid[i] = Array(colsNumVal).fill(0);
  }

  const [ gridState, handleGridState ] = useState(grid);
  const [ showTreasureGrid, setShowTreasureGrid ] = useState(false);

  const getTreasureIndex = (i,j) => (treasure) => {
      const newArr = [...gridState];
      newArr[i][j] = treasure;
      newArr[i] = [ ...newArr[i]];
      handleGridState(newArr);
  }

  const handleTreasure = (gridState, i, j) => {
    if(gridState[i] && (typeof gridState[i][j] === 'number')) {
      gridState[i][j]++;
  }
  return gridState;
  }

  const findTreasureAdjacent = (gridState, i, j) => {
    let horizontal = i;
    let vertical = j;
    gridState = handleTreasure(gridState, horizontal, vertical + 1);
    gridState = handleTreasure(gridState, horizontal, vertical - 1);
    gridState = handleTreasure(gridState, horizontal - 1, vertical + 1);
    gridState = handleTreasure(gridState, horizontal - 1, vertical - 1);
    gridState = handleTreasure(gridState, horizontal - 1, vertical);
    gridState = handleTreasure(gridState, horizontal + 1, vertical + 1);
    gridState = handleTreasure(gridState, horizontal + 1, vertical - 1);
    gridState = handleTreasure(gridState, horizontal + 1, vertical);
    return gridState;
  }

  const findTreasure = () => {
    let newArr;
    newArr = [...gridState];
    for(let i = 0; i < gridState.length; i++) { 
      for(let j = 0; j < gridState.length; j++) {
        if (newArr[i][j] === 'X') {
          newArr = findTreasureAdjacent(newArr, i, j);
        }
      }
    }
    handleGridState(newArr);
    handleSetShowTreasureGrid();
  }

  const handleSetShowTreasureGrid = () => {
    setShowTreasureGrid(true);
  }

  const resetSetShowTreasureGrid = () => {
    setShowTreasureGrid(false);
  }

  return (
    <div className="grid">
        { showTreasureGrid 
          ? gridState && gridState.map((columns, i)=> (
            <div key={`row-${i}`} className="gridRows">  
              {columns.map((c, j) => (
                <div
                 key={`row-${i} col-${j}`} 
                 className="treasureBlock"
                >
                 {gridState[i][j]}
                </div>
              ))}
            </div>
          ))
          : gridState && gridState.map((columns, i)=> (
            <div key={`row-${i}`} className="gridRows">  
              {columns.map((c, j) => (
                <TreasureBlock
                 key={`row-${i} col-${j}`} 
                 getTreasure={getTreasureIndex(i,j)}
                />
              ))}
            </div>
        ))}
        <Button
          onClick={findTreasure}
        >
          Submit
        </Button>
        <Button
          onClick={resetSetShowTreasureGrid}
        >
          Reset
        </Button>
    </div>
  )
}

export default Grid;