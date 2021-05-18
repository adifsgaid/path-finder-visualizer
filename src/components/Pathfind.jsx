import React, { useEffect, useState } from "react";
import Node from "./Node";
import "./Pathfind.css";

const rows = 14;
const cols = 35;

const NODE_START_ROW = 0;
const NODE_END_ROW = rows - 6;

const NODE_START_COL = 0; 
const NODE_END_COL = cols - 4;

export default function Pathfind() {
  const [Grid, setGrid] = useState([]);

  // We use useEffect to prioritaze the render of the  initializer in to the dom

  useEffect(() => {
    gridInitializer();
  }, []);
  // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

  // Grid Itteration To create a grid
  const gridInitializer = () => {
    const grid = new Array(rows);

    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols);
    }
    createSpot(grid);

    setGrid(grid);
  };

  // Spot creation To find where the spot IS
  const createSpot = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  };

  function Spot(i, j) {
    this.x = i;
    this.y = j;
    this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
    this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
    this.g = 0;
    this.f = 0;
    this.h = 0;
  }

  // Grid iterating with node
  const gridWithNode = (
    <div>
      {Grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="rowWrapper">
            {row.map((col, colsIndex) => {
              const {isStart, isEnd} = col
              return <Node key={colsIndex} isStart={isStart} isEnd={isEnd} />;
            })}
          </div>
        );
      })}
    </div>
  );
  return (
    <div className="wrapper">
      <h1> Pathfind Component</h1>
      {gridWithNode}
    </div>
  );
}

