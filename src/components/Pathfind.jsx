import React, { useEffect, useState } from "react";
const rows = 5;
const cols = 5;

export default function Pathfind() {
  const { grid, setGrid } = useState([]);

  const gridInitializer = () => {
    const grid = new Array(cols);

    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }
    createSpot(grid);
  };

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

  return (
    <div>
      <h1> Pathfind Component</h1>
    </div>
  );
}
