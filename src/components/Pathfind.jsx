import React, { useEffect, useState } from "react";
import Node from "./Node";
import "./Pathfind.css";
const rows = 5;
const cols = 5;

export default function Pathfind() {
  const { grid, setGrid } = useState([]);

  // We use useEffect to prioritaze the render of the  initializer in to the dom

  useEffect(() => {
    gridInitializer();
  }, []); // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

  // Grid Itteration To create a grid
  const gridInitializer = () => {
    const grid = new Array(cols);

    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }
    createSpot(grid);
    setGrid(grid);
  };

  // Spot creation To find where the spot IS
  const createSpot = (grid) => {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  };

  const Spot = (i, j) => {
    this.x = i;
    this.y = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
  };

  console.log(grid);
  return (
    <div>
      <h1> Pathfind Component</h1>
    </div>
  );
}
