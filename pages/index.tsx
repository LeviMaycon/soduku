import React, { useState } from 'react';
import Grid from '../components/Grid';

const Home: React.FC = () => {
  const initialGrid: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [grid, setGrid] = useState<number[][]>(initialGrid);

  const handleCellChange = (row: number, col: number, value: number) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const checkWinCondition = (): boolean => {
    // Verificar se a grade está totalmente preenchida
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === 0) {
          return false; // Ainda há células vazias, portanto o jogador não venceu
        }
      }
    }

    // Verificar se todas as linhas contêm números únicos
    for (let row = 0; row < grid.length; row++) {
      const rowValues = new Set<number>();
      for (let col = 0; col < grid[row].length; col++) {
        const value = grid[row][col];
        if (rowValues.has(value)) {
          return false; // Valor duplicado na linha, portanto o jogador não venceu
        }
        rowValues.add(value);
      }
    }

    // Verificar se todas as colunas contêm números únicos
    for (let col = 0; col < grid[0].length; col++) {
      const colValues = new Set<number>();
      for (let row = 0; row < grid.length; row++) {
        const value = grid[row][col];
        if (colValues.has(value)) {
          return false; // Valor duplicado na coluna, portanto o jogador não venceu
        }
        colValues.add(value);
      }
    }

    // Verificar se todas as subgrades 3x3 contêm números únicos
    for (let startRow = 0; startRow < grid.length; startRow += 3) {
      for (let startCol = 0; startCol < grid[0].length; startCol += 3) {
        const subgridValues = new Set<number>();
        for (let row = startRow; row < startRow + 3; row++) {
          for (let col = startCol; col < startCol + 3; col++) {
            const value = grid[row][col];
            if (subgridValues.has(value)) {
              return false; // Valor duplicado na subgrade, portanto o jogador não venceu
            }
            subgridValues.add(value);
          }
        }
      }
    }

    return true; // A grade está totalmente preenchida e correta, o jogador venceu
  };



  return (
    <div className="container">
      <h1>Sudoku Game</h1>
      <Grid grid={grid} onCellChange={handleCellChange} />
      {/* Adicione aqui elementos adicionais do jogo, como um botão para verificar a vitória */}
    </div>
  );
};

export default Home;
