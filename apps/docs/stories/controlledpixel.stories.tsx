import React, { useState } from 'react';
import { ControlledPixel } from "@heydan/core";

const options = {
  title: 'ControlledPixel',
};

export default options;

export const Default = () => {
  const arr = Array(8).fill(false).map((m, i) => (
    Array(8).fill(false)
  ));

  const [grid, setGrid] = useState(arr);

  function handleClick(e, x, y) {
    const newGrid = [...grid]
    if (e.type === 'mousedown') {
      newGrid[x][y] = !grid[x][y];
      setGrid(newGrid);
      return;
    }

    if (e.type === 'mouseover' && e.buttons) {
      newGrid[x][y] = true;
      setGrid(newGrid);
    }
  }
  
  return (
    grid.map((m, x) => (
      <div style={{display: 'flex'}} key={x}>
        {m.map((m, y) => <ControlledPixel
          key={`x:${x},y:${y}`}
          onMouseDown={(e) => handleClick(e, x, y)}
          onMouseOver={(e) => handleClick(e, x, y)}
          isActive={m}
        />)}
      </div>
    ))
  )
};
