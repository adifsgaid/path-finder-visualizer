import React, { useEffect, useState } from "react";
import Node from "./Node";
import "./Pathfind.css";

const rows = 14;
const cols = 35;

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
            {row.map((cols, colsIndex) => {
              return <Node key={colsIndex} />;
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

