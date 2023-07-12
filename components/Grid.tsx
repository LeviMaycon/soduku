import React from 'react';

type GridProps = {
  grid: number[][];
};

const Grid: React.FC<GridProps> = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {row.map((cell, colIndex) => (
            <div key={`cell-${rowIndex}-${colIndex}`} className="cell">
              {cell !== 0 ? cell: ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default Grid;
