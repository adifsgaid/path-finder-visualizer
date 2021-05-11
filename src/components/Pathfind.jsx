import React, { useEffect, useState } from "react";
const row = 5;
const cols = 5;

export default function Pathfind() {
  const { grid, setGrid } = useState([]);

  const gridInitializer = () => {
    const grid = new Array(cols);

    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        gird[i][j];
      }
    }
  };
  return (
    <div>
      <h1> Pathfind Component</h1>
    </div>
  );
}
